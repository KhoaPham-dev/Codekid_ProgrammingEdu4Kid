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

goog.provide('goog.testing.net.XhrIoTest');
goog.setTestOnly('goog.testing.net.XhrIoTest');

goog.require('goog.dom.xml');
goog.require('goog.events');
goog.require('goog.events.Event');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.EventType');
goog.require('goog.net.XmlHttp');
goog.require('goog.object');
goog.require('goog.testing.MockControl');
goog.require('goog.testing.asserts');
goog.require('goog.testing.jsunit');
goog.require('goog.testing.mockmatchers.InstanceOf');
goog.require('goog.testing.net.XhrIo');

var mockControl;

function setUp() {
  mockControl = new goog.testing.MockControl();
}

function testStaticSend() {
  sendInstances = goog.testing.net.XhrIo.getSendInstances();
  var returnedXhr = goog.testing.net.XhrIo.send('url');
  assertEquals('sendInstances_ after send', 1, sendInstances.length);
  xhr = sendInstances[sendInstances.length - 1];
  assertTrue('isActive after request', xhr.isActive());
  assertEquals(returnedXhr, xhr);
  assertEquals(
      'readyState after request', goog.net.XmlHttp.ReadyState.LOADING,
      xhr.getReadyState());

  xhr.simulateResponse(200, '');
  assertFalse('isActive after response', xhr.isActive());
  assertEquals(
      'readyState after response', goog.net.XmlHttp.ReadyState.COMPLETE,
      xhr.getReadyState());

  xhr.simulateReady();
  assertEquals('sendInstances_ after READY', 0, sendInstances.length);
}

function testStaticSendWithException() {
  goog.testing.net.XhrIo.send('url', function() {
    if (!this.isSuccess()) {
      throw Error('The xhr did not complete successfully!');
    }
  });
  var sendInstances = goog.testing.net.XhrIo.getSendInstances();
  var xhr = sendInstances[sendInstances.length - 1];
  try {
    xhr.simulateResponse(400, '');
  } catch (e) {
    // Do nothing with the exception; we just want to make sure
    // the class cleans itself up properly when an exception is
    // thrown.
  }
  assertEquals(
      'Send instance array not cleaned up properly!', 0, sendInstances.length);
}

function testMultipleSend() {
  var xhr = new goog.testing.net.XhrIo();
  assertFalse('isActive before first request', xhr.isActive());
  assertEquals(
      'readyState before first request',
      goog.net.XmlHttp.ReadyState.UNINITIALIZED, xhr.getReadyState());

  xhr.send('url');
  assertTrue('isActive after first request', xhr.isActive());
  assertEquals(
      'readyState after first request', goog.net.XmlHttp.ReadyState.LOADING,
      xhr.getReadyState());

  xhr.simulateResponse(200, '');
  assertFalse('isActive after first response', xhr.isActive());
  assertEquals(
      'readyState after first response', goog.net.XmlHttp.ReadyState.COMPLETE,
      xhr.getReadyState());

  xhr.send('url');
  assertTrue('isActive after second request', xhr.isActive());
  assertEquals(
      'readyState after second request', goog.net.XmlHttp.ReadyState.LOADING,
      xhr.getReadyState());
}

function testGetLastUri() {
  var xhr = new goog.testing.net.XhrIo();
  assertEquals('nothing sent yet, empty URI', '', xhr.getLastUri());

  var requestUrl = 'http://www.example.com/';
  xhr.send(requestUrl);
  assertEquals('message sent, URI saved', requestUrl, xhr.getLastUri());
}

function testGetLastMethod() {
  var xhr = new goog.testing.net.XhrIo();
  assertUndefined('nothing sent yet, empty method', xhr.getLastMethod());

  var method = 'POKE';
  xhr.send('http://www.example.com/', method);
  assertEquals('message sent, method saved', method, xhr.getLastMethod());
  xhr.simulateResponse(200, '');

  xhr.send('http://www.example.com/');
  assertEquals('message sent, method saved', 'GET', xhr.getLastMethod());
}

