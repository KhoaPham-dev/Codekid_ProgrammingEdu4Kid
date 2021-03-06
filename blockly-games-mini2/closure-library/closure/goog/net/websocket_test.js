// Copyright 2011 The Closure Library Authors. All Rights Reserved.
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

goog.provide('goog.net.WebSocketTest');
goog.setTestOnly('goog.net.WebSocketTest');

goog.require('goog.debug.EntryPointMonitor');
goog.require('goog.debug.ErrorHandler');
goog.require('goog.debug.entryPointRegistry');
goog.require('goog.events');
goog.require('goog.functions');
goog.require('goog.net.WebSocket');
goog.require('goog.testing.MockClock');
goog.require('goog.testing.PropertyReplacer');
goog.require('goog.testing.jsunit');
goog.require('goog.testing.recordFunction');

var webSocket;
var mockClock;
var pr;
var testUrl;

var originalOnOpen = goog.net.WebSocket.prototype.onOpen_;
var originalOnClose = goog.net.WebSocket.prototype.onClose_;
var originalOnMessage = goog.net.WebSocket.prototype.onMessage_;
var originalOnError = goog.net.WebSocket.prototype.onError_;

function setUp() {
  pr = new goog.testing.PropertyReplacer();
  pr.set(goog.global, 'WebSocket', MockWebSocket);
  mockClock = new goog.testing.MockClock(true);
  testUrl = 'ws://127.0.0.1:4200';
  testProtocol = 'xmpp';
}

function tearDown() {
  pr.reset();
  goog.net.WebSocket.prototype.onOpen_ = originalOnOpen;
  goog.net.WebSocket.prototype.onClose_ = originalOnClose;
  goog.net.WebSocket.prototype.onMessage_ = originalOnMessage;
  goog.net.WebSocket.prototype.onError_ = originalOnError;
  goog.dispose(mockClock);
  goog.dispose(webSocket);
}

function testOpenInUnsupportingBrowserThrowsException() {
  // Null out WebSocket to simulate lack of support.
  if (goog.global.WebSocket) {
    goog.global.WebSocket = null;
  }

  webSocket = new goog.net.WebSocket();
  assertThrows('Open should fail if WebSocket is not defined.', function() {
    webSocket.open(testUrl);
  });
}

function testOpenTwiceThrowsException() {
  webSocket = new goog.net.WebSocket();
  webSocket.open(testUrl);
  simulateOpenEvent(webSocket.webSocket_);

  assertThrows('Attempting to open a second time should fail.', function() {
    webSocket.open(testUrl);
  });
}

function testSendWithoutOpeningThrowsException() {
  webSocket = new goog.net.WebSocket();

  assertThrows(
      'Send should fail if the web socket was not first opened.',
      function() { webSocket.send('test message'); });
}

function testOpenWithProtocol() {
  webSocket = new goog.net.WebSocket();
  webSocket.open(testUrl, testProtocol);
  var ws = webSocket.webSocket_;
  simulateOpenEvent(ws);
  assertEquals(testUrl, ws.url);
  assertEquals(testProtocol, ws.protocol);
}

function testOpenAndClose() {
  webSocket = new goog.net.WebSocket();
  assertFalse(webSocket.isOpen());
  webSocket.open(testUrl);
  var ws = webSocket.webSocket_;
  simulateOpenEvent(ws);
  assertTrue(webSocket.isOpen());
  assertEquals(testUrl, ws.url);
  webSocket.close();
  simulateCloseEvent(ws);
  assertFalse(webSocket.isOpen());
}

function testReconnectionDisabled() {
  // Construct the web socket and disable reconnection.
  webSocket = new goog.net.WebSocket(false);

  // Record how many times open is called.
  pr.set(webSocket, 'open', goog.testing.recordFunction(webSocket.open));

  // Open the web socket.
  webSocket.open(testUrl);
  assertEquals(0, webSocket.reconnectAttempt_);
  assertEquals(1, webSocket.open.getCallCount());
  assertFalse(webSocket.isOpen());

  // Simulate failure.
  var ws = webSocket.webSocket_;
  simulateCloseEvent(ws);
  assertFalse(webSocket.isOpen());
  assertEquals(0, webSocket.reconnectAttempt_);
  assertEquals(1, webSocket.open.getCallCount());

  // Make sure a reconnection doesn't happen.
  mockClock.tick(100000);
  assertEquals(0, webSocket.reconnectAttempt_);
  assertEquals(1, webSocket.open.getCallCount());
}

