// Copyright 2009 The Closure Library Authors. All Rights Reserved.
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

goog.LOCALE = 'en_US';
goog.provide('goog.date.relativeTest');
goog.setTestOnly('goog.date.relativeTest');

goog.require('goog.date.DateTime');
goog.require('goog.date.relative');
goog.require('goog.i18n.DateTimeFormat');
goog.require('goog.testing.jsunit');

// Timestamp to base times for test on.
var baseTime = new Date(2009, 2, 23, 14, 31, 6).getTime();

// Ensure goog.now returns a constant timestamp.
goog.now = function() {
  return baseTime;
};


function testFormatRelativeForPastDates() {
  var fn = goog.date.relative.format;

  assertEquals(
      'Should round seconds to the minute below', '0 minutes ago',
      fn(timestamp('23 March 2009 14:30:10')));

  assertEquals(
      'Should round seconds to the minute below', '1 minute ago',
      fn(timestamp('23 March 2009 14:29:56')));

  assertEquals(
      'Should round seconds to the minute below', '2 minutes ago',
      fn(timestamp('23 March 2009 14:29:00')));

  assertEquals('10 minutes ago', fn(timestamp('23 March 2009 14:20:10')));
  assertEquals('59 minutes ago', fn(timestamp('23 March 2009 13:31:42')));
  assertEquals('2 hours ago', fn(timestamp('23 March 2009 12:20:56')));
  assertEquals('23 hours ago', fn(timestamp('22 March 2009 15:30:56')));
  assertEquals('1 day ago', fn(timestamp('22 March 2009 12:11:04')));
  assertEquals('1 day ago', fn(timestamp('22 March 2009 00:00:00')));
  assertEquals('2 days ago', fn(timestamp('21 March 2009 23:59:59')));
  assertEquals('2 days ago', fn(timestamp('21 March 2009 10:30:56')));
  assertEquals('2 days ago', fn(timestamp('21 March 2009 00:00:00')));
  assertEquals('3 days ago', fn(timestamp('20 March 2009 23:59:59')));
}

function testFormatRelativeForFutureDates() {
  var fn = goog.date.relative.format;

  assertEquals(
      'Should round seconds to the minute below', 'in 1 minute',
      fn(timestamp('23 March 2009 14:32:05')));

  assertEquals(
      'Should round seconds to the minute below', 'in 2 minutes',
      fn(timestamp('23 March 2009 14:33:00')));

  assertEquals('in 10 minutes', fn(timestamp('23 March 2009 14:40:10')));
  assertEquals('in 59 minutes', fn(timestamp('23 March 2009 15:29:15')));
  assertEquals('in 2 hours', fn(timestamp('23 March 2009 17:20:56')));
  assertEquals('in 23 hours', fn(timestamp('24 March 2009 13:30:56')));
  assertEquals('in 1 day', fn(timestamp('24 March 2009 14:31:07')));
  assertEquals('in 1 day', fn(timestamp('24 March 2009 16:11:04')));
  assertEquals('in 1 day', fn(timestamp('24 March 2009 23:59:59')));
  assertEquals('in 2 days', fn(timestamp('25 March 2009 00:00:00')));
  assertEquals('in 2 days', fn(timestamp('25 March 2009 10:30:56')));
  assertEquals('in 2 days', fn(timestamp('25 March 2009 23:59:59')));
  assertEquals('in 3 days', fn(timestamp('26 March 2009 00:00:00')));
}


function testFormatPast() {
  var fn = goog.date.relative.formatPast;

  assertEquals('59 minutes ago', fn(timestamp('23 March 2009 13:31:42')));
  assertEquals('0 minutes ago', fn(timestamp('23 March 2009 14:32:05')));
  assertEquals('0 minutes ago', fn(timestamp('23 March 2009 14:33:00')));
  assertEquals('0 minutes ago', fn(timestamp('25 March 2009 10:30:56')));
}


