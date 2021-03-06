// Copyright 2008 The Closure Library Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

goog.provide('goog.editor.plugins.UndoRedoTest');
goog.setTestOnly('goog.editor.plugins.UndoRedoTest');

goog.require('goog.array');
goog.require('goog.dom');
goog.require('goog.dom.browserrange');
goog.require('goog.editor.Field');
goog.require('goog.editor.plugins.LoremIpsum');
goog.require('goog.editor.plugins.UndoRedo');
goog.require('goog.events');
goog.require('goog.functions');
goog.require('goog.testing.MockClock');
goog.require('goog.testing.PropertyReplacer');
goog.require('goog.testing.StrictMock');
goog.require('goog.testing.jsunit');

var mockEditableField;
var editableField;
var fieldHashCode;
var undoPlugin;
var state;
var mockState;
var commands;
var clock;
var stubs = new goog.testing.PropertyReplacer();


function setUp() {
  mockEditableField = new goog.testing.StrictMock(goog.editor.Field);

  // Update the arg list verifier for dispatchCommandValueChange to
  // correctly compare arguments that are arrays (or other complex objects).
  mockEditableField.$registerArgumentListVerifier(
      'dispatchEvent', function(expected, args) {
        return goog.array.equals(expected, args, function(a, b) {
          assertObjectEquals(a, b);
          return true;
        });
      });
  mockEditableField.getHashCode = function() { return 'fieldId'; };

  undoPlugin = new goog.editor.plugins.UndoRedo();
  undoPlugin.registerFieldObject(mockEditableField);
  mockState =
      new goog.testing.StrictMock(goog.editor.plugins.UndoRedo.UndoState_);
  mockState.fieldHashCode = 'fieldId';
  mockState.isAsynchronous = function() { return false; };
  // Don't bother mocking the inherited event target pieces of the state.
  // If we don't do this, then mocked asynchronous undos are a lot harder and
  // that behavior is tested as part of the UndoRedoManager tests.
  mockState.addEventListener = goog.nullFunction;

  commands = [
    goog.editor.plugins.UndoRedo.COMMAND.REDO,
    goog.editor.plugins.UndoRedo.COMMAND.UNDO
  ];
  state = new goog.editor.plugins.UndoRedo.UndoState_(
      '1', '', null, goog.nullFunction);

  clock = new goog.testing.MockClock(true);

  editableField = new goog.editor.Field('testField');
  fieldHashCode = editableField.getHashCode();
}


function tearDown() {
  // Reset field so any attempted access during disposes don't cause errors.
  mockEditableField.$reset();
  clock.dispose();
  undoPlugin.dispose();

  // NOTE(nicksantos): I think IE is blowing up on this call because
  // it is lame. It manifests its lameness by throwing an exception.
  // Kudos to XT for helping me to figure this out.
  try {
  } catch (e) {
  }

  if (!editableField.isUneditable()) {
    editableField.makeUneditable();
  }
  editableField.dispose();
  goog.dom.removeChildren(goog.dom.getElement('testField'));
  stubs.reset();
}


// undo-redo plugin tests


function testQueryCommandValue() {
  assertFalse(
      'Must return false for empty undo stack.',
      undoPlugin.queryCommandValue(goog.editor.plugins.UndoRedo.COMMAND.UNDO));

  assertFalse(
      'Must return false for empty redo stack.',
      undoPlugin.queryCommandValue(goog.editor.plugins.UndoRedo.COMMAND.REDO));

  undoPlugin.undoManager_.addState(mockState);

  assertTrue(
      'Must return true for a non-empty undo stack.',
      undoPlugin.queryCommandValue(goog.editor.plugins.UndoRedo.COMMAND.UNDO));
}


function testExecCommand() {
  undoPlugin.undoManager_.addState(mockState);

  mockState.undo();
  mockState.$replay();

  undoPlugin.execCommand(goog.editor.plugins.UndoRedo.COMMAND.UNDO);
  // Second undo should do nothing since only one item on stack.
  undoPlugin.execCommand(goog.editor.plugins.UndoRedo.COMMAND.UNDO);
  mockState.$verify();

  mockState.$reset();
  mockState.redo();
  mockState.$replay();
  undoPlugin.execCommand(goog.editor.plugins.UndoRedo.COMMAND.REDO);
  // Second redo should do nothing since only one item on stack.
  undoPlugin.execCommand(goog.editor.plugins.UndoRedo.COMMAND.REDO);
  mockState.$verify();
}

