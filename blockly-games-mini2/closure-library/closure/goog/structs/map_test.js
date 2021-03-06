// Copyright 2006 The Closure Library Authors. All Rights Reserved.
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

goog.provide('goog.structs.MapTest');
goog.setTestOnly('goog.structs.MapTest');

goog.require('goog.iter');
goog.require('goog.structs');
goog.require('goog.structs.Map');
goog.require('goog.testing.jsunit');

function stringifyMap(m) {
  var keys = goog.structs.getKeys(m);
  var s = '';
  for (var i = 0; i < keys.length; i++) {
    s += keys[i] + m[keys[i]];
  }
  return s;
}

function getMap() {
  var m = new goog.structs.Map;
  m.set('a', 0);
  m.set('b', 1);
  m.set('c', 2);
  m.set('d', 3);
  return m;
}

function testGetCount() {
  var m = getMap();
  assertEquals('count, should be 4', m.getCount(), 4);
  m.remove('d');
  assertEquals('count, should be 3', m.getCount(), 3);
}

function testKeys() {
  var m = getMap();
  assertEquals(
      'getKeys, The keys should be a,b,c', m.getKeys().join(','), 'a,b,c,d');
}

function testValues() {
  var m = getMap();
  assertEquals(
      'getValues, The values should be 0,1,2', m.getValues().join(','),
      '0,1,2,3');
}

function testContainsKey() {
  var m = getMap();
  assertTrue("containsKey, Should contain the 'a' key", m.containsKey('a'));
  assertFalse(
      "containsKey, Should not contain the 'e' key", m.containsKey('e'));
}

function testClear() {
  var m = getMap();
  m.clear();
  assertTrue('cleared so it should be empty', m.isEmpty());
  assertTrue("cleared so it should not contain 'a' key", !m.containsKey('a'));
}

function testAddAll() {
  var m = new goog.structs.Map;
  m.addAll({a: 0, b: 1, c: 2, d: 3});
  assertTrue('addAll so it should not be empty', !m.isEmpty());
  assertTrue("addAll so it should contain 'c' key", m.containsKey('c'));

  var m2 = new goog.structs.Map;
  m2.addAll(m);
  assertTrue('addAll so it should not be empty', !m2.isEmpty());
  assertTrue("addAll so it should contain 'c' key", m2.containsKey('c'));
}

function testConstructor() {
  var m = getMap();
  var m2 = new goog.structs.Map(m);
  assertTrue('constr with Map so it should not be empty', !m2.isEmpty());
  assertTrue(
      "constr with Map so it should contain 'c' key", m2.containsKey('c'));
}


function testConstructorWithVarArgs() {
  var m = new goog.structs.Map('a', 1);
  assertTrue('constr with var_args so it should not be empty', !m.isEmpty());
  assertEquals('constr with var_args', 1, m.get('a'));

  m = new goog.structs.Map('a', 1, 'b', 2);
  assertTrue('constr with var_args so it should not be empty', !m.isEmpty());
  assertEquals('constr with var_args', 1, m.get('a'));
  assertEquals('constr with var_args', 2, m.get('b'));

  assertThrows('Odd number of arguments is not allowed', function() {
    var m = new goog.structs.Map('a', 1, 'b');
  });
}

function testClone() {
  var m = getMap();
  var m2 = m.clone();
  assertTrue('clone so it should not be empty', !m2.isEmpty());
  assertTrue("clone so it should contain 'c' key", m2.containsKey('c'));
}


function testRemove() {
  var m = new goog.structs.Map();
  for (var i = 0; i < 1000; i++) {
    m.set(i, 'foo');
  }

  for (var i = 0; i < 1000; i++) {
    assertTrue(m.keys_.length <= 2 * m.getCount());
    m.remove(i);
  }
  assertTrue(m.isEmpty());
  assertEquals('', m.getKeys().join(''));
}


function testForEach() {
  var m = getMap();
  var s = '';
  goog.structs.forEach(m, function(val, key, m2) {
    assertNotUndefined(key);
    assertEquals(m, m2);
    s += key + val;
  });
  assertEquals(s, 'a0b1c2d3');
}