function testGetLastContent() {
  var xhr = new goog.testing.net.XhrIo();
  assertUndefined('nothing sent yet, empty content', xhr.getLastContent());

  var postContent = 'var=value&var2=value2';
  xhr.send('http://www.example.com/', undefined, postContent);
  assertEquals(
      'POST message sent, content saved', postContent, xhr.getLastContent());
  xhr.simulateResponse(200, '');

  xhr.send('http://www.example.com/');
  assertUndefined('GET message sent, content cleaned', xhr.getLastContent());
}

function testGetLastRequestHeaders() {
  var xhr = new goog.testing.net.XhrIo();
  assertUndefined(
      'nothing sent yet, empty headers', xhr.getLastRequestHeaders());

  xhr.send(
      'http://www.example.com/', undefined, undefined,
      {'From': 'page@google.com'});
  assertObjectEquals(
      'Request sent with extra headers, headers saved',
      {'From': 'page@google.com'}, xhr.getLastRequestHeaders());
  xhr.simulateResponse(200, '');

  xhr.send('http://www.example.com');
  assertUndefined(
      'New request sent without extra headers', xhr.getLastRequestHeaders());
  xhr.simulateResponse(200, '');

  xhr.headers.set('X', 'A');
  xhr.headers.set('Y', 'B');
  xhr.send(
      'http://www.example.com/', undefined, undefined, {'Y': 'P', 'Z': 'Q'});
  assertObjectEquals(
      'Default headers combined with call headers',
      {'X': 'A', 'Y': 'P', 'Z': 'Q'}, xhr.getLastRequestHeaders());
  xhr.simulateResponse(200, '');
}

function testGetResponseText() {
  // Text response came.
  var called = false;
  var xhr = new goog.testing.net.XhrIo();
  goog.events.listen(xhr, goog.net.EventType.SUCCESS, function(e) {
    called = true;
    assertEquals('text', e.target.getResponseText());
  });
  xhr.simulateResponse(200, 'text');
  assertTrue(called);

  // XML response came.
  var called = false;
  var xhr = new goog.testing.net.XhrIo();
  var xml = goog.dom.xml.createDocument();
  xml.appendChild(xml.createElement('root'));
  goog.events.listen(xhr, goog.net.EventType.SUCCESS, function(e) {
    called = true;
    var text = e.target.getResponseText();
    assertTrue(/<root ?\/>/.test(text));
  });
  xhr.simulateResponse(200, xml);
  assertTrue(called);
}

function testGetResponseJson() {
  // Valid JSON response came.
  var called = false;
  var xhr = new goog.testing.net.XhrIo();
  goog.events.listen(xhr, goog.net.EventType.SUCCESS, function(e) {
    called = true;
    assertArrayEquals([0, 1], e.target.getResponseJson());
  });
  xhr.simulateResponse(200, '[0, 1]');
  assertTrue(called);

  // Valid JSON response with XSSI prefix encoded came.
  var called = false;
  var xhr = new goog.testing.net.XhrIo();
  goog.events.listen(xhr, goog.net.EventType.SUCCESS, function(e) {
    called = true;
    assertArrayEquals([0, 1], e.target.getResponseJson(')]}\', \n'));
  });
  xhr.simulateResponse(200, ')]}\', \n[0, 1]');
  assertTrue(called);

  // Invalid JSON response came.
  var called = false;
  var xhr = new goog.testing.net.XhrIo();
  goog.events.listen(xhr, goog.net.EventType.SUCCESS, function(e) {
    called = true;
    assertThrows(e.target.getResponseJson);
  });
  xhr.simulateResponse(200, '[0, 1');
  assertTrue(called);

  // XML response came.
  var called = false;
  var xhr = new goog.testing.net.XhrIo();
  var xml = goog.dom.xml.createDocument();
  xml.appendChild(xml.createElement('root'));
  goog.events.listen(xhr, goog.net.EventType.SUCCESS, function(e) {
    called = true;
    assertThrows(e.target.getResponseJson);
  });
  xhr.simulateResponse(200, xml);
  assertTrue(called);
}