function testHandleKeyboardShortcut_TrogStates() {
  undoPlugin.undoManager_.addState(mockState);
  undoPlugin.undoManager_.addState(state);
  undoPlugin.undoManager_.undo();
  mockEditableField.$reset();

  var stubUndoEvent = {ctrlKey: true, altKey: false, shiftKey: false};
  var stubRedoEvent = {ctrlKey: true, altKey: false, shiftKey: true};
  var stubRedoEvent2 = {ctrlKey: true, altKey: false, shiftKey: false};
  var result;

  // Test handling Trogedit undos. Should always call EditableField's
  // execCommand. Since EditableField is mocked, this will not result in a call
  // to the mockState's undo and redo methods.
  mockEditableField.execCommand(goog.editor.plugins.UndoRedo.COMMAND.UNDO);
  mockEditableField.$replay();
  result = undoPlugin.handleKeyboardShortcut(stubUndoEvent, 'z', true);
  assertTrue('Plugin must return true when it handles shortcut.', result);
  mockEditableField.$verify();
  mockEditableField.$reset();

  mockEditableField.execCommand(goog.editor.plugins.UndoRedo.COMMAND.REDO);
  mockEditableField.$replay();
  result = undoPlugin.handleKeyboardShortcut(stubRedoEvent, 'z', true);
  assertTrue('Plugin must return true when it handles shortcut.', result);
  mockEditableField.$verify();
  mockEditableField.$reset();

  mockEditableField.execCommand(goog.editor.plugins.UndoRedo.COMMAND.REDO);
  mockEditableField.$replay();
  result = undoPlugin.handleKeyboardShortcut(stubRedoEvent2, 'y', true);
  assertTrue('Plugin must return true when it handles shortcut.', result);
  mockEditableField.$verify();
  mockEditableField.$reset();

  mockEditableField.$replay();
  result = undoPlugin.handleKeyboardShortcut(stubRedoEvent2, 'y', false);
  assertFalse('Plugin must return false when modifier is not pressed.', result);
  mockEditableField.$verify();
  mockEditableField.$reset();

  mockEditableField.$replay();
  result = undoPlugin.handleKeyboardShortcut(stubUndoEvent, 'f', true);
  assertFalse(
      'Plugin must return false when it doesn\'t handle shortcut.', result);
  mockEditableField.$verify();
}

function testHandleKeyboardShortcut_NotTrogStates() {
  var stubUndoEvent = {ctrlKey: true, altKey: false, shiftKey: false};

  // Trogedit undo states all have a fieldHashCode, nulling that out makes this
  // state be treated as a non-Trogedit undo-redo state.
  state.fieldHashCode = null;
  undoPlugin.undoManager_.addState(state);
  mockEditableField.$reset();

  // Non-trog state shouldn't go through EditableField.execCommand, however,
  // we still exect command value change dispatch since undo-redo plugin
  // redispatches those anytime manager's state changes.
  mockEditableField.dispatchEvent({
    type: goog.editor.Field.EventType.COMMAND_VALUE_CHANGE,
    commands: commands
  });
  mockEditableField.$replay();
  var result = undoPlugin.handleKeyboardShortcut(stubUndoEvent, 'z', true);
  assertTrue('Plugin must return true when it handles shortcut.', result);
  mockEditableField.$verify();
}

