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

goog.provide('goog.formatTest');
goog.setTestOnly('goog.formatTest');

goog.require('goog.dom');
goog.require('goog.dom.TagName');
goog.require('goog.format');
goog.require('goog.string');
goog.require('goog.testing.PropertyReplacer');
goog.require('goog.testing.jsunit');

var propertyReplacer = new goog.testing.PropertyReplacer();

function tearDown() {
  // set wordBreakHtml back to the original value (some tests edit this member).
  propertyReplacer.reset();
}

function testFormatFileSize() {
  var fileSize = goog.format.fileSize;

  assertEquals('45', fileSize(45));
  assertEquals('45', fileSize(45, 0));
  assertEquals('45', fileSize(45, 1));
  assertEquals('45', fileSize(45, 3));
  assertEquals('454', fileSize(454));
  assertEquals('600', fileSize(600));

  assertEquals('1K', fileSize(1024));
  assertEquals('2K', fileSize(2 * 1024));
  assertEquals('5K', fileSize(5 * 1024));
  assertEquals('5.123K', fileSize(5.12345 * 1024, 3));
  assertEquals('5.68K', fileSize(5.678 * 1024, 2));

  assertEquals('1M', fileSize(1024 * 1024));
  assertEquals('1.5M', fileSize(1.5 * 1024 * 1024));
  assertEquals('2M', fileSize(1.5 * 1024 * 1024, 0));
  assertEquals('1.5M', fileSize(1.51 * 1024 * 1024, 1));
  assertEquals('1.56M', fileSize(1.56 * 1024 * 1024, 2));

  assertEquals('1G', fileSize(1024 * 1024 * 1024));
  assertEquals('6G', fileSize(6 * 1024 * 1024 * 1024));
  assertEquals('12.06T', fileSize(12345.6789 * 1024 * 1024 * 1024));
}

function testIsConvertableScaledNumber() {
  var isConvertableScaledNumber = goog.format.isConvertableScaledNumber;

  assertTrue(isConvertableScaledNumber('0'));
  assertTrue(isConvertableScaledNumber('45'));
  assertTrue(isConvertableScaledNumber('45K'));
  assertTrue(isConvertableScaledNumber('45MB'));
  assertTrue(isConvertableScaledNumber('45GB'));
  assertTrue(isConvertableScaledNumber('45T'));
  assertTrue(isConvertableScaledNumber('2.33P'));
  assertTrue(isConvertableScaledNumber('45m'));
  assertTrue(isConvertableScaledNumber('45u'));
  assertTrue(isConvertableScaledNumber('-5.0n'));

  assertFalse(isConvertableScaledNumber('45x'));
  assertFalse(isConvertableScaledNumber('ux'));
  assertFalse(isConvertableScaledNumber('K'));
}

function testNumericValueToString() {
  var numericValueToString = goog.format.numericValueToString;

  assertEquals('0', numericValueToString(0.0));
  assertEquals('45', numericValueToString(45));
  assertEquals('454', numericValueToString(454));
  assertEquals('600', numericValueToString(600));

  assertEquals('1.02K', numericValueToString(1024));
  assertEquals('2.05K', numericValueToString(2 * 1024));
  assertEquals('5.12K', numericValueToString(5 * 1024));
  assertEquals('5.246K', numericValueToString(5.12345 * 1024, 3));
  assertEquals('5.81K', numericValueToString(5.678 * 1024, 2));

  assertEquals('1.05M', numericValueToString(1024 * 1024));
  assertEquals('1.57M', numericValueToString(1.5 * 1024 * 1024));
  assertEquals('2M', numericValueToString(1.5 * 1024 * 1024, 0));
  assertEquals('1.6M', numericValueToString(1.51 * 1024 * 1024, 1));
  assertEquals('1.64M', numericValueToString(1.56 * 1024 * 1024, 2));

  assertEquals('1.07G', numericValueToString(1024 * 1024 * 1024));
  assertEquals('6.44G', numericValueToString(6 * 1024 * 1024 * 1024));
  assertEquals('13.26T', numericValueToString(12345.6789 * 1024 * 1024 * 1024));

  assertEquals('23.4m', numericValueToString(0.0234));
  assertEquals('1.23u', numericValueToString(0.00000123));
  assertEquals('15.78n', numericValueToString(0.000000015784));
  assertEquals('0.58u', numericValueToString(0.0000005784));
  assertEquals('0.5', numericValueToString(0.5));

  assertEquals('-45', numericValueToString(-45.3, 0));
  assertEquals('-45', numericValueToString(-45.5, 0));
  assertEquals('-46', numericValueToString(-45.51, 0));
}

function testFormatNumBytes() {
  var numBytesToString = goog.format.numBytesToString;

  assertEquals('45', numBytesToString(45));
  assertEquals('454', numBytesToString(454));

  assertEquals('5KB', numBytesToString(5 * 1024));
  assertEquals('1MB', numBytesToString(1024 * 1024));
  assertEquals('6GB', numBytesToString(6 * 1024 * 1024 * 1024));
  assertEquals('12.06TB', numBytesToString(12345.6789 * 1024 * 1024 * 1024));

  assertEquals('454', numBytesToString(454, 2, true, true));
  assertEquals('5 KB', numBytesToString(5 * 1024, 2, true, true));
}