function testGetResponseXml() {
  // Text response came.
  var called = false;
  var xhr = new goog.testing.net.XhrIo();
  goog.events.listen(xhr, goog.net.EventType.SUCCESS, function(e) {
    called = true;
    assertNull(e.target.getResponseXml());
  });
  xhr.simulateResponse(200, 'text');
  assertTrue(called);

  // XML response came.
  var called = false;
  var xhr = new goog.testing.net.XhrIo();
  var xml = goog.dom.xml.createDocument();
  xml.appendChild(xml.createElement('root'));
  goog.events.listen(xhr, goog.net.EventType.SUCCESS, function(e) {
    called = true;
    assertEquals(xml, e.target.getResponseXml());
  });
  xhr.simulateResponse(200, xml);
  assertTrue(called);
}

function testGetResponseHeaders_noHeadersPresent() {
  var xhr = new goog.testing.net.XhrIo();
  var mockListener = mockControl.createFunctionMock();
  mockListener(new goog.testing.mockmatchers.InstanceOf(goog.events.Event))
      .$does(function(e) {
        assertTrue(e.type == goog.net.EventType.SUCCESS);
        assertUndefined(e.target.getResponseHeader('XHR'));
      });
  mockControl.$replayAll();
  goog.events.listen(xhr, goog.net.EventType.SUCCESS, mockListener);
  xhr.simulateResponse(200, '');

  mockControl.$verifyAll();
  mockControl.$resetAll();
}

function testGetResponseHeaders_headersPresent() {
  var xhr = new goog.testing.net.XhrIo();
  var mockListener = mockControl.createFunctionMock();
  mockListener(new goog.testing.mockmatchers.InstanceOf(goog.events.Event))
      .$does(function(e) {
        assertTrue(e.type == goog.net.EventType.SUCCESS);
        assertUndefined(e.target.getResponseHeader('XHR'));
        assertEquals(e.target.getResponseHeader('Pragma'), 'no-cache');
      });
  mockControl.$replayAll();
  goog.events.listen(xhr, goog.net.EventType.SUCCESS, mockListener);
  xhr.simulateResponse(200, '', {'Pragma': 'no-cache'});

  mockControl.$verifyAll();
  mockControl.$resetAll();
}

function testAbort_WhenNoPendingSentRequests() {
  var xhr = new goog.testing.net.XhrIo();
  var eventListener = mockControl.createFunctionMock();
  mockControl.$replayAll();

  goog.events.listen(xhr, goog.net.EventType.COMPLETE, eventListener);
  goog.events.listen(xhr, goog.net.EventType.SUCCESS, eventListener);
  goog.events.listen(xhr, goog.net.EventType.ABORT, eventListener);
  goog.events.listen(xhr, goog.net.EventType.ERROR, eventListener);
  goog.events.listen(xhr, goog.net.EventType.READY, eventListener);

  xhr.abort();

  mockControl.$verifyAll();
  mockControl.$resetAll();
}

function testAbort_PendingSentRequest() {
  var xhr = new goog.testing.net.XhrIo();
  var mockListener = mockControl.createFunctionMock();

  mockListener(new goog.testing.mockmatchers.InstanceOf(goog.events.Event))
      .$does(function(e) {
        assertTrue(e.type == goog.net.EventType.COMPLETE);
        assertObjectEquals(e.target, xhr);
        assertEquals(e.target.getStatus(), -1);
        assertEquals(e.target.getLastErrorCode(), goog.net.ErrorCode.ABORT);
        assertTrue(e.target.isActive());
      });
  mockListener(new goog.testing.mockmatchers.InstanceOf(goog.events.Event))
      .$does(function(e) {
        assertTrue(e.type == goog.net.EventType.ABORT);
        assertObjectEquals(e.target, xhr);
        assertTrue(e.target.isActive());
      });
  mockListener(new goog.testing.mockmatchers.InstanceOf(goog.events.Event))
      .$does(function(e) {
        assertTrue(e.type == goog.net.EventType.READY);
        assertObjectEquals(e.target, xhr);
        assertFalse(e.target.isActive());
      });
  mockControl.$replayAll();

  goog.events.listen(xhr, goog.net.EventType.COMPLETE, mockListener);
  goog.events.listen(xhr, goog.net.EventType.SUCCESS, mockListener);
  goog.events.listen(xhr, goog.net.EventType.ABORT, mockListener);
  goog.events.listen(xhr, goog.net.EventType.ERROR, mockListener);
  goog.events.listen(xhr, goog.net.EventType.READY, mockListener);
  xhr.send('dummyurl');
  xhr.abort();

  mockControl.$verifyAll();
  mockControl.$resetAll();
}