function testEnable() {
  assertFalse(
      'Plugin must start disabled.', undoPlugin.isEnabled(editableField));

  editableField.makeEditable(editableField);
  editableField.setHtml(false, '<div>a</div>');
  undoPlugin.enable(editableField);

  assertTrue(undoPlugin.isEnabled(editableField));
  assertNotNull(
      'Must have an event handler for enabled field.',
      undoPlugin.eventHandlers_[fieldHashCode]);

  var currentState = undoPlugin.currentStates_[fieldHashCode];
  assertNotNull('Enabled plugin must have a current state.', currentState);
  assertEquals(
      'After enable, undo content must match the field content.',
      editableField.getElement().innerHTML, currentState.undoContent_);

  assertTrue(
      'After enable, undo cursorPosition must match the field cursor' +
          'position.',
      cursorPositionsEqual(
          getCurrentCursorPosition(), currentState.undoCursorPosition_));

  assertUndefined(
      'Current state must never have redo content.', currentState.redoContent_);
  assertUndefined(
      'Current state must never have redo cursor position.',
      currentState.redoCursorPosition_);
}

function testDisable() {
  editableField.makeEditable(editableField);
  undoPlugin.enable(editableField);
  assertTrue(
      'Plugin must be enabled so we can test disabling.',
      undoPlugin.isEnabled(editableField));

  var delayedChangeFired = false;
  goog.events.listenOnce(
      editableField, goog.editor.Field.EventType.DELAYEDCHANGE,
      function(e) { delayedChangeFired = true; });
  editableField.setHtml(false, 'foo');

  undoPlugin.disable(editableField);
  assertTrue('disable must fire pending delayed changes.', delayedChangeFired);
  assertEquals(
      'disable must add undo state from pending change.', 1,
      undoPlugin.undoManager_.undoStack_.length);

  assertFalse(undoPlugin.isEnabled(editableField));
  assertUndefined(
      'Disabled plugin must not have current state.',
      undoPlugin.eventHandlers_[fieldHashCode]);
  assertUndefined(
      'Disabled plugin must not have event handlers.',
      undoPlugin.eventHandlers_[fieldHashCode]);
}

function testUpdateCurrentState_() {
  editableField.registerPlugin(new goog.editor.plugins.LoremIpsum('LOREM'));
  editableField.makeEditable(editableField);
  editableField.getPluginByClassId('LoremIpsum').usingLorem_ = true;
  undoPlugin.updateCurrentState_(editableField);
  var currentState = undoPlugin.currentStates_[fieldHashCode];
  assertNotUndefined(
      'Must create empty states for field using lorem ipsum.',
      undoPlugin.currentStates_[fieldHashCode]);
  assertEquals('', currentState.undoContent_);
  assertNull(currentState.undoCursorPosition_);

  editableField.getPluginByClassId('LoremIpsum').usingLorem_ = false;

  // Pretend foo is the default contents to test '' == default contents
  // behavior.
  editableField.getInjectableContents = function(contents, styles) {
    return contents == '' ? 'foo' : contents;
  };
  editableField.setHtml(false, 'foo');
  undoPlugin.updateCurrentState_(editableField);
  assertEquals(currentState, undoPlugin.currentStates_[fieldHashCode]);

  // NOTE(user): Because there is already a current state, this setHtml will add
  // a state to the undo stack.
  editableField.setHtml(false, '<div>a</div>');
  // Select some text so we have a valid selection that gets saved in the
  // UndoState.
  goog.dom.browserrange.createRangeFromNodeContents(editableField.getElement())
      .select();

  undoPlugin.updateCurrentState_(editableField);
  currentState = undoPlugin.currentStates_[fieldHashCode];
  assertNotNull(
      'Must create state for field not using lorem ipsum', currentState);
  assertEquals(fieldHashCode, currentState.fieldHashCode);
  var content = editableField.getElement().innerHTML;
  var cursorPosition = getCurrentCursorPosition();
  assertEquals(content, currentState.undoContent_);
  assertTrue(
      cursorPositionsEqual(cursorPosition, currentState.undoCursorPosition_));
  assertUndefined(currentState.redoContent_);
  assertUndefined(currentState.redoCursorPosition_);

  undoPlugin.updateCurrentState_(editableField);
  assertEquals(
      'Updating state when state has not changed must not add undo ' +
          'state to stack.',
      1, undoPlugin.undoManager_.undoStack_.length);
  assertEquals(
      'Updating state when state has not changed must not create ' +
          'a new state.',
      currentState, undoPlugin.currentStates_[fieldHashCode]);
  assertUndefined(
      'Updating state when state has not changed must not add ' +
          'redo content.',
      currentState.redoContent_);
  assertUndefined(
      'Updating state when state has not changed must not add ' +
          'redo cursor position.',
      currentState.redoCursorPosition_);

  editableField.setHtml(false, '<div>b</div>');
  undoPlugin.updateCurrentState_(editableField);
  currentState = undoPlugin.currentStates_[fieldHashCode];
  assertNotNull(
      'Must create state for field not using lorem ipsum', currentState);
  assertEquals(fieldHashCode, currentState.fieldHashCode);
  var newContent = editableField.getElement().innerHTML;
  var newCursorPosition = getCurrentCursorPosition();
  assertEquals(newContent, currentState.undoContent_);
  assertTrue(
      cursorPositionsEqual(
          newCursorPosition, currentState.undoCursorPosition_));
  assertUndefined(currentState.redoContent_);
  assertUndefined(currentState.redoCursorPosition_);

  var undoState = goog.array.peek(undoPlugin.undoManager_.undoStack_);
  assertNotNull(
      'Must create state for field not using lorem ipsum', currentState);
  assertEquals(fieldHashCode, currentState.fieldHashCode);
  assertEquals(content, undoState.undoContent_);
  assertTrue(
      cursorPositionsEqual(cursorPosition, undoState.undoCursorPosition_));
  assertEquals(newContent, undoState.redoContent_);
  assertTrue(
      cursorPositionsEqual(newCursorPosition, undoState.redoCursorPosition_));
}