function testFormatDay() {
  var fn = goog.date.relative.formatDay;
  var formatter =
      new goog.i18n.DateTimeFormat(goog.i18n.DateTimeFormat.Format.SHORT_DATE);
  var format = goog.bind(formatter.format, formatter);

  assertEquals('Sep 25', fn(timestamp('25 September 2009 10:31:06')));
  assertEquals('Mar 25', fn(timestamp('25 March 2009 00:12:19')));
  assertEquals('Tomorrow', fn(timestamp('24 March 2009 10:31:06')));
  assertEquals('Tomorrow', fn(timestamp('24 March 2009 00:12:19')));
  assertEquals('Today', fn(timestamp('23 March 2009 10:31:06')));
  assertEquals('Today', fn(timestamp('23 March 2009 00:12:19')));
  assertEquals('Yesterday', fn(timestamp('22 March 2009 23:48:12')));
  assertEquals('Yesterday', fn(timestamp('22 March 2009 04:11:23')));
  assertEquals('Mar 21', fn(timestamp('21 March 2009 15:54:45')));
  assertEquals('Mar 19', fn(timestamp('19 March 2009 01:22:11')));

  // Test that a formatter can also be accepted as input.
  assertEquals('Today', fn(timestamp('23 March 2009 10:31:06'), format));
  assertEquals('Today', fn(timestamp('23 March 2009 00:12:19'), format));
  assertEquals('Yesterday', fn(timestamp('22 March 2009 23:48:12'), format));
  assertEquals('Yesterday', fn(timestamp('22 March 2009 04:11:23'), format));
  assertEquals(
      format(gdatetime(timestamp('21 March 2009 15:54:45'))),
      fn(timestamp('21 March 2009 15:54:45'), format));
  assertEquals(
      format(gdatetime(timestamp('19 March 2009 01:22:11'))),
      fn(timestamp('19 March 2009 01:22:11'), format));
}

function testGetDateString() {
  var fn = goog.date.relative.getDateString;

  assertEquals(
      '2:21 PM (10 minutes ago)', fn(new Date(baseTime - 10 * 60 * 1000)));
  assertEquals(
      '4:31 AM (10 hours ago)', fn(new Date(baseTime - 10 * 60 * 60 * 1000)));
  assertEquals(
      'Friday, March 13, 2009 (10 days ago)',
      fn(new Date(baseTime - 10 * 24 * 60 * 60 * 1000)));
  assertEquals(
      'Tuesday, March 3, 2009',
      fn(new Date(baseTime - 20 * 24 * 60 * 60 * 1000)));

  // Test that goog.date.DateTime can also be accepted as input.
  assertEquals(
      '2:21 PM (10 minutes ago)', fn(gdatetime(baseTime - 10 * 60 * 1000)));
  assertEquals(
      '4:31 AM (10 hours ago)', fn(gdatetime(baseTime - 10 * 60 * 60 * 1000)));
  assertEquals(
      'Friday, March 13, 2009 (10 days ago)',
      fn(gdatetime(baseTime - 10 * 24 * 60 * 60 * 1000)));
  assertEquals(
      'Tuesday, March 3, 2009',
      fn(gdatetime(baseTime - 20 * 24 * 60 * 60 * 1000)));
}

function testGetPastDateString() {
  var fn = goog.date.relative.getPastDateString;
  assertEquals(
      '2:21 PM (10 minutes ago)', fn(new Date(baseTime - 10 * 60 * 1000)));
  assertEquals(
      '2:41 PM (0 minutes ago)', fn(new Date(baseTime + 10 * 60 * 1000)));

  // Test that goog.date.DateTime can also be accepted as input.
  assertEquals(
      '2:21 PM (10 minutes ago)', fn(gdatetime(baseTime - 10 * 60 * 1000)));
  assertEquals(
      '2:41 PM (0 minutes ago)', fn(gdatetime(baseTime + 10 * 60 * 1000)));
}

function gdatetime(timestamp) {
  return new goog.date.DateTime(new Date(timestamp));
}

function timestamp(str) {
  return new Date(str).getTime();
}