function testEvents_Success() {
  var xhr = new goog.testing.net.XhrIo();
  var mockListener = mockControl.createFunctionMock();

  var readyState = goog.net.XmlHttp.ReadyState.UNINITIALIZED;
  function readyStateListener(e) {
    assertEquals(e.type, goog.net.EventType.READY_STATE_CHANGE);
    assertObjectEquals(e.target, xhr);
    readyState++;
    assertEquals(e.target.getReadyState(), readyState);
    assertTrue(e.target.isActive());
  }

  mockListener(new goog.testing.mockmatchers.InstanceOf(goog.events.Event))
      .$does(function(e) {
        assertEquals(e.type, goog.net.EventType.COMPLETE);
        assertObjectEquals(e.target, xhr);
        assertEquals(e.target.getLastErrorCode(), goog.net.ErrorCode.NO_ERROR);
        assertTrue(e.target.isActive());
      });
  mockListener(new goog.testing.mockmatchers.InstanceOf(goog.events.Event))
      .$does(function(e) {
        assertEquals(e.type, goog.net.EventType.SUCCESS);
        assertObjectEquals(e.target, xhr);
        assertTrue(e.target.isActive());
      });
  mockListener(new goog.testing.mockmatchers.InstanceOf(goog.events.Event))
      .$does(function(e) {
        assertEquals(e.type, goog.net.EventType.READY);
        assertObjectEquals(e.target, xhr);
        assertFalse(e.target.isActive());
      });
  mockControl.$replayAll();

  goog.events.listen(
      xhr, goog.net.EventType.READY_STATE_CHANGE, readyStateListener);
  goog.events.listen(xhr, goog.net.EventType.COMPLETE, mockListener);
  goog.events.listen(xhr, goog.net.EventType.SUCCESS, mockListener);
  goog.events.listen(xhr, goog.net.EventType.ABORT, mockListener);
  goog.events.listen(xhr, goog.net.EventType.ERROR, mockListener);
  goog.events.listen(xhr, goog.net.EventType.READY, mockListener);
  xhr.send('dummyurl');
  xhr.simulateResponse(200, null);

  mockControl.$verifyAll();
  mockControl.$resetAll();
}

function testGetResponseHeaders() {
  var xhr = new goog.testing.net.XhrIo();
  var mockListener = mockControl.createFunctionMock();
  mockListener(new goog.testing.mockmatchers.InstanceOf(goog.events.Event))
      .$does(function(e) {
        var headers = e.target.getResponseHeaders();
        assertEquals(2, goog.object.getCount(headers));
        assertEquals('foo', headers['test1']);
        assertEquals('bar', headers['test2']);
      });
  mockControl.$replayAll();
  goog.events.listen(xhr, goog.net.EventType.SUCCESS, mockListener);

  // Simulate an XHR with 2 headers.
  xhr.simulateResponse(200, '', {'test1': 'foo', 'test2': 'bar'});

  mockControl.$verifyAll();
  mockControl.$resetAll();
}

function testGetResponseHeadersWithColonInValue() {
  var xhr = new goog.testing.net.XhrIo();
  var mockListener = mockControl.createFunctionMock();
  mockListener(new goog.testing.mockmatchers.InstanceOf(goog.events.Event))
      .$does(function(e) {
        var headers = e.target.getResponseHeaders();
        assertEquals(1, goog.object.getCount(headers));
        assertEquals('f:o:o', headers['test1']);
      });
  mockControl.$replayAll();
  goog.events.listen(xhr, goog.net.EventType.SUCCESS, mockListener);

  // Simulate an XHR with a colon in the http header value.
  xhr.simulateResponse(200, '', {'test1': 'f:o:o'});

  mockControl.$verifyAll();
  mockControl.$resetAll();
}