/**
 * Tests that change events get restarted properly after an undo call despite
 * an exception being thrown in the process (see bug/1991234).
 */
function testUndoRestartsChangeEvents() {
  undoPlugin.registerFieldObject(editableField);
  editableField.makeEditable(editableField);
  editableField.setHtml(false, '<div>a</div>');
  clock.tick(1000);
  undoPlugin.enable(editableField);

  // Change content so we can undo it.
  editableField.setHtml(false, '<div>b</div>');
  clock.tick(1000);

  var currentState = undoPlugin.currentStates_[fieldHashCode];
  stubs.set(
      editableField, 'setCursorPosition',
      goog.functions.error('Faking exception during setCursorPosition()'));
  try {
    currentState.undo();
  } catch (e) {
    fail('Exception should not have been thrown during undo()');
  }
  assertEquals(
      'Change events should be on', 0,
      editableField.stoppedEvents_[goog.editor.Field.EventType.CHANGE]);
  assertEquals(
      'Delayed change events should be on', 0,
      editableField.stoppedEvents_[goog.editor.Field.EventType.DELAYEDCHANGE]);
}

function testRefreshCurrentState() {
  editableField.makeEditable(editableField);
  editableField.setHtml(false, '<div>a</div>');
  clock.tick(1000);
  undoPlugin.enable(editableField);

  // Create current state and verify it.
  var currentState = undoPlugin.currentStates_[fieldHashCode];
  assertEquals(fieldHashCode, currentState.fieldHashCode);
  var content = editableField.getElement().innerHTML;
  var cursorPosition = getCurrentCursorPosition();
  assertEquals(content, currentState.undoContent_);
  assertTrue(
      cursorPositionsEqual(cursorPosition, currentState.undoCursorPosition_));

  // Update the field w/o dispatching delayed change, and verify that the
  // current state hasn't changed to reflect new values.
  editableField.setHtml(false, '<div>b</div>', true);
  clock.tick(1000);
  currentState = undoPlugin.currentStates_[fieldHashCode];
  assertEquals(
      'Content must match old state.', content, currentState.undoContent_);
  assertTrue(
      'Cursor position must match old state.',
      cursorPositionsEqual(cursorPosition, currentState.undoCursorPosition_));

  undoPlugin.refreshCurrentState(editableField);
  assertFalse(
      'Refresh must not cause states to go on the undo-redo stack.',
      undoPlugin.undoManager_.hasUndoState());
  currentState = undoPlugin.currentStates_[fieldHashCode];
  content = editableField.getElement().innerHTML;
  cursorPosition = getCurrentCursorPosition();
  assertEquals(
      'Content must match current field state.', content,
      currentState.undoContent_);
  assertTrue(
      'Cursor position must match current field state.',
      cursorPositionsEqual(cursorPosition, currentState.undoCursorPosition_));

  undoPlugin.disable(editableField);
  assertUndefined(undoPlugin.currentStates_[fieldHashCode]);
  undoPlugin.refreshCurrentState(editableField);
  assertUndefined(
      'Must not refresh current state of fields that do not have ' +
          'undo-redo enabled.',
      undoPlugin.currentStates_[fieldHashCode]);
}