function testReconnectionWithFailureOnFirstOpen() {
  // Construct the web socket with a linear back-off.
  webSocket = new goog.net.WebSocket(true, linearBackOff);

  // Record how many times open is called.
  pr.set(webSocket, 'open', goog.testing.recordFunction(webSocket.open));

  // Open the web socket.
  webSocket.open(testUrl, testProtocol);
  assertEquals(0, webSocket.reconnectAttempt_);
  assertEquals(1, webSocket.open.getCallCount());
  assertFalse(webSocket.isOpen());

  // Simulate failure.
  var ws = webSocket.webSocket_;
  simulateCloseEvent(ws);
  assertFalse(webSocket.isOpen());
  assertEquals(1, webSocket.reconnectAttempt_);
  assertEquals(1, webSocket.open.getCallCount());

  // Make sure the reconnect doesn't happen before it should.
  mockClock.tick(linearBackOff(0) - 1);
  assertEquals(1, webSocket.open.getCallCount());
  mockClock.tick(1);
  assertEquals(2, webSocket.open.getCallCount());

  // Simulate another failure.
  simulateCloseEvent(ws);
  assertFalse(webSocket.isOpen());
  assertEquals(2, webSocket.reconnectAttempt_);
  assertEquals(2, webSocket.open.getCallCount());

  // Make sure the reconnect doesn't happen before it should.
  mockClock.tick(linearBackOff(1) - 1);
  assertEquals(2, webSocket.open.getCallCount());
  mockClock.tick(1);
  assertEquals(3, webSocket.open.getCallCount());

  // Simulate connection success.
  simulateOpenEvent(ws);
  assertEquals(0, webSocket.reconnectAttempt_);
  assertEquals(3, webSocket.open.getCallCount());

  // Make sure the reconnection has the same url and protocol.
  assertEquals(testUrl, ws.url);
  assertEquals(testProtocol, ws.protocol);

  // Ensure no further calls to open are made.
  mockClock.tick(linearBackOff(10));
  assertEquals(3, webSocket.open.getCallCount());
}

function testReconnectionWithFailureAfterOpen() {
  // Construct the web socket with a linear back-off.
  webSocket = new goog.net.WebSocket(true, fibonacciBackOff);

  // Record how many times open is called.
  pr.set(webSocket, 'open', goog.testing.recordFunction(webSocket.open));

  // Open the web socket.
  webSocket.open(testUrl);
  assertEquals(0, webSocket.reconnectAttempt_);
  assertEquals(1, webSocket.open.getCallCount());
  assertFalse(webSocket.isOpen());

  // Simulate connection success.
  var ws = webSocket.webSocket_;
  simulateOpenEvent(ws);
  assertEquals(0, webSocket.reconnectAttempt_);
  assertEquals(1, webSocket.open.getCallCount());

  // Let some time pass, then fail the connection.
  mockClock.tick(100000);
  simulateCloseEvent(ws);
  assertFalse(webSocket.isOpen());
  assertEquals(1, webSocket.reconnectAttempt_);
  assertEquals(1, webSocket.open.getCallCount());

  // Make sure the reconnect doesn't happen before it should.
  mockClock.tick(fibonacciBackOff(0) - 1);
  assertEquals(1, webSocket.open.getCallCount());
  mockClock.tick(1);
  assertEquals(2, webSocket.open.getCallCount());

  // Simulate connection success.
  ws = webSocket.webSocket_;
  simulateOpenEvent(ws);
  assertEquals(0, webSocket.reconnectAttempt_);
  assertEquals(2, webSocket.open.getCallCount());

  // Ensure no further calls to open are made.
  mockClock.tick(fibonacciBackOff(10));
  assertEquals(2, webSocket.open.getCallCount());
}