function testFilter() {
  var m = getMap();

  var m2 = goog.structs.filter(m, function(val, key, m3) {
    assertNotUndefined(key);
    assertEquals(m, m3);
    return val > 1;
  });
  assertEquals(stringifyMap(m2), 'c2d3');
}


function testMap() {
  var m = getMap();
  var m2 = goog.structs.map(m, function(val, key, m3) {
    assertNotUndefined(key);
    assertEquals(m, m3);
    return val * val;
  });
  assertEquals(stringifyMap(m2), 'a0b1c4d9');
}

function testSome() {
  var m = getMap();
  var b = goog.structs.some(m, function(val, key, m2) {
    assertNotUndefined(key);
    assertEquals(m, m2);
    return val > 1;
  });
  assertTrue(b);
  var b = goog.structs.some(m, function(val, key, m2) {
    assertNotUndefined(key);
    assertEquals(m, m2);
    return val > 100;
  });
  assertFalse(b);
}

function testEvery() {
  var m = getMap();
  var b = goog.structs.every(m, function(val, key, m2) {
    assertNotUndefined(key);
    assertEquals(m, m2);
    return val >= 0;
  });
  assertTrue(b);
  b = goog.structs.every(m, function(val, key, m2) {
    assertNotUndefined(key);
    assertEquals(m, m2);
    return val > 1;
  });
  assertFalse(b);
}

function testContainsValue() {
  var m = getMap();
  assertTrue(m.containsValue(3));
  assertFalse(m.containsValue(4));
}

function testObjectProperties() {
  var m = new goog.structs.Map;

  assertEquals(m.get('toString'), undefined);
  assertEquals(m.get('valueOf'), undefined);
  assertEquals(m.get('eval'), undefined);
  assertEquals(m.get('toSource'), undefined);
  assertEquals(m.get('prototype'), undefined);
  assertEquals(m.get(':foo'), undefined);

  m.set('toString', 'once');
  m.set('valueOf', 'upon');
  m.set('eval', 'a');
  m.set('toSource', 'midnight');
  m.set('prototype', 'dreary');
  m.set('hasOwnProperty', 'dark');
  m.set(':foo', 'happy');

  assertEquals(m.get('toString'), 'once');
  assertEquals(m.get('valueOf'), 'upon');
  assertEquals(m.get('eval'), 'a');
  assertEquals(m.get('toSource'), 'midnight');
  assertEquals(m.get('prototype'), 'dreary');
  assertEquals(m.get('hasOwnProperty'), 'dark');
  assertEquals(m.get(':foo'), 'happy');

  var keys = m.getKeys().join(',');
  assertEquals(
      keys, 'toString,valueOf,eval,toSource,prototype,hasOwnProperty,:foo');

  var values = m.getValues().join(',');
  assertEquals(values, 'once,upon,a,midnight,dreary,dark,happy');
}

function testDuplicateKeys() {
  var m = new goog.structs.Map;

  m.set('a', 1);
  m.set('b', 2);
  m.set('c', 3);
  m.set('d', 4);
  m.set('e', 5);
  m.set('f', 6);
  assertEquals(6, m.getKeys().length);
  m.set('foo', 1);
  assertEquals(7, m.getKeys().length);
  m.remove('foo');
  assertEquals(6, m.getKeys().length);
  m.set('foo', 2);
  assertEquals(7, m.getKeys().length);
  m.remove('foo');
  m.set('foo', 3);
  m.remove('foo');
  m.set('foo', 4);
  assertEquals(7, m.getKeys().length);
}

function testGetKeyIterator() {
  var m = new goog.structs.Map;
  m.set('a', 1);
  m.set('b', 2);
  m.set('c', 3);
  m.set('d', 4);
  m.set('e', 5);

  var iter = m.getKeyIterator();
  assertEquals('Should contain the keys', 'abcde', goog.iter.join(iter, ''));

  m.remove('b');
  m.remove('d');
  iter = m.getKeyIterator();
  assertEquals(
      'Should not contain the removed keys', 'ace', goog.iter.join(iter, ''));
}