/**
 * Returns the CursorPosition for the selection currently in the Field.
 * @return {goog.editor.plugins.UndoRedo.CursorPosition_}
 */
function getCurrentCursorPosition() {
  return undoPlugin.getCursorPosition_(editableField);
}


/**
 * Compares two cursor positions and returns whether they are equal.
 * @param {goog.editor.plugins.UndoRedo.CursorPosition_} a
 *     A cursor position.
 * @param {goog.editor.plugins.UndoRedo.CursorPosition_} b
 *     A cursor position.
 * @return {boolean} Whether the positions are equal.
 */
function cursorPositionsEqual(a, b) {
  if (!a && !b) {
    return true;
  } else if (a && b) {
    return a.toString() == b.toString();
  }
  // Only one cursor position is an object, can't be equal.
  return false;
}
// Undo state tests


function testSetUndoState() {
  state.setUndoState('content', 'position');
  assertEquals('Undo content incorrectly set', 'content', state.undoContent_);
  assertEquals(
      'Undo cursor position incorrectly set', 'position',
      state.undoCursorPosition_);
}

function testSetRedoState() {
  state.setRedoState('content', 'position');
  assertEquals('Redo content incorrectly set', 'content', state.redoContent_);
  assertEquals(
      'Redo cursor position incorrectly set', 'position',
      state.redoCursorPosition_);
}

function testEquals() {
  assertTrue('A state must equal itself', state.equals(state));

  var state2 = new goog.editor.plugins.UndoRedo.UndoState_('1', '', null);
  assertTrue(
      'A state must equal a state with the same hash code and content.',
      state.equals(state2));

  state2 = new goog.editor.plugins.UndoRedo.UndoState_('1', '', 'foo');
  assertTrue(
      'States with different cursor positions must be equal',
      state.equals(state2));

  state2.setRedoState('bar', null);
  assertFalse(
      'States with different redo content must not be equal',
      state.equals(state2));

  state2 = new goog.editor.plugins.UndoRedo.UndoState_('3', '', null);
  assertFalse(
      'States with different field hash codes must not be equal',
      state.equals(state2));

  state2 = new goog.editor.plugins.UndoRedo.UndoState_('1', 'baz', null);
  assertFalse(
      'States with different undoContent must not be equal',
      state.equals(state2));
}


/** @bug 1359214 */
function testClearUndoHistory() {
  var undoRedoPlugin = new goog.editor.plugins.UndoRedo();
  editableField.registerPlugin(undoRedoPlugin);
  editableField.makeEditable(editableField);

  editableField.dispatchChange();
  clock.tick(10000);

  goog.dom.setTextContent(editableField.getElement(), 'y');
  editableField.dispatchChange();
  assertFalse(undoRedoPlugin.undoManager_.hasUndoState());

  clock.tick(10000);
  assertTrue(undoRedoPlugin.undoManager_.hasUndoState());

  goog.dom.setTextContent(editableField.getElement(), 'z');
  editableField.dispatchChange();

  var numCalls = 0;
  goog.events.listen(
      editableField, goog.editor.Field.EventType.DELAYEDCHANGE,
      function() { numCalls++; });
  undoRedoPlugin.clearHistory();
  // 1 call from stopChangeEvents(). 0 calls from startChangeEvents().
  assertEquals(
      'clearHistory must not cause delayed change when none pending', 1,
      numCalls);

  clock.tick(10000);
  assertFalse(undoRedoPlugin.undoManager_.hasUndoState());
}