function testStringToNumeric() {
  var stringToNumericValue = goog.format.stringToNumericValue;
  var epsilon = Math.pow(10, -10);

  assertNaN(stringToNumericValue('foo'));

  assertEquals(45, stringToNumericValue('45'));
  assertEquals(-45, stringToNumericValue('-45'));
  assertEquals(-45, stringToNumericValue('-45'));
  assertEquals(454, stringToNumericValue('454'));

  assertEquals(5 * 1024, stringToNumericValue('5KB'));
  assertEquals(1024 * 1024, stringToNumericValue('1MB'));
  assertEquals(6 * 1024 * 1024 * 1024, stringToNumericValue('6GB'));
  assertEquals(13260110230978.56, stringToNumericValue('12.06TB'));

  assertEquals(5010, stringToNumericValue('5.01K'));
  assertEquals(5100000, stringToNumericValue('5.1M'));
  assertTrue(Math.abs(0.051 - stringToNumericValue('51.0m')) < epsilon);
  assertTrue(Math.abs(0.000051 - stringToNumericValue('51.0u')) < epsilon);
}

function testStringToNumBytes() {
  var stringToNumBytes = goog.format.stringToNumBytes;

  assertEquals(45, stringToNumBytes('45'));
  assertEquals(454, stringToNumBytes('454'));

  assertEquals(5 * 1024, stringToNumBytes('5K'));
  assertEquals(1024 * 1024, stringToNumBytes('1M'));
  assertEquals(6 * 1024 * 1024 * 1024, stringToNumBytes('6G'));
  assertEquals(13260110230978.56, stringToNumBytes('12.06T'));
}

function testInsertWordBreaks() {
  // HTML that gets inserted is browser dependent, ensure for the test it is
  // a constant - browser dependent HTML is for display purposes only.
  propertyReplacer.set(goog.format, 'WORD_BREAK_HTML', '<wbr>');

  var insertWordBreaks = goog.format.insertWordBreaks;

  assertEquals('abcdef', insertWordBreaks('abcdef', 10));
  assertEquals('ab<wbr>cd<wbr>ef', insertWordBreaks('abcdef', 2));
  assertEquals(
      'a<wbr>b<wbr>c<wbr>d<wbr>e<wbr>f', insertWordBreaks('abcdef', 1));

  assertEquals(
      'a&amp;b=<wbr>=fal<wbr>se', insertWordBreaks('a&amp;b==false', 4));
  assertEquals(
      '&lt;&amp;&gt;&raquo;<wbr>&laquo;',
      insertWordBreaks('&lt;&amp;&gt;&raquo;&laquo;', 4));

  assertEquals('a<wbr>b<wbr>c d<wbr>e<wbr>f', insertWordBreaks('abc def', 1));
  assertEquals('ab<wbr>c de<wbr>f', insertWordBreaks('abc def', 2));
  assertEquals('abc def', insertWordBreaks('abc def', 3));
  assertEquals('abc def', insertWordBreaks('abc def', 4));

  assertEquals('a<b>cd</b>e<wbr>f', insertWordBreaks('a<b>cd</b>ef', 4));
  assertEquals(
      'Thi<wbr>s is a <a href="">lin<wbr>k</a>.',
      insertWordBreaks('This is a <a href="">link</a>.', 3));
  assertEquals(
      '<abc a="&amp;&amp;&amp;&amp;&amp;">a<wbr>b',
      insertWordBreaks('<abc a="&amp;&amp;&amp;&amp;&amp;">ab', 1));

  assertEquals('ab\u0300<wbr>cd', insertWordBreaks('ab\u0300cd', 2));
  assertEquals('ab\u036F<wbr>cd', insertWordBreaks('ab\u036Fcd', 2));
  assertEquals('ab<wbr>\u0370c<wbr>d', insertWordBreaks('ab\u0370cd', 2));
  assertEquals('ab<wbr>\uFE1Fc<wbr>d', insertWordBreaks('ab\uFE1Fcd', 2));
  assertEquals(
      'ab\u0300<wbr>c\u0301<wbr>de<wbr>f',
      insertWordBreaks('ab\u0300c\u0301def', 2));
}