function testGetValueIterator() {
  var m = new goog.structs.Map;
  m.set('a', 1);
  m.set('b', 2);
  m.set('c', 3);
  m.set('d', 4);
  m.set('e', 5);

  var iter = m.getValueIterator();
  assertEquals('Should contain the values', '12345', goog.iter.join(iter, ''));

  m.remove('b');
  m.remove('d');
  iter = m.getValueIterator();
  assertEquals(
      'Should not contain the removed keys', '135', goog.iter.join(iter, ''));
}

function testDefaultIterator() {
  // The default iterator should behave like the value iterator

  var m = new goog.structs.Map;
  m.set('a', 1);
  m.set('b', 2);
  m.set('c', 3);
  m.set('d', 4);
  m.set('e', 5);

  assertEquals('Should contain the values', '12345', goog.iter.join(m, ''));

  m.remove('b');
  m.remove('d');
  assertEquals(
      'Should not contain the removed keys', '135', goog.iter.join(m, ''));
}

function testMutatedIterator() {
  var message = 'The map has changed since the iterator was created';

  var m = new goog.structs.Map;
  m.set('a', 1);
  m.set('b', 2);
  m.set('c', 3);
  m.set('d', 4);

  var iter = m.getValueIterator();
  m.set('e', 5);
  var ex = assertThrows(
      'Expected an exception since the map has changed',
      function() { iter.next(); });
  assertEquals(message, ex.message);

  m = new goog.structs.Map;
  m.set('a', 1);
  m.set('b', 2);
  m.set('c', 3);
  m.set('d', 4);

  iter = m.getValueIterator();
  m.remove('d');
  var ex = assertThrows(
      'Expected an exception since the map has changed',
      function() { iter.next(); });
  assertEquals(message, ex.message);

  m = new goog.structs.Map;
  m.set('a', 1);
  m.set('b', 2);
  m.set('c', 3);
  m.set('d', 4);

  iter = m.getValueIterator();
  m.set('d', 5);
  iter.next();
  // Changing an existing value is OK.
  iter.next();
}

function testTranspose() {
  var m = new goog.structs.Map;
  m.set('a', 1);
  m.set('b', 2);
  m.set('c', 3);
  m.set('d', 4);
  m.set('e', 5);

  var transposed = m.transpose();
  assertEquals(
      'Should contain the keys', 'abcde', goog.iter.join(transposed, ''));
}

function testToObject() {
  Object.prototype.b = 0;
  try {
    var map = new goog.structs.Map();
    map.set('a', 0);
    var obj = map.toObject();
    assertTrue('object representation has key "a"', obj.hasOwnProperty('a'));
    assertFalse(
        'object representation does not have key "b"', obj.hasOwnProperty('b'));
    assertEquals('value for key "a"', 0, obj['a']);
  } finally {
    delete Object.prototype.b;
  }
}

function testEqualsWithSameObject() {
  var map1 = getMap();
  assertTrue('maps are the same object', map1.equals(map1));
}

function testEqualsWithDifferentSizeMaps() {
  var map1 = getMap();
  var map2 = new goog.structs.Map();

  assertFalse('maps are different sizes', map1.equals(map2));
}

function testEqualsWithDefaultEqualityFn() {
  var map1 = new goog.structs.Map();
  var map2 = new goog.structs.Map();

  assertTrue('maps are both empty', map1.equals(map2));

  map1 = getMap();
  map2 = getMap();
  assertTrue('maps are the same', map1.equals(map2));

  map2.set('d', '3');
  assertFalse('maps have 3 and \'3\'', map1.equals(map2));
}

function testEqualsWithCustomEqualityFn() {
  var map1 = new goog.structs.Map();
  var map2 = new goog.structs.Map();

  map1.set('a', 0);
  map1.set('b', 1);

  map2.set('a', '0');
  map2.set('b', '1');

  var equalsFn = function(a, b) { return a == b };

  assertTrue('maps are equal with ==', map1.equals(map2, equalsFn));
}