function testExponentialBackOff() {
  assertEquals(1000, goog.net.WebSocket.EXPONENTIAL_BACKOFF_(0));
  assertEquals(2000, goog.net.WebSocket.EXPONENTIAL_BACKOFF_(1));
  assertEquals(4000, goog.net.WebSocket.EXPONENTIAL_BACKOFF_(2));
  assertEquals(60000, goog.net.WebSocket.EXPONENTIAL_BACKOFF_(6));
  assertEquals(60000, goog.net.WebSocket.EXPONENTIAL_BACKOFF_(7));
}

function testEntryPointRegistry() {
  var monitor = new goog.debug.EntryPointMonitor();
  var replacement = function() {};
  monitor.wrap =
      goog.testing.recordFunction(goog.functions.constant(replacement));

  goog.debug.entryPointRegistry.monitorAll(monitor);
  assertTrue(monitor.wrap.getCallCount() >= 1);
  assertEquals(replacement, goog.net.WebSocket.prototype.onOpen_);
  assertEquals(replacement, goog.net.WebSocket.prototype.onClose_);
  assertEquals(replacement, goog.net.WebSocket.prototype.onMessage_);
  assertEquals(replacement, goog.net.WebSocket.prototype.onError_);
}

function testErrorHandlerCalled() {
  var errorHandlerCalled = false;
  var errorHandler =
      new goog.debug.ErrorHandler(function() { errorHandlerCalled = true; });
  goog.net.WebSocket.protectEntryPoints(errorHandler);

  webSocket = new goog.net.WebSocket();
  goog.events.listenOnce(
      webSocket, goog.net.WebSocket.EventType.OPENED,
      function() { throw Error(); });

  webSocket.open(testUrl);
  var ws = webSocket.webSocket_;
  assertThrows(function() { simulateOpenEvent(ws); });

  assertTrue(
      'Error handler callback should be called when registered as ' +
          'protecting the entry points.',
      errorHandlerCalled);
}


/**
 * Simulates the browser firing the open event for the given web socket.
 * @param {MockWebSocket} ws The mock web socket.
 */
function simulateOpenEvent(ws) {
  ws.readyState = goog.net.WebSocket.ReadyState_.OPEN;
  ws.onopen();
}


/**
 * Simulates the browser firing the close event for the given web socket.
 * @param {MockWebSocket} ws The mock web socket.
 */
function simulateCloseEvent(ws) {
  ws.readyState = goog.net.WebSocket.ReadyState_.CLOSED;
  ws.onclose({data: 'mock close event'});
}


/**
 * Strategy for reconnection that backs off linearly with a 1 second offset.
 * @param {number} attempt The number of reconnects since the last connection.
 * @return {number} The amount of time to the next reconnect, in milliseconds.
 */
function linearBackOff(attempt) {
  return (attempt * 1000) + 1000;
}


/**
 * Strategy for reconnection that backs off with the fibonacci pattern.  It is
 * offset by 5 seconds so the first attempt will happen after 5 seconds.
 * @param {number} attempt The number of reconnects since the last connection.
 * @return {number} The amount of time to the next reconnect, in milliseconds.
 */
function fibonacciBackOff(attempt) {
  return (fibonacci(attempt) * 1000) + 5000;
}


/**
 * Computes the desired fibonacci number.
 * @param {number} n The nth desired fibonacci number.
 * @return {number} The nth fibonacci number.
 */
function fibonacci(n) {
  if (n == 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  } else {
    return fibonacci(n - 2) + fibonacci(n - 1);
  }
}



/**
 * Mock WebSocket constructor.
 * @param {string} url The url to the web socket server.
 * @param {string} protocol The protocol to use.
 * @constructor
 */
MockWebSocket = function(url, protocol) {
  this.url = url;
  this.protocol = protocol;
  this.readyState = goog.net.WebSocket.ReadyState_.CONNECTING;
};


/**
 * Mocks out the close method of the WebSocket.
 */
MockWebSocket.prototype.close = function() {
  this.readyState = goog.net.WebSocket.ReadyState_.CLOSING;
};


/**
 * Mocks out the send method of the WebSocket.
 */
MockWebSocket.prototype.send = function() {
  // Nothing to do here.
};