function testInsertWordBreaksWithFormattingCharacters() {
  // HTML that gets inserted is browser dependent, ensure for the test it is
  // a constant - browser dependent HTML is for display purposes only.
  propertyReplacer.set(goog.format, 'WORD_BREAK_HTML', '<wbr>');
  var insertWordBreaks = goog.format.insertWordBreaks;

  // A date in Arabic-Indic digits with Right-to-Left Marks (U+200F).
  // The date is "11<RLM>/01<RLM>/2012".
  var textWithRLMs = 'This is a date - ' +
      '\u0661\u0661\u200f/\u0660\u0661\u200f/\u0662\u0660\u0661\u0662';
  // A string of 10 Xs with invisible formatting characters in between.
  // These characters are in the ranges U+200C to U+200F and U+202A to
  // U+202E, inclusive. See: http://unicode.org/charts/PDF/U2000.pdf
  var stringWithInvisibleFormatting = 'X\u200cX\u200dX\u200eX\u200fX\u202a' +
      'X\u202bX\u202cX\u202dX\u202eX';
  // A string formed by concatenating copies of the previous string alternating
  // with characters which behave like breaking spaces. Besides the space
  // character itself, the other characters are in the range U+2000 to U+200B
  // inclusive, except for the exclusion of U+2007 and inclusion of U+2029.
  // See: http://unicode.org/charts/PDF/U2000.pdf
  var stringWithInvisibleFormattingAndSpacelikeCharacters =
      stringWithInvisibleFormatting + ' ' + stringWithInvisibleFormatting +
      '\u2000' + stringWithInvisibleFormatting + '\u2001' +
      stringWithInvisibleFormatting + '\u2002' + stringWithInvisibleFormatting +
      '\u2003' + stringWithInvisibleFormatting + '\u2005' +
      stringWithInvisibleFormatting + '\u2006' + stringWithInvisibleFormatting +
      '\u2008' + stringWithInvisibleFormatting + '\u2009' +
      stringWithInvisibleFormatting + '\u200A' + stringWithInvisibleFormatting +
      '\u200B' + stringWithInvisibleFormatting + '\u2029' +
      stringWithInvisibleFormatting;

  // Test that the word break algorithm does not count RLMs towards word
  // length, and therefore does not insert word breaks into a typical date
  // written in Arabic-Indic digits with RTMs (b/5853915).
  assertEquals(textWithRLMs, insertWordBreaks(textWithRLMs, 10));

  // Test that invisible formatting characters are not counted towards word
  // length, and that characters which are treated as breaking spaces behave as
  // breaking spaces.
  assertEquals(
      stringWithInvisibleFormattingAndSpacelikeCharacters,
      insertWordBreaks(
          stringWithInvisibleFormattingAndSpacelikeCharacters, 10));
}

function testInsertWordBreaksBasic() {
  // HTML that gets inserted is browser dependent, ensure for the test it is
  // a constant - browser dependent HTML is for display purposes only.
  propertyReplacer.set(goog.format, 'WORD_BREAK_HTML', '<wbr>');
  var insertWordBreaksBasic = goog.format.insertWordBreaksBasic;

  assertEquals('abcdef', insertWordBreaksBasic('abcdef', 10));
  assertEquals('ab<wbr>cd<wbr>ef', insertWordBreaksBasic('abcdef', 2));
  assertEquals(
      'a<wbr>b<wbr>c<wbr>d<wbr>e<wbr>f', insertWordBreaksBasic('abcdef', 1));
  assertEquals(
      'ab\u0300<wbr>c\u0301<wbr>de<wbr>f',
      insertWordBreaksBasic('ab\u0300c\u0301def', 2));

  assertEquals(
      'Inserting word breaks into the word "Russia" should work fine.',
      '\u0420\u043E<wbr>\u0441\u0441<wbr>\u0438\u044F',
      insertWordBreaksBasic('\u0420\u043E\u0441\u0441\u0438\u044F', 2));

  // The word 'Internet' in Hindi.
  var hindiInternet = '\u0907\u0902\u091F\u0930\u0928\u0947\u091F';
  assertEquals(
      'The basic algorithm is not good enough to insert word ' +
          'breaks into Hindi.',
      hindiInternet, insertWordBreaksBasic(hindiInternet, 2));
  // The word 'Internet' in Hindi broken into slashes.
  assertEquals(
      'Hindi can have word breaks inserted between slashes',
      hindiInternet + '<wbr>/' + hindiInternet + '<wbr>.' + hindiInternet,
      insertWordBreaksBasic(
          hindiInternet + '/' + hindiInternet + '.' + hindiInternet, 2));
}

function testWordBreaksWorking() {
  var text = goog.string.repeat('test', 20);
  var textWbr = goog.string.repeat('test' + goog.format.WORD_BREAK_HTML, 20);

  var overflowEl = goog.dom.createDom(
      goog.dom.TagName.DIV,
      {'style': 'width: 100px; overflow: hidden; margin 5px'});
  var wbrEl = goog.dom.createDom(
      goog.dom.TagName.DIV,
      {'style': 'width: 100px; overflow: hidden; margin-top: 15px'});
  goog.dom.appendChild(goog.global.document.body, overflowEl);
  goog.dom.appendChild(goog.global.document.body, wbrEl);

  overflowEl.innerHTML = text;
  wbrEl.innerHTML = textWbr;

  assertTrue('Text should overflow', overflowEl.scrollWidth > 100);
  assertTrue('Text should not overflow', wbrEl.scrollWidth <= 100);
}

function testWordBreaksRemovedFromTextContent() {
  var expectedText = goog.string.repeat('test', 20);
  var textWbr = goog.string.repeat('test' + goog.format.WORD_BREAK_HTML, 20);

  var wbrEl = goog.dom.createDom(goog.dom.TagName.DIV, null);
  wbrEl.innerHTML = textWbr;

  assertEquals(
      'text content should have wbr character removed', expectedText,
      goog.dom.getTextContent(wbrEl));
}
