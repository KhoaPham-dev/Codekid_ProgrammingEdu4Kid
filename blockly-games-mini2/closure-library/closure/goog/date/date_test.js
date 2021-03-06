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

goog.provide('goog.dateTest');
goog.setTestOnly('goog.dateTest');

goog.require('goog.array');
goog.require('goog.date');
goog.require('goog.date.Date');
goog.require('goog.date.DateTime');
goog.require('goog.date.Interval');
goog.require('goog.date.month');
goog.require('goog.date.weekDay');
goog.require('goog.i18n.DateTimeSymbols');
goog.require('goog.testing.ExpectedFailures');
goog.require('goog.testing.jsunit');
goog.require('goog.userAgent');
goog.require('goog.userAgent.platform');
goog.require('goog.userAgent.product');
goog.require('goog.userAgent.product.isVersion');

var expectedFailures;

function shouldRunTests() {
  // Test disabled in Chrome-vista due to flakiness. See b/2753939.
  if (goog.userAgent.product.CHROME && goog.userAgent.WINDOWS &&
      goog.userAgent.platform.VERSION == '6.0') {
    return false;
  }

  return true;
}

function setUpPage() {
  expectedFailures = new goog.testing.ExpectedFailures();
}

function tearDown() {
  expectedFailures.handleTearDown();
}


/**
 * Unit test for Closure's 'goog.date'.
 */
function testIsLeapYear() {
  var f = goog.date.isLeapYear;

  assertFalse('Year 1900 was not a leap year (the 100 rule)', f(1900));
  assertFalse('Year 1901 was not a leap year (the 100 rule)', f(1901));
  assertTrue('Year 1904 was a leap year', f(1904));
  assertFalse('Year 1999 was not a leap year', f(1999));
  assertTrue('Year 2000 was a leap year (the 400 rule)', f(2000));
  assertTrue('Year 2004 was a leap year', f(2004));
  assertFalse('Year 2006 was not a leap year', f(2006));
}


function testIsLongIsoYear() {
  var f = goog.date.isLongIsoYear;

  // see http://en.wikipedia.org/wiki/ISO_week_date#The_leap_year_cycle
  assertFalse('1902 was not an ISO leap year', f(1902));
  assertTrue('1903 was an ISO leap year', f(1903));
  assertFalse('1904 was not an ISO leap year', f(1904));
  assertTrue('1981 was an ISO leap year', f(1981));
  assertTrue('1987 was an ISO leap year', f(1987));
  assertFalse('2000 was not an ISO leap year', f(2000));
}


function testGetNumberOfDaysInMonth() {
  var f = goog.date.getNumberOfDaysInMonth;

  assertEquals('January has 31 days', f(2006, goog.date.month.JAN, 2000), 31);
  assertEquals('February has 28 days', f(2006, goog.date.month.FEB), 28);
  assertEquals(
      'February has 29 days (leap year)', f(2008, goog.date.month.FEB), 29);
  assertEquals('March has 31 days', f(2006, goog.date.month.MAR), 31);
  assertEquals('April has 30 days', f(2006, goog.date.month.APR), 30);
  assertEquals('May has 31 days', f(2006, goog.date.month.MAY), 31);
  assertEquals('June has 30 days', f(2006, goog.date.month.JUN), 30);
  assertEquals('July has 31 days', f(2006, goog.date.month.JUL), 31);
  assertEquals('August has 31 days', f(2006, goog.date.month.AUG), 31);
  assertEquals('September has 30 days', f(2006, goog.date.month.SEP), 30);
  assertEquals('October has 31 days', f(2006, goog.date.month.OCT), 31);
  assertEquals('November has 30 days', f(2006, goog.date.month.NOV), 30);
  assertEquals('December has 31 days', f(2006, goog.date.month.DEC), 31);
}


function testIsSameDay() {
  assertTrue(
      'Dates are on the same day',
      goog.date.isSameDay(
          new Date('2009/02/01 12:45:12'), new Date('2009/02/01 01:15:49')));

  assertFalse(
      'Days are different',
      goog.date.isSameDay(
          new Date('2009/02/01 12:45:12'), new Date('2009/02/02 01:15:49')));

  assertFalse(
      'Months are different',
      goog.date.isSameDay(
          new Date('2009/02/01 12:45:12'), new Date('2009/03/01 01:15:49')));

  assertFalse(
      'Years are different',
      goog.date.isSameDay(
          new Date('2009/02/01 12:45:12'), new Date('2010/02/01 01:15:49')));

  assertFalse(
      'Wrong millennium',
      goog.date.isSameDay(
          new Date('2009/02/01 12:45:12'), new Date('1009/02/01 01:15:49')));
}


function testIsSameMonth() {
  assertTrue(
      'Dates are on the same day',
      goog.date.isSameMonth(
          new Date('2009/02/01 12:45:12'), new Date('2009/02/01 01:15:49')));

  assertTrue(
      'Dates are in the same month',
      goog.date.isSameMonth(
          new Date('2009/02/01 12:45:12'), new Date('2009/02/10 01:15:49')));

  assertFalse(
      'Month is different',
      goog.date.isSameMonth(
          new Date('2009/02/01 12:45:12'), new Date('2009/03/01 01:15:49')));

  assertFalse(
      'Year is different',
      goog.date.isSameMonth(
          new Date('2008/02/01 12:45:12'), new Date('2009/02/01 01:15:49')));

  assertFalse(
      'Wrong millennium',
      goog.date.isSameMonth(
          new Date('2009/02/01 12:45:12'), new Date('1009/02/01 01:15:49')));
}


function testIsSameYear() {
  assertTrue(
      'Dates are on the same day',
      goog.date.isSameYear(
          new Date('2009/02/01 12:45:12'), new Date('2009/02/01 01:15:49')));

  assertTrue(
      'Only days are different',
      goog.date.isSameYear(
          new Date('2009/02/01 12:45:12'), new Date('2009/02/11 01:15:49')));

  assertTrue(
      'Only months are different',
      goog.date.isSameYear(
          new Date('2009/02/01 12:45:12'), new Date('2009/02/01 01:15:49')));

  assertFalse(
      'Years are different',
      goog.date.isSameYear(
          new Date('2009/02/01 12:45:12'), new Date('2010/02/01 01:15:49')));

  assertFalse(
      'Years are different',
      goog.date.isSameYear(
          new Date('2009/02/01 12:45:12'), new Date('2008/02/01 01:15:49')));
}


function testGetWeekNumber() {
  var f = goog.date.getWeekNumber;

  // Test cases from http://en.wikipedia.org/wiki/ISO_week_date#Examples
  assertEquals(
      '2005-01-01 is the week 53 of the previous year', 53,
      f(2005, goog.date.month.JAN, 1));
  assertEquals(
      '2005-01-02 is the week 53 of the previous year', 53,
      f(2005, goog.date.month.JAN, 2));
  assertEquals(
      '2005-12-31 is the week 52', 52, f(2005, goog.date.month.DEC, 31));
  assertEquals('2007-01-01 is the week 1', 1, f(2007, goog.date.month.JAN, 1));
  assertEquals(
      '2007-12-30 is the week 52', 52, f(2007, goog.date.month.DEC, 30));
  assertEquals(
      '2007-12-31 is the week 1 of the following year', 1,
      f(2007, goog.date.month.DEC, 31));
  assertEquals('2008-01-01 is the week 1', 1, f(2008, goog.date.month.JAN, 1));
  assertEquals(
      '2008-12-28 is the week 52', 52, f(2008, goog.date.month.DEC, 28));
  assertEquals(
      '2008-12-29 is the week 1 of the following year', 1,
      f(2008, goog.date.month.DEC, 29));
  assertEquals(
      '2008-12-31 is the week 1 of the following year', 1,
      f(2008, goog.date.month.DEC, 31));
  assertEquals('2009-01-01 is the week 1', 1, f(2009, goog.date.month.JAN, 1));
  assertEquals(
      '2009-12-31 is the week 53 of the previous year', 53,
      f(2009, goog.date.month.DEC, 31));
  assertEquals(
      '2010-01-01 is the week 53 of the previous year', 53,
      f(2010, goog.date.month.JAN, 1));
  assertEquals(
      '2010-01-03 is the week 53 of the previous year', 53,
      f(2010, goog.date.month.JAN, 3));
  assertEquals('2010-01-04 is the week 1', 1, f(2010, goog.date.month.JAN, 4));

  assertEquals(
      '2006-01-01 is in week 52 of the following year', 52,
      f(2006, goog.date.month.JAN, 1));
  assertEquals('2006-01-02 is in week 1', 1, f(2006, goog.date.month.JAN, 2));
  assertEquals(
      '2006-10-16 is in week 42', 42, f(2006, goog.date.month.OCT, 16));
  assertEquals(
      '2006-10-19 is in week 42', 42, f(2006, goog.date.month.OCT, 19));
  assertEquals(
      '2006-10-22 is in week 42', 42, f(2006, goog.date.month.OCT, 22));
  assertEquals(
      '2006-10-23 is in week 43', 43, f(2006, goog.date.month.OCT, 23));
  assertEquals(
      '2008-12-29 is in week 1 of the following year', 1,
      f(2008, goog.date.month.DEC, 29));
  assertEquals(
      '2010-01-03 is in week 53 of the previous year', 53,
      f(2010, goog.date.month.JAN, 3));

  assertEquals('2008-02-01 is in week 5', 5, f(2008, goog.date.month.FEB, 1));
  assertEquals('2008-02-04 is in week 6', 6, f(2008, goog.date.month.FEB, 4));

  // Tests for different cutoff days.
  assertEquals(
      '2006-01-01 is in week 52 of the prev. year (cutoff=Monday)', 52,
      f(2006, goog.date.month.JAN, 1, goog.date.weekDay.MON));
  assertEquals(
      '2006-01-01 is in week 1 (cutoff=Sunday)', 1,
      f(2006, goog.date.month.JAN, 1, goog.date.weekDay.SUN));
  assertEquals(
      '2006-12-31 is in week 52 (cutoff=Monday)', 52,
      f(2006, goog.date.month.DEC, 31, goog.date.weekDay.MON));
  assertEquals(
      '2006-12-31 is in week 53 (cutoff=Sunday)', 53,
      f(2006, goog.date.month.DEC, 31, goog.date.weekDay.SUN));
  assertEquals(
      '2007-01-01 is in week 1 (cutoff=Monday)', 1,
      f(2007, goog.date.month.JAN, 1, goog.date.weekDay.MON));
  assertEquals(
      '2007-01-01 is in week 1 (cutoff=Sunday)', 1,
      f(2007, goog.date.month.JAN, 1, goog.date.weekDay.SUN));
  assertEquals(
      '2015-01-01 is in week 52 of the previous year (cutoff=Monday)', 52,
      f(2015, goog.date.month.JAN, 1, goog.date.weekDay.MON));

  // Tests for leap year 2000.
  assertEquals('2000-02-27 is in week 8', 8, f(2000, goog.date.month.FEB, 27));
  assertEquals('2000-02-28 is in week 9', 9, f(2000, goog.date.month.FEB, 28));
  assertEquals('2000-02-29 is in week 9', 9, f(2000, goog.date.month.FEB, 29));
  assertEquals('2000-03-01 is in week 9', 9, f(2000, goog.date.month.MAR, 1));
  assertEquals('2000-03-05 is in week 9', 9, f(2000, goog.date.month.MAR, 5));
  assertEquals('2000-03-06 is in week 10', 10, f(2000, goog.date.month.MAR, 6));

  // Check that week number is strictly incremented by 1.
  var dt = new goog.date.Date(2008, goog.date.month.JAN, 1);
  for (var i = 0; i < 52; ++i) {
    var expected_week = i + 1;
    assertEquals(
        dt.toUTCIsoString(true) + ' is in week ' + expected_week, expected_week,
        dt.getWeekNumber());
    dt.add(new goog.date.Interval(goog.date.Interval.DAYS, 7));
  }
}


function testFormatMonthAndYear() {
  var f = goog.date.formatMonthAndYear;
  assertEquals(
      'January 2008',
      f(goog.i18n.DateTimeSymbols.MONTHS[goog.date.month.JAN], 2008));
  assertEquals(
      'Jun 2007',
      f(goog.i18n.DateTimeSymbols.SHORTMONTHS[goog.date.month.JUN], 2007));
}


//=== tests for goog.date.Date ===
function testIsDateLikeWithGoogDate() {
  var jsDate = new Date();
  var googDate = new goog.date.Date();
  var string = 'foo';
  var number = 1;
  var nullVar = null;
  var notDefined;

  assertTrue('js Date should be date-like', goog.isDateLike(jsDate));
  assertTrue('goog Date should be date-like', goog.isDateLike(googDate));
  assertFalse('string should not be date-like', goog.isDateLike(string));
  assertFalse('number should not be date-like', goog.isDateLike(number));
  assertFalse('nullVar should not be date-like', goog.isDateLike(nullVar));
  assertFalse('undefined should not be date-like', goog.isDateLike(notDefined));
}


function testDateConstructor() {
  var date = new goog.date.Date(2001, 2, 3);
  assertEquals(2001, date.getFullYear());
  assertEquals(2, date.getMonth());
  assertEquals(3, date.getDate());

  date = new goog.date.Date(2001);
  assertEquals(2001, date.getFullYear());
  assertEquals(0, date.getMonth());
  assertEquals(1, date.getDate());

  date = new goog.date.Date(new Date(2001, 2, 3, 4, 5, 6, 7));
  assertEquals(2001, date.getFullYear());
  assertEquals(2, date.getMonth());
  assertEquals(3, date.getDate());
  assertEquals(new Date(2001, 2, 3).getTime(), date.getTime());

  goog.now = function() { return new Date(2001, 2, 3, 4).getTime(); };
  date = new goog.date.Date();
  assertEquals(2001, date.getFullYear());
  assertEquals(2, date.getMonth());
  assertEquals(3, date.getDate());
  assertEquals(new Date(2001, 2, 3).getTime(), date.getTime());
}


function testDateConstructor_yearBelow100() {
  var date = new goog.date.Date(14, 7, 19);
  assertEquals(
      'Date constructor should respect passed in full year', 14,
      date.getFullYear());

  var copied = new goog.date.Date(date);
  assertEquals(
      'Copying a should return identical date', date.getTime(),
      copied.getTime());
  assertEquals(
      'Full year should be left intact by copying', 14, copied.getFullYear());

  // Test boundaries.
  assertEquals(-1, new goog.date.Date(-1, 0, 1).getFullYear());
  assertEquals(
      'There is no year zero, but JS dates accept it', 0,
      new goog.date.Date(0, 0, 1).getFullYear());
  assertEquals(1, new goog.date.Date(1, 0, 1).getFullYear());
  assertEquals(99, new goog.date.Date(99, 0, 1).getFullYear());
  assertEquals(100, new goog.date.Date(100, 0, 1).getFullYear());
}


function testDateConstructor_flipOver() {
  var date = new goog.date.Date(2012, 12, 1);
  assertEquals('20130101', date.toIsoString());

  date = new goog.date.Date(12, 12, 1);
  assertEquals('130101', date.toIsoString());
}


function testDateToIsoString() {
  var d = new goog.date.Date(2006, goog.date.month.JAN, 1);
  assertEquals('1 Jan 2006 is 20060101', d.toIsoString(), '20060101');

  d = new goog.date.Date(2007, goog.date.month.JUN, 12);
  assertEquals('12 Jun 2007 is 20070612', d.toIsoString(), '20070612');

  d = new goog.date.Date(2218, goog.date.month.DEC, 31);
  assertEquals('31 Dec 2218 is 22181231', d.toIsoString(), '22181231');
}


function testDateTimeFromTimestamp() {
  assertEquals(0, goog.date.DateTime.fromTimestamp(0).getTime());
  assertEquals(1234, goog.date.DateTime.fromTimestamp(1234).getTime());
}


function testRfc822StringToDate() {
  var date = goog.date.DateTime.fromRfc822String('October 2, 2002 8:00:00');
  assertNotNull(date);
  assertEquals(2002, date.getFullYear());
  assertEquals(9, date.getMonth());
  assertEquals(2, date.getDate());
  assertEquals(8, date.getHours());
  assertEquals(0, date.getMinutes());
  assertEquals(0, date.getSeconds());
  assertEquals(0, date.getMilliseconds());
  assertEquals(new Date(2002, 9, 2, 8).getTime(), date.getTime());

  date = goog.date.DateTime.fromRfc822String('Sat, 02 Oct 2010 08:00:00 UTC');
  assertEquals(2010, date.getFullYear());
  assertEquals(9, date.getUTCMonth());
  assertEquals(2, date.getUTCDate());
  assertEquals(8, date.getUTCHours());
  assertEquals(0, date.getUTCMinutes());
  assertEquals(0, date.getUTCSeconds());
  assertEquals(0, date.getUTCMilliseconds());

  date = goog.date.DateTime.fromRfc822String('');
  assertEquals(null, date);

  date = goog.date.DateTime.fromRfc822String('Invalid Date String');
  assertEquals(null, date);

  date = goog.date.DateTime.fromRfc822String('Sat, 02 Oct 2010');
  assertEquals(2010, date.getFullYear());
  assertEquals(9, date.getMonth());
  assertEquals(2, date.getDate());
  assertEquals(0, date.getHours());
  assertEquals(0, date.getMinutes());
  assertEquals(0, date.getSeconds());
  assertEquals(0, date.getMilliseconds());
  assertEquals(new Date(2010, 9, 2).getTime(), date.getTime());
}

function testIsoStringToDate() {
  var iso = '20060210T000000Z';
  var date = goog.date.fromIsoString(iso);

  assertEquals('Got 2006 from ' + iso, 2006, date.getFullYear());
  assertEquals('Got February from ' + iso, 1, date.getMonth());
  // use getUTCDate() here, since in 'iso' var we specified timezone
  // as being a zero offset from GMT
  assertEquals('Got 10th from ' + iso, 10, date.getUTCDate());

  // YYYY-MM-DD
  iso = '2005-02-22';
  date = goog.date.fromIsoString(iso);
  assertEquals('Got 2005 from ' + iso, 2005, date.getFullYear());
  assertEquals('Got February from ' + iso, 1, date.getMonth());
  assertEquals('Got 22nd from ' + iso, 22, date.getDate());

  // YYYYMMDD
  iso = '20050222';
  date = goog.date.fromIsoString(iso);
  assertEquals('Got 2005 from ' + iso, 2005, date.getFullYear());
  assertEquals('Got February from ' + iso, 1, date.getMonth());
  assertEquals('Got 22nd from ' + iso, 22, date.getDate());

  // YYYY-MM
  iso = '2005-08';
  date = goog.date.fromIsoString(iso);
  assertEquals('Got 2005 from ' + iso, 2005, date.getFullYear());
  assertEquals('Got August from ' + iso, 7, date.getMonth());

  // YYYYMM
  iso = '200502';
  date = goog.date.fromIsoString(iso);
  assertEquals('Got 2005 from ' + iso, 2005, date.getFullYear());
  assertEquals('Got February from ' + iso, 1, date.getMonth());

  // YYYY
  iso = '2005';
  date = goog.date.fromIsoString(iso);
  assertEquals('Got 2005 from ' + iso, 2005, date.getFullYear());

  // 1997-W01 or 1997W01
  iso = '2005-W22';
  date = goog.date.fromIsoString(iso);
  assertEquals('Got 2005 from ' + iso, 2005, date.getFullYear());
  assertEquals('Got May from ' + iso, 4, date.getMonth());
  assertEquals('Got 30th from ' + iso, 30, date.getDate());

  iso = '2005W22';
  date = goog.date.fromIsoString(iso);
  assertEquals('Got 2005 from ' + iso, 2005, date.getFullYear());
  assertEquals('Got May from ' + iso, 4, date.getMonth());
  assertEquals('Got 30th from ' + iso, 30, date.getDate());

  // 1997-W01-2 or 1997W012
  iso = '2005-W22-4';
  date = goog.date.fromIsoString(iso);
  assertEquals('Got 2005 from ' + iso, 2005, date.getFullYear());
  assertEquals('Got June from ' + iso, 5, date.getMonth());
  assertEquals('Got 2nd from ' + iso, 2, date.getDate());

  iso = '2005W224';
  date = goog.date.fromIsoString(iso);
  assertEquals('Got 2005 from ' + iso, 2005, date.getFullYear());
  assertEquals('Got June from ' + iso, 5, date.getMonth());
  assertEquals('Got 2nd from ' + iso, 2, date.getDate());

  iso = '2004-W53-6';
  date = goog.date.fromIsoString(iso);
  assertEquals('Got 2005 from ' + iso, 2005, date.getFullYear());
  assertEquals('Got January from ' + iso, 0, date.getMonth());
  assertEquals('Got 1st from ' + iso, 1, date.getDate());

  iso = '2004-W53-7';
  date = goog.date.fromIsoString(iso);
  assertEquals('Got 2005 from ' + iso, 2005, date.getFullYear());
  assertEquals('Got January from ' + iso, 0, date.getMonth());
  assertEquals('Got 2nd from ' + iso, 2, date.getDate());

  iso = '2005-W52-6';
  date = goog.date.fromIsoString(iso);
  assertEquals('Got 2005 from ' + iso, 2005, date.getFullYear());
  assertEquals('Got December from ' + iso, 11, date.getMonth());
  assertEquals('Got 31st from ' + iso, 31, date.getDate());

  // both years 2007 start with the same day
  iso = '2007-W01-1';
  date = goog.date.fromIsoString(iso);
  assertEquals('Got 2007 from ' + iso, 2007, date.getFullYear());
  assertEquals('Got January from ' + iso, 0, date.getMonth());
  assertEquals('Got 1st from ' + iso, 1, date.getDate());

  iso = '2007-W52-7';
  date = goog.date.fromIsoString(iso);
  assertEquals('Got 2007 from ' + iso, 2007, date.getFullYear());
  assertEquals('Got December from ' + iso, 11, date.getMonth());
  assertEquals('Got 30th from ' + iso, 30, date.getDate());

  iso = '2008-W01-1';
  date = goog.date.fromIsoString(iso);
  assertEquals('Got 2007 from ' + iso, 2007, date.getFullYear());
  assertEquals('Got December from ' + iso, 11, date.getMonth());
  assertEquals('Got 31st from ' + iso, 31, date.getDate());

  // Gregorian year 2008 is a leap year,
  // ISO year 2008 is 2 days shorter:
  // 1 day longer at the start, 3 days shorter at the end
  iso = '2008-W01-2';
  date = goog.date.fromIsoString(iso);
  assertEquals('Got 2008 from ' + iso, 2008, date.getFullYear());
  assertEquals('Got Jan from ' + iso, 0, date.getMonth());
  assertEquals('Got 1st from ' + iso, 1, date.getDate());

  // ISO year is three days into the previous gregorian year
  iso = '2009-W01-1';
  date = goog.date.fromIsoString(iso);
  assertEquals('Got 2008 from ' + iso, 2008, date.getFullYear());
  assertEquals('Got December from ' + iso, 11, date.getMonth());
  assertEquals('Got 29th from ' + iso, 29, date.getDate());

  iso = '2009-W01-3';
  date = goog.date.fromIsoString(iso);
  assertEquals('Got 2008 from ' + iso, 2008, date.getFullYear());
  assertEquals('Got December from ' + iso, 11, date.getMonth());
  assertEquals('Got 31st from ' + iso, 31, date.getDate());

  iso = '2009-W01-4';
  date = goog.date.fromIsoString(iso);
  assertEquals('Got 2009 from ' + iso, 2009, date.getFullYear());
  assertEquals('Got January from ' + iso, 0, date.getMonth());
  assertEquals('Got 1st from ' + iso, 1, date.getDate());

  // ISO year is three days into the next gregorian year
  iso = '2009-W53-4';
  date = goog.date.fromIsoString(iso);
  assertEquals('Got 2009 from ' + iso, 2009, date.getFullYear());
  assertEquals('Got December from ' + iso, 11, date.getMonth());
  assertEquals('Got 31st from ' + iso, 31, date.getDate());

  iso = '2009-W53-5';
  date = goog.date.fromIsoString(iso);
  assertEquals('Got 2010 from ' + iso, 2010, date.getFullYear());
  assertEquals('Got January from ' + iso, 0, date.getMonth());
  assertEquals('Got 1st from ' + iso, 1, date.getDate());

  iso = '2009-W53-6';
  date = goog.date.fromIsoString(iso);
  assertEquals('Got 2010 from ' + iso, 2010, date.getFullYear());
  assertEquals('Got January from ' + iso, 0, date.getMonth());
  assertEquals('Got 2nd from ' + iso, 2, date.getDate());

  iso = '2009-W53-7';
  date = goog.date.fromIsoString(iso);
  assertEquals('Got 2010 from ' + iso, 2010, date.getFullYear());
  assertEquals('Got January from ' + iso, 0, date.getMonth());
  assertEquals('Got 3rd from ' + iso, 3, date.getDate());

  iso = '2010-W01-1';
  date = goog.date.fromIsoString(iso);
  assertEquals('Got 2010 from ' + iso, 2010, date.getFullYear());
  assertEquals('Got January from ' + iso, 0, date.getMonth());
  assertEquals('Got 4th from ' + iso, 4, date.getDate());

  // Examples where the ISO year is three days into the previous gregorian year

  // 1995-035 or 1995035
  iso = '2005-146';
  date = goog.date.fromIsoString(iso);
  assertEquals('Got 2005 from ' + iso, 2005, date.getFullYear());
  assertEquals('Got May from ' + iso, 4, date.getMonth());
  assertEquals('Got 26th from ' + iso, 26, date.getDate());

  iso = '2005146';
  date = goog.date.fromIsoString(iso);
  assertEquals('Got 2005 from ' + iso, 2005, date.getFullYear());
  assertEquals('Got May from ' + iso, 4, date.getMonth());
  assertEquals('Got 26th from ' + iso, 26, date.getDate());
}


// test private function used by goog.date.Date.toIsoString()
function test_setIso8601TimeOnly_() {
  if (goog.userAgent.product.SAFARI) {
    // TODO(b/20733468): Disabled so we can get the rest of the Closure test
    // suite running in a continuous build. Will investigate later.
    return;
  }

  // 23:59:59
  var d = new goog.date.DateTime(0, 0);
  var iso = '18:46:39';
  assertTrue('parsed ' + iso, goog.date.setIso8601TimeOnly_(d, iso));
  assertEquals('Got 18 hours from ' + iso, 18, d.getHours());
  assertEquals('Got 46 minutes from ' + iso, 46, d.getMinutes());
  assertEquals('Got 39 seconds from ' + iso, 39, d.getSeconds());

  // 235959
  d = new goog.date.DateTime(0, 0);
  iso = '184639';
  assertTrue('parsed ' + iso, goog.date.setIso8601TimeOnly_(d, iso));
  assertEquals('Got 18 hours from ' + iso, 18, d.getHours());
  assertEquals('Got 46 minutes from ' + iso, 46, d.getMinutes());
  assertEquals('Got 39 seconds from ' + iso, 39, d.getSeconds());

  // 23:59, 2359, or 23
  d = new goog.date.DateTime(0, 0);
  iso = '18:46';
  assertTrue('parsed ' + iso, goog.date.setIso8601TimeOnly_(d, iso));
  assertEquals('Got 18 hours from ' + iso, 18, d.getHours());
  assertEquals('Got 46 minutes from ' + iso, 46, d.getMinutes());

  d = new goog.date.DateTime(0, 0);
  iso = '1846';
  assertTrue('parsed ' + iso, goog.date.setIso8601TimeOnly_(d, iso));
  assertEquals('Got 18 hours from ' + iso, 18, d.getHours());
  assertEquals('Got 46 minutes from ' + iso, 46, d.getMinutes());

  d = new goog.date.DateTime(0, 0);
  iso = '18';
  assertTrue('parsed ' + iso, goog.date.setIso8601TimeOnly_(d, iso));
  assertEquals('Got 18 hours from ' + iso, 18, d.getHours());

  d = new goog.date.DateTime(0, 0);
  iso = '18463';
  assertFalse('failed to parse ' + iso, goog.date.setIso8601TimeOnly_(d, iso));
  assertTrue('date did not change', d.equals(new goog.date.DateTime(0, 0)));

  // 23:59:59.9942 or 235959.9942
  d = new goog.date.DateTime(0, 0);
  iso = '18:46:39.9942';
  assertTrue('parsed ' + iso, goog.date.setIso8601TimeOnly_(d, iso));
  assertEquals('Got 18 hours from ' + iso, 18, d.getHours());
  assertEquals('Got 46 minutes from ' + iso, 46, d.getMinutes());
  assertEquals('Got 39 seconds from ' + iso, 39, d.getSeconds());

  // Fails in Safari4 Winxp, temporarily disabled
  expectedFailures.expectFailureFor(isWinxpSafari4());
  try {
    if (goog.userAgent.WEBKIT && goog.userAgent.MAC) {
      // Both Safari 3.1 and WebKit (on Mac) return floating-point values.
      assertRoughlyEquals(
          'Got roughly 994.2 milliseconds from ' + iso, 994.2,
          d.getMilliseconds(), 0.01);
    } else {
      // Other browsers, including WebKit on Windows, return integers.
      assertEquals(
          'Got 994 milliseconds from ' + iso, 994, d.getMilliseconds());
    }

    d = new goog.date.DateTime(0, 0);
    iso = '184639.9942';
    assertTrue('parsed ' + iso, goog.date.setIso8601TimeOnly_(d, iso));
    assertEquals('Got 18 hours from ' + iso, 18, d.getHours());
    assertEquals('Got 46 minutes from ' + iso, 46, d.getMinutes());
    assertEquals('Got 39 seconds from ' + iso, 39, d.getSeconds());
    if (goog.userAgent.WEBKIT && goog.userAgent.MAC) {
      // Both Safari 3.1 and WebKit (on Mac) return floating-point values.
      assertRoughlyEquals(
          'Got roughly 994.2 milliseconds from ' + iso, 994.2,
          d.getMilliseconds(), 0.01);
    } else {
      // Other browsers, including WebKit on Windows, return integers.
      assertEquals(
          'Got 994 milliseconds from ' + iso, 994, d.getMilliseconds());
    }
  } catch (e) {
    expectedFailures.handleException(e);
  }


  // 1995-02-04 24:00 = 1995-02-05 00:00
  // timezone tests
  var offset = new Date().getTimezoneOffset() / 60;
  d = new goog.date.DateTime(0, 0);
  iso = '18:46:39+07:00';
  assertTrue('parsed ' + iso, goog.date.setIso8601TimeOnly_(d, iso));
  assertEquals('Got an 11-hour GMT offset from ' + iso, 11, d.getUTCHours());

  d = new goog.date.DateTime(0, 0);
  iso = '18:46:39+00:00';
  assertTrue('parsed ' + iso, goog.date.setIso8601TimeOnly_(d, iso));
  assertEquals('Got an 18-hour GMT offset from ' + iso, 18, d.getUTCHours());

  d = new goog.date.DateTime(0, 0);
  iso = '16:46:39-07:00';
  assertTrue('parsed ' + iso, goog.date.setIso8601TimeOnly_(d, iso));
  assertEquals('Got a 23-hour GMT offset from ' + iso, 23, d.getUTCHours());
}


function testDateIntervalAdd() {
  // -1m, cross year boundary
  var d = new goog.date.Date(2007, goog.date.month.JAN, 1);
  d.add(new goog.date.Interval(goog.date.Interval.MONTHS, -1));
  assertEquals('2007-01-01 - 1m = 2006-12-01', '20061201', d.toIsoString());

  // +1y2m3d
  d = new goog.date.Date(2006, goog.date.month.JAN, 1);
  d.add(new goog.date.Interval(1, 2, 3));
  assertEquals('2006-01-01 + 1y2m3d = 2007-03-04', '20070304', d.toIsoString());

  // -1y2m3d (negative interval)
  d = new goog.date.Date(2007, goog.date.month.MAR, 4);
  d.add(new goog.date.Interval(-1, -2, -3));
  assertEquals('2007-03-04 - 1y2m3d = 2006-01-01', '20060101', d.toIsoString());

  // 2007-12-30 + 3d (roll over to next year)
  d = new goog.date.Date(2007, goog.date.month.DEC, 30);
  d.add(new goog.date.Interval(goog.date.Interval.DAYS, 3));
  assertEquals('2007-12-30 + 3d = 2008-01-02', '20080102', d.toIsoString());

  // 2004-03-01 - 1d (handle leap year)
  d = new goog.date.Date(2004, goog.date.month.MAR, 1);
  d.add(new goog.date.Interval(goog.date.Interval.DAYS, -1));
  assertEquals('2004-03-01 - 1d = 2004-02-29', '20040229', d.toIsoString());

  // 2004-02-29 + 1y (stays at end of Feb, doesn't roll to Mar)
  d = new goog.date.Date(2004, goog.date.month.FEB, 29);
  d.add(new goog.date.Interval(goog.date.Interval.YEARS, 1));
  assertEquals('2004-02-29 + 1y = 2005-02-28', '20050228', d.toIsoString());

  // 2004-02-29 - 1y (stays at end of Feb, doesn't roll to Mar)
  d = new goog.date.Date(2004, goog.date.month.FEB, 29);
  d.add(new goog.date.Interval(goog.date.Interval.YEARS, -1));
  assertEquals('2004-02-29 - 1y = 2003-02-28', '20030228', d.toIsoString());

  // 2003-02-28 + 1y (stays at 28, doesn't go to leap year end of Feb)
  d = new goog.date.Date(2003, goog.date.month.FEB, 28);
  d.add(new goog.date.Interval(goog.date.Interval.YEARS, 1));
  assertEquals('2003-02-28 + 1y = 2004-02-28', '20040228', d.toIsoString());

  // 2005-02-28 - 1y (stays at 28, doesn't go to leap year end of Feb)
  d = new goog.date.Date(2005, goog.date.month.FEB, 28);
  d.add(new goog.date.Interval(goog.date.Interval.YEARS, -1));
  assertEquals('2005-02-28 - 1y = 2004-02-28', '20040228', d.toIsoString());

  // 2003-01-31 + 1y (stays at end of Jan, standard case)
  d = new goog.date.Date(2003, goog.date.month.JAN, 31);
  d.add(new goog.date.Interval(goog.date.Interval.YEARS, 1));
  assertEquals('2003-01-31 + 1y = 2004-01-31', '20040131', d.toIsoString());

  // 2005-01-31 - 1y (stays at end of Jan, standard case)
  d = new goog.date.Date(2005, goog.date.month.JAN, 31);
  d.add(new goog.date.Interval(goog.date.Interval.YEARS, -1));
  assertEquals('2005-01-31 - 1y = 2004-01-31', '20040131', d.toIsoString());

  // 2006-01-31 + 1m (stays at end of Feb, doesn't roll to Mar, non-leap-year)
  d = new goog.date.Date(2006, goog.date.month.JAN, 31);
  d.add(new goog.date.Interval(goog.date.Interval.MONTHS, 1));
  assertEquals('2006-01-31 + 1m = 2006-02-28', '20060228', d.toIsoString());

  // 2004-02-29 + 1m (stays at 29, standard case)
  d = new goog.date.Date(2004, goog.date.month.FEB, 29);
  d.add(new goog.date.Interval(goog.date.Interval.MONTHS, +1));
  assertEquals('2004-02-29 + 1m = 2004-03-29', '20040329', d.toIsoString());

  // 2004-02-29 - 1m (stays at 29, standard case)
  d = new goog.date.Date(2004, goog.date.month.FEB, 29);
  d.add(new goog.date.Interval(goog.date.Interval.MONTHS, -1));
  assertEquals('2004-02-29 - 1m = 2004-01-29', '20040129', d.toIsoString());

  // 2004-01-30 + 1m (snaps to Feb 29)
  d = new goog.date.Date(2004, goog.date.month.JAN, 30);
  d.add(new goog.date.Interval(goog.date.Interval.MONTHS, 1));
  assertEquals('2004-01-30 + 1m = 2004-02-29', '20040229', d.toIsoString());

  // 2004-03-30 - 1m (snaps to Feb 29)
  d = new goog.date.Date(2004, goog.date.month.MAR, 30);
  d.add(new goog.date.Interval(goog.date.Interval.MONTHS, -1));
  assertEquals('2004-03-30 - 1m = 2004-02-29', '20040229', d.toIsoString());

  // 2004-03-30 + 1m (stays at 30, standard case)
  d = new goog.date.Date(2004, goog.date.month.MAR, 30);
  d.add(new goog.date.Interval(goog.date.Interval.MONTHS, 1));
  assertEquals('2004-03-30 + 1m = 2004-04-30', '20040430', d.toIsoString());

  // 2008-10-30 + 1d (roll over to 31).
  d = new goog.date.Date(2008, goog.date.month.OCT, 30);
  d.add(new goog.date.Interval(goog.date.Interval.DAYS, 1));
  assertEquals('2008-10-30 + 1d = 2008-10-31', '20081031', d.toIsoString());

  // 2008-10-31 + 1d (roll over to November, not December).
  d = new goog.date.Date(2008, goog.date.month.OCT, 31);
  d.add(new goog.date.Interval(goog.date.Interval.DAYS, 1));
  assertEquals('2008-10-31 + 1d = 2008-11-01', '20081101', d.toIsoString());

  // 2008-10-17 + 1d (Brasilia dst).
  d = new goog.date.Date(2008, goog.date.month.OCT, 17);
  d.add(new goog.date.Interval(goog.date.Interval.DAYS, 1));
  assertEquals('2008-10-17 + 1d = 2008-10-18', '20081018', d.toIsoString());

  // 2008-10-18 + 1d (Brasilia dst).
  d = new goog.date.Date(2008, goog.date.month.OCT, 18);
  d.add(new goog.date.Interval(goog.date.Interval.DAYS, 1));
  assertEquals('2008-10-18 + 1d = 2008-10-19', '20081019', d.toIsoString());

  // 2008-10-19 + 1d (Brasilia dst).
  d = new goog.date.Date(2008, goog.date.month.OCT, 19);
  d.add(new goog.date.Interval(goog.date.Interval.DAYS, 1));
  assertEquals('2008-10-19 + 1d = 2008-10-20', '20081020', d.toIsoString());

  // 2008-02-16 + 1d (Brasilia dst).
  d = new goog.date.Date(2008, goog.date.month.FEB, 16);
  d.add(new goog.date.Interval(goog.date.Interval.DAYS, 1));
  assertEquals('2008-02-16 + 1d = 2008-02-17', '20080217', d.toIsoString());

  // 2008-02-17 + 1d (Brasilia dst).
  d = new goog.date.Date(2008, goog.date.month.FEB, 17);
  d.add(new goog.date.Interval(goog.date.Interval.DAYS, 1));
  assertEquals('2008-02-17 + 1d = 2008-02-18', '20080218', d.toIsoString());
}


function testDateEquals() {
  var d1 = new goog.date.Date(2004, goog.date.month.MAR, 1);
  var d2 = new goog.date.Date(2004, goog.date.month.MAR, 1);
  assertFalse('d1 != null', d1.equals(null));
  assertFalse('d2 != undefined', d2.equals(undefined));
  assertTrue('d1 == d2', d1.equals(d2));
  assertTrue('d2 == d1', d2.equals(d1));

  d1 = new goog.date.Date(2005, goog.date.month.MAR, 1);
  d2 = new goog.date.Date(2004, goog.date.month.MAR, 1);
  assertFalse('different year', d1.equals(d2));

  d1 = new goog.date.Date(2004, goog.date.month.FEB, 1);
  d2 = new goog.date.Date(2004, goog.date.month.MAR, 1);
  assertFalse('different month', d1.equals(d2));

  d1 = new goog.date.Date(2004, goog.date.month.MAR, 2);
  d2 = new goog.date.Date(2004, goog.date.month.MAR, 1);
  assertFalse('different date', d1.equals(d2));

  // try passing in DateTime, time fields should be ignored
  d1 = new goog.date.Date(2004, goog.date.month.MAR, 1);
  d2 = new goog.date.DateTime(2004, goog.date.month.MAR, 1, 12, 30, 30);
  assertTrue('using goog.date.DateTime, same date', d1.equals(d2));
}


function testDateTimeConstructor() {
  var date = new goog.date.DateTime(2001, 2, 3, 4, 5, 6, 7);
  assertEquals(2001, date.getFullYear());
  assertEquals(2, date.getMonth());
  assertEquals(3, date.getDate());
  assertEquals(4, date.getHours());
  assertEquals(5, date.getMinutes());
  assertEquals(6, date.getSeconds());
  assertEquals(7, date.getMilliseconds());
  assertEquals(new Date(2001, 2, 3, 4, 5, 6, 7).getTime(), date.getTime());

  date = new goog.date.DateTime(2001);
  assertEquals(2001, date.getFullYear());
  assertEquals(0, date.getMonth());
  assertEquals(1, date.getDate());
  assertEquals(0, date.getHours());
  assertEquals(0, date.getMinutes());
  assertEquals(0, date.getSeconds());
  assertEquals(0, date.getMilliseconds());

  date = new goog.date.DateTime(new Date(2001, 2, 3, 4, 5, 6, 7));
  assertEquals(2001, date.getFullYear());
  assertEquals(2, date.getMonth());
  assertEquals(3, date.getDate());
  assertEquals(4, date.getHours());
  assertEquals(5, date.getMinutes());
  assertEquals(6, date.getSeconds());
  assertEquals(7, date.getMilliseconds());
  assertEquals(new Date(2001, 2, 3, 4, 5, 6, 7).getTime(), date.getTime());

  goog.now = function() { return new Date(2001, 2, 3, 4).getTime(); };
  date = new goog.date.DateTime();
  assertEquals(2001, date.getFullYear());
  assertEquals(2, date.getMonth());
  assertEquals(3, date.getDate());
  assertEquals(4, date.getHours());
  assertEquals(0, date.getMinutes());
  assertEquals(0, date.getSeconds());
  assertEquals(0, date.getMilliseconds());
  assertEquals(new Date(2001, 2, 3, 4).getTime(), date.getTime());

  date = new goog.date.DateTime(new Date('October 2, 2002 8:00:00'));
  assertEquals(2002, date.getFullYear());
  assertEquals(9, date.getMonth());
  assertEquals(2, date.getDate());
  assertEquals(8, date.getHours());
  assertEquals(0, date.getMinutes());
  assertEquals(0, date.getSeconds());
  assertEquals(0, date.getMilliseconds());
  assertEquals(new Date(2002, 9, 2, 8).getTime(), date.getTime());
}


function testDateTimeEquals() {
  var d1 = new goog.date.DateTime(2004, goog.date.month.MAR, 1, 12, 30, 30);
  var d2 = new goog.date.DateTime(2004, goog.date.month.MAR, 1, 12, 30, 30);
  assertTrue('d1 == d2', d1.equals(d2));
  assertTrue('d2 == d1', d2.equals(d1));

  d1 = new goog.date.DateTime(2007, goog.date.month.JAN, 1);
  d2 = new goog.date.DateTime();  // today
  assertFalse('different date', d1.equals(d2));

  d1 = new goog.date.DateTime(2004, goog.date.month.MAR, 1);
  d2 = new goog.date.DateTime(2004, goog.date.month.MAR, 1, 12);
  assertFalse('different hours', d1.equals(d2));

  d1 = new goog.date.DateTime(2004, goog.date.month.MAR, 1, 12, 29, 30);
  d2 = new goog.date.DateTime(2004, goog.date.month.MAR, 1, 12, 30, 30);
  assertFalse('different minutes', d1.equals(d2));

  d1 = new goog.date.DateTime(2004, goog.date.month.MAR, 1, 12, 30, 29);
  d2 = new goog.date.DateTime(2004, goog.date.month.MAR, 1, 12, 30, 30);
  assertFalse('different seconds', d1.equals(d2));

  d1 = new goog.date.DateTime(2004, goog.date.month.MAR, 1, 12, 30, 30, 500);
  d2 = new goog.date.DateTime(2004, goog.date.month.MAR, 1, 12, 30, 30, 500);
  assertTrue('same milliseconds', d1.equals(d2));

  d1 = new goog.date.DateTime(2004, goog.date.month.MAR, 1, 12, 30, 30, 499);
  d2 = new goog.date.DateTime(2004, goog.date.month.MAR, 1, 12, 30, 30, 500);
  assertFalse('different milliseconds', d1.equals(d2));

  // try milliseconds again, this time comparing against a native Date
  d1 = new goog.date.DateTime(2004, goog.date.month.MAR, 1, 12, 30, 30);
  d2 = new Date(2004, 2, 1, 12, 30, 30, 999);
  assertFalse('different milliseconds, native Date', d1.equals(d2));

  // pass in a goog.date.Date rather than a goog.date.DateTime
  d1 = new goog.date.DateTime(2004, goog.date.month.MAR, 1, 12, 30, 30);
  d2 = new goog.date.Date(2004, goog.date.month.MAR, 1);
  assertFalse('using goog.date.Date, different times', d1.equals(d2));

  d1 = new goog.date.DateTime(2004, goog.date.month.MAR, 1, 0, 0, 0);
  d2 = new goog.date.Date(2004, goog.date.month.MAR, 1);
  assertTrue('using goog.date.Date, same time (midnight)', d1.equals(d2));
}


function testIntervalIsZero() {
  assertTrue('zero interval', new goog.date.Interval().isZero());
  var i = new goog.date.Interval(0, 0, 1, -24, 0, 0);
  assertFalse('1 day minus 24 hours is not considered zero', i.isZero());
}


function testIntervalGetInverse() {
  var i1 = new goog.date.Interval(goog.date.Interval.DAYS, -1);
  var i2 = i1.getInverse();

  var d = new goog.date.Date(2004, goog.date.month.MAR, 1);
  d.add(i1);
  d.add(i2);
  var label = '2004-03-01 - 1d + 1d = 2004-03-01';
  assertEquals(label, d.toIsoString(), '20040301');

  i1 = new goog.date.Interval(1, 2, 3);
  i2 = i1.getInverse();

  d = new goog.date.Date(2004, goog.date.month.MAR, 1);
  d.add(i1);
  d.add(i2);
  label = '2004-03-01 - 1y2m3d + 1y2m3d = 2004-03-01';
  assertEquals(label, d.toIsoString(), '20040301');
}


function testIntervalTimes() {
  var i = new goog.date.Interval(1, 2, 3, 4, 5, 6);
  var expected = new goog.date.Interval(2, 4, 6, 8, 10, 12);
  assertTrue('double interval', expected.equals(i.times(2)));
}


//=== tests for goog.date.Interval.equals() ===
function testIntervalEquals() {
  var i1 = new goog.date.Interval(goog.date.Interval.DAYS, -1);
  var i2 = new goog.date.Interval(goog.date.Interval.DAYS, -1);
  assertTrue('-1d == -1d, aka i1 == i2', i1.equals(i2));
  assertTrue('-1d == -1d, aka i2 == i1', i2.equals(i1));

  i1 = new goog.date.Interval(goog.date.Interval.DAYS, -1);
  i2 = new goog.date.Interval(goog.date.Interval.DAYS, 1);
  assertFalse('-1d != +1d, aka i1 == i2', i1.equals(i2));
  assertFalse('-1d != +1d, aka i2 == i1', i2.equals(i1));

  i1 = new goog.date.Interval(0, 3);  // Three months
  i2 = new goog.date.Interval(goog.date.Interval.MONTHS, 3);
  assertTrue('3m == 3m, aka i1 == i2', i1.equals(i2));
  assertTrue('3m == 3m, aka i2 == i1', i2.equals(i1));

  // 1 year, 6 months, 15 days, 12 hours, 30 minutes, 30 seconds
  i1 = new goog.date.Interval(1, 6, 15, 12, 30, 30);
  i2 = new goog.date.Interval(1, 6, 15, 12, 30, 30);
  assertTrue('1y6m15d12h30M30s == 1y6m15d12h30M30s', i1.equals(i2));
  assertTrue('1y6m15d12h30M30s == 1y6m15d12h30M30s', i2.equals(i1));
}


//=== tests for adding two goog.date.Interval intervals ===
function testIntervalIntervalAdd() {
  var i1 = new goog.date.Interval(1, 6, 15, 12, 30, 30);
  var i2 = new goog.date.Interval(0, 3, 20, 10, 50, -25);
  i1.add(i2);
  assertTrue('i1 + i2', i1.equals(new goog.date.Interval(1, 9, 35, 22, 80, 5)));

  i1 = new goog.date.Interval(1, 6, 15, 12, 30, 30);
  i2 = new goog.date.Interval(0, 3, 20, 10, 50, -25);
  i2.add(i1);
  assertTrue('i2 + i1', i2.equals(new goog.date.Interval(1, 9, 35, 22, 80, 5)));

  i1 = new goog.date.Interval(1, 6, 15, 12, 30, 30);
  i2 = i1.getInverse();
  i1.add(i2);
  assertTrue('i1 + (-i1)', i1.equals(new goog.date.Interval()));

  i1 = new goog.date.Interval(goog.date.Interval.DAYS, 1);
  i2 = new goog.date.Interval(0, -2, -2);
  i1.add(i2);
  assertTrue('1d + (-2m-2d)', i1.equals(new goog.date.Interval(0, -2, -1)));
}


//=== tests conversion to and from ISO 8601 duration string ===
function testIsoDuration() {
  var interval1 = new goog.date.Interval(123, 456, 678, 11, 12, 455.5);
  var duration1 = 'P123Y456M678DT11H12M455.5S';
  assertTrue(
      'parse full duration',
      interval1.equals(goog.date.Interval.fromIsoString(duration1)));
  assertEquals('create full duration', duration1, interval1.toIsoString());

  var interval2 = new goog.date.Interval(123);
  var duration2 = 'P123Y';
  var duration2v = 'P123Y0M0DT0H0M0S';
  assertTrue(
      'parse year',
      interval2.equals(goog.date.Interval.fromIsoString(duration2)));
  assertEquals('create year', duration2, interval2.toIsoString());
  assertEquals('create year, verbose', duration2v, interval2.toIsoString(true));

  var interval3 = new goog.date.Interval(0, 0, 0, 11, 12, 40);
  var duration3 = 'PT11H12M40S';
  var duration3v = 'P0Y0M0DT11H12M40S';
  assertTrue(
      'parse time duration',
      interval3.equals(goog.date.Interval.fromIsoString(duration3)));
  assertEquals('create time duration', duration3, interval3.toIsoString());
  assertEquals(
      'create time duration, verbove', duration3v, interval3.toIsoString(true));

  var interval4 = new goog.date.Interval(7, 8, 9, 1, 2, 4);
  var duration4 = 'P7Y8M9DT1H2M4S';
  assertTrue(
      'parse one-digit duration',
      interval4.equals(goog.date.Interval.fromIsoString(duration4)));
  assertEquals('create one-digit duration', duration4, interval4.toIsoString());

  var interval5 = new goog.date.Interval(-123, -456, -678, -11, -12, -455.5);
  var duration5 = '-P123Y456M678DT11H12M455.5S';
  assertTrue(
      'parse full negative duration',
      interval5.equals(goog.date.Interval.fromIsoString(duration5)));
  assertEquals(
      'create full negative duration', duration5, interval5.toIsoString());

  var interval6 = new goog.date.Interval(0, 0, -1);
  var duration6 = '-P1D';
  var duration6v = '-P0Y0M1DT0H0M0S';
  assertTrue(
      'parse partial negative duration',
      interval6.equals(goog.date.Interval.fromIsoString(duration6)));
  assertEquals(
      'create partial negative duration', duration6, interval6.toIsoString());
  assertEquals(
      'create partial negative duration, verbose', duration6v,
      interval6.toIsoString(true));

  var interval7 = new goog.date.Interval(0, 0, 9, 0, 0, 4);
  var duration7 = 'P9DT4S';
  var duration7v = 'P0Y0M9DT0H0M4S';
  assertTrue(
      'parse partial one-digit duration',
      interval7.equals(goog.date.Interval.fromIsoString(duration7)));
  assertTrue(
      'parse partial one-digit duration, verbose',
      interval7.equals(goog.date.Interval.fromIsoString(duration7v)));
  assertEquals(
      'create partial one-digit duration', duration7, interval7.toIsoString());
  assertEquals(
      'create partial one-digit duration, verbose', duration7v,
      interval7.toIsoString(true));

  var interval8 = new goog.date.Interval(1, -1, 1, -1, 1, -1);
  assertNull('create mixed sign duration', interval8.toIsoString());

  var duration9 = '1Y1M1DT1H1M1S';
  assertNull('missing P', goog.date.Interval.fromIsoString(duration9));

  var duration10 = 'P1Y1M1D1H1M1S';
  assertNull('missing T', goog.date.Interval.fromIsoString(duration10));

  var duration11 = 'P1Y1M1DT';
  assertNull('extra T', goog.date.Interval.fromIsoString(duration11));

  var duration12 = 'PT.5S';
  assertNull(
      'invalid seconds, missing integer part',
      goog.date.Interval.fromIsoString(duration12));

  var duration13 = 'PT1.S';
  assertNull(
      'invalid seconds, missing fractional part',
      goog.date.Interval.fromIsoString(duration13));
}


function testGetTotalSeconds() {
  var duration = new goog.date.Interval(0, 0, 2, 3, 4, 5);
  assertEquals(
      'seconds in 2d3h4m5s', 2 * 86400 + 3 * 3600 + 4 * 60 + 5,
      duration.getTotalSeconds());
}


function testIsDateLikeWithGoogDateTime() {
  var jsDate = new Date();
  var googDate = new goog.date.DateTime();
  var string = 'foo';
  var number = 1;
  var nullVar = null;
  var notDefined;

  assertTrue('js Date should be date-like', goog.isDateLike(jsDate));
  assertTrue('goog Date should be date-like', goog.isDateLike(googDate));
  assertFalse('string should not be date-like', goog.isDateLike(string));
  assertFalse('number should not be date-like', goog.isDateLike(number));
  assertFalse('nullVar should not be date-like', goog.isDateLike(nullVar));
  assertFalse('undefined should not be date-like', goog.isDateLike(notDefined));
}


function testDateTimezone() {
  var d = new goog.date.DateTime(2006, 1, 1, 12, 0, 0);
  d.add(
      new goog.date.Interval(
          goog.date.Interval.MINUTES, d.getTimezoneOffset()));
  var d2 = new goog.date.DateTime(2006, 1, 1, 12, 0, 0);
  assertEquals(
      'Compensate for timezone and compare with UTC date/time',
      d.toIsoString(true), d2.toUTCIsoString(true));
}


function testToUsTimeString() {
  var doPad = true;
  var doShowPm = true;
  var dontPad = false;
  var dontShowPm = false;

  // 12am
  var d = new goog.date.DateTime(2007, 1, 14);
  assertEquals('12am test 1', '12:00am', d.toUsTimeString());
  assertEquals('12am test 2', '12:00am', d.toUsTimeString(doPad));
  assertEquals('12am test 3', '12:00am', d.toUsTimeString(dontPad));
  assertEquals('12am test 4', '12:00am', d.toUsTimeString(doPad, doShowPm));
  assertEquals('12am test 5', '00:00', d.toUsTimeString(doPad, dontShowPm));
  assertEquals('12am test 6', '12:00am', d.toUsTimeString(dontPad, doShowPm));
  assertEquals('12am test 7', '0:00', d.toUsTimeString(dontPad, dontShowPm));

  // 9am
  d = new goog.date.DateTime(2007, 1, 14, 9);
  assertEquals('9am test 1', '9:00am', d.toUsTimeString());
  assertEquals('9am test 2', '09:00am', d.toUsTimeString(doPad));
  assertEquals('9am test 3', '9:00am', d.toUsTimeString(dontPad));
  assertEquals('9am test 4', '09:00am', d.toUsTimeString(doPad, doShowPm));
  assertEquals('9am test 5', '09:00', d.toUsTimeString(doPad, dontShowPm));
  assertEquals('9am test 6', '9:00am', d.toUsTimeString(dontPad, doShowPm));
  assertEquals('9am test 7', '9:00', d.toUsTimeString(dontPad, dontShowPm));

  // 12pm
  d = new goog.date.DateTime(2007, 1, 14, 12);
  assertEquals('12pm test 1', '12:00pm', d.toUsTimeString());
  assertEquals('12pm test 2', '12:00pm', d.toUsTimeString(doPad));
  assertEquals('12pm test 3', '12:00pm', d.toUsTimeString(dontPad));
  assertEquals('12pm test 4', '12:00pm', d.toUsTimeString(doPad, doShowPm));
  assertEquals('12pm test 5', '12:00', d.toUsTimeString(doPad, dontShowPm));
  assertEquals('12pm test 6', '12:00pm', d.toUsTimeString(dontPad, doShowPm));
  assertEquals('12pm test 7', '12:00', d.toUsTimeString(dontPad, dontShowPm));

  // 6pm
  d = new goog.date.DateTime(2007, 1, 14, 18);
  assertEquals('6pm test 1', '6:00pm', d.toUsTimeString());
  assertEquals('6pm test 2', '06:00pm', d.toUsTimeString(doPad));
  assertEquals('6pm test 3', '6:00pm', d.toUsTimeString(dontPad));
  assertEquals('6pm test 4', '06:00pm', d.toUsTimeString(doPad, doShowPm));
  assertEquals('6pm test 5', '06:00', d.toUsTimeString(doPad, dontShowPm));
  assertEquals('6pm test 6', '6:00pm', d.toUsTimeString(dontPad, doShowPm));
  assertEquals('6pm test 7', '6:00', d.toUsTimeString(dontPad, dontShowPm));

  // 6:01pm
  d = new goog.date.DateTime(2007, 1, 14, 18, 1);
  assertEquals('6:01pm test 1', '6:01pm', d.toUsTimeString());
  assertEquals('6:01pm test 2', '06:01pm', d.toUsTimeString(doPad));
  assertEquals('6:01pm test 3', '6:01pm', d.toUsTimeString(dontPad));
  assertEquals('6:01pm test 4', '06:01pm', d.toUsTimeString(doPad, doShowPm));
  assertEquals('6:01pm test 5', '06:01', d.toUsTimeString(doPad, dontShowPm));
  assertEquals('6:01pm test 6', '6:01pm', d.toUsTimeString(dontPad, doShowPm));
  assertEquals('6:01pm test 7', '6:01', d.toUsTimeString(dontPad, dontShowPm));

  // 6:35pm
  d = new goog.date.DateTime(2007, 1, 14, 18, 35);
  assertEquals('6:35pm test 1', '6:35pm', d.toUsTimeString());
  assertEquals('6:35pm test 2', '06:35pm', d.toUsTimeString(doPad));
  assertEquals('6:35pm test 3', '6:35pm', d.toUsTimeString(dontPad));
  assertEquals('6:35pm test 4', '06:35pm', d.toUsTimeString(doPad, doShowPm));
  assertEquals('6:35pm test 5', '06:35', d.toUsTimeString(doPad, dontShowPm));
  assertEquals('6:35pm test 6', '6:35pm', d.toUsTimeString(dontPad, doShowPm));
  assertEquals('6:35pm test 7', '6:35', d.toUsTimeString(dontPad, dontShowPm));

  // omit zero minutes
  d = new goog.date.DateTime(2007, 1, 14, 18);
  assertEquals(
      'omit zero 1', '6:00pm', d.toUsTimeString(dontPad, doShowPm, false));
  assertEquals('omit zero 2', '6pm', d.toUsTimeString(dontPad, doShowPm, true));

  // but don't omit zero minutes if not actually zero minutes
  d = new goog.date.DateTime(2007, 1, 14, 18, 1);
  assertEquals(
      'omit zero 3', '6:01pm', d.toUsTimeString(dontPad, doShowPm, false));
  assertEquals(
      'omit zero 4', '6:01pm', d.toUsTimeString(dontPad, doShowPm, true));
}


function testToIsoTimeString() {
  // 00:00
  var d = new goog.date.DateTime(2007, 1, 14);
  assertEquals('00:00', '00:00:00', d.toIsoTimeString());

  // 09:00
  d = new goog.date.DateTime(2007, 1, 14, 9);
  assertEquals('09:00', '09:00:00', d.toIsoTimeString());

  // 12:00
  d = new goog.date.DateTime(2007, 1, 14, 12);
  assertEquals('12:00', '12:00:00', d.toIsoTimeString());

  // 18:00
  d = new goog.date.DateTime(2007, 1, 14, 18);
  assertEquals('18:00', '18:00:00', d.toIsoTimeString());

  // 18:01
  d = new goog.date.DateTime(2007, 1, 14, 18, 1);
  assertEquals('18:01', '18:01:00', d.toIsoTimeString());

  // 18:35
  d = new goog.date.DateTime(2007, 1, 14, 18, 35);
  assertEquals('18:35', '18:35:00', d.toIsoTimeString());

  // 18:35:01
  d = new goog.date.DateTime(2007, 1, 14, 18, 35, 1);
  assertEquals('18:35:01', '18:35:01', d.toIsoTimeString());

  // 18:35:11
  d = new goog.date.DateTime(2007, 1, 14, 18, 35, 11);
  assertEquals('18:35:11', '18:35:11', d.toIsoTimeString());

  // 18:35:11 >> 18:35
  d = new goog.date.DateTime(2007, 1, 14, 18, 35, 11);
  assertEquals('18:35:11 no secs', '18:35', d.toIsoTimeString(false));
}


function testToXmlDateTimeString() {
  var d = new goog.date.DateTime(2007, 1, 14);
  assertEquals('2007-02-14', '2007-02-14T00:00:00', d.toXmlDateTime());

  d = new goog.date.DateTime(2007, 1, 14, 18, 35, 1);
  assertEquals(
      '2007-02-14, 8:35:01, timezone==undefined', '2007-02-14T18:35:01',
      d.toXmlDateTime());

  d = new goog.date.DateTime(2007, 1, 14, 18, 35, 1);
  assertEquals(
      '2007-02-14, 8:35:01, timezone==false', '2007-02-14T18:35:01',
      d.toXmlDateTime(false));

  d = new goog.date.DateTime(2007, 1, 14, 18, 35, 1);
  assertEquals(
      '2007-02-14, 8:35:01, timezone==true',
      '2007-02-14T18:35:01' + d.getTimezoneOffsetString(),
      d.toXmlDateTime(true));
}


function testClone() {
  var d = new goog.date.DateTime(2007, 1, 14, 18, 35, 1);
  var d2 = d.clone();
  assertTrue('datetimes equal', d.equals(d2));

  d = new goog.date.DateTime(2007, 1, 14, 18, 35, 1, 310);
  d2 = d.clone();
  assertTrue('datetimes with milliseconds equal', d.equals(d2));

  d = new goog.date.Date(2007, 1, 14);
  d2 = d.clone();
  assertTrue('dates equal', d.equals(d2));

  // 1 year, 6 months, 15 days, 12 hours, 30 minutes, 30 seconds
  var i = new goog.date.Interval(1, 6, 15, 12, 30, 30);
  var i2 = i.clone();
  assertTrue('intervals equal', i.equals(i2));

  i = new goog.date.Interval(goog.date.Interval.DAYS, -1);
  i2 = i.clone();
  assertTrue('day intervals equal', i.equals(i2));

  // Brasilia dst
  d = new goog.date.Date(2008, goog.date.month.OCT, 18);
  d.add(new goog.date.Interval(goog.date.Interval.DAYS, 1));
  d2 = d.clone();
  assertTrue('dates equal', d.equals(d2));
}

function testValueOf() {
  var date1 = new goog.date.DateTime(2008, 11, 26, 15, 40, 0);
  var date2 = new goog.date.Date(2008, 11, 27);
  var date3 = new goog.date.DateTime(2008, 11, 26, 15, 40, 1);
  var nativeDate = new Date();
  nativeDate.setFullYear(2008, 11, 26);
  nativeDate.setHours(15, 40, 0, 0);
  assertEquals(date1.valueOf(), nativeDate.valueOf());
  assertFalse(date1 < date1);
  assertTrue(date1 <= date1);
  assertTrue(date1 < date2);
  assertTrue(date2 > date3);
}

function isWinxpSafari4() {
  return goog.userAgent.product.SAFARI &&
      goog.userAgent.product.isVersion('4') &&
      !goog.userAgent.product.isVersion('5') && goog.userAgent.WINDOWS &&
      goog.userAgent.platform.isVersion('5.0') &&
      !goog.userAgent.platform.isVersion('6.0');
}

function testDateCompare() {
  // May 16th, 2011, 3:17:36.500
  var date1 =
      new goog.date.DateTime(2011, goog.date.month.MAY, 16, 15, 17, 36, 500);

  // May 16th, 2011, 3:17:36.501
  var date2 =
      new goog.date.DateTime(2011, goog.date.month.MAY, 16, 15, 17, 36, 501);

  // May 16th, 2011, 3:17:36.501
  var date3 =
      new goog.date.DateTime(2011, goog.date.month.MAY, 16, 15, 17, 36, 502);

  assertEquals(0, goog.date.Date.compare(date1.clone(), date1.clone()));
  assertEquals(-1, goog.date.Date.compare(date1, date2));
  assertEquals(1, goog.date.Date.compare(date2, date1));

  var dates = [date2, date3, date1];
  goog.array.sort(dates, goog.date.Date.compare);
  assertArrayEquals(
      'Dates should be sorted in time.', [date1, date2, date3], dates);

  // Assert a known millisecond difference between two points in time.
  assertEquals(
      -19129478,
      goog.date.Date.compare(
          new goog.date.DateTime(1982, goog.date.month.MAR, 12, 6, 48, 32, 354),
          new goog.date.DateTime(
              1982, goog.date.month.MAR, 12, 12, 7, 21, 832)));

  // Test dates before the year 0.  Dates are Talk Like a Pirate Day, and
  // Towel Day, 300 B.C. (and before pirates).

  var pirateDay = new goog.date.Date(-300, goog.date.month.SEP, 2);
  var towelDay = new goog.date.Date(-300, goog.date.month.MAY, 12);

  assertEquals(
      'Dates should be 113 days apart.', 113 * 24 * 60 * 60 * 1000,
      goog.date.Date.compare(pirateDay, towelDay));
}

function testDateCompareDateLikes() {
  var nativeDate = new Date(2011, 4, 16, 15, 17, 36, 500);
  var closureDate =
      new goog.date.DateTime(2011, goog.date.month.MAY, 16, 15, 17, 36, 500);

  assertEquals(0, goog.date.Date.compare(nativeDate, closureDate));

  nativeDate.setMilliseconds(499);
  assertEquals(-1, goog.date.Date.compare(nativeDate, closureDate));

  nativeDate.setMilliseconds(501);
  assertEquals(1, goog.date.Date.compare(nativeDate, closureDate));
}

function testIsMidnight() {
  assertTrue(new goog.date.DateTime(2013, 0, 1).isMidnight());
  assertFalse(new goog.date.DateTime(2013, 0, 1, 1).isMidnight());
  assertFalse(new goog.date.DateTime(2013, 0, 1, 0, 1).isMidnight());
  assertFalse(new goog.date.DateTime(2013, 0, 1, 0, 0, 1).isMidnight());
  assertFalse(new goog.date.DateTime(2013, 0, 1, 0, 0, 0, 1).isMidnight());
}

function testMinMax() {
  // Comparison of two goog.date.DateTimes
  var dateTime1 = new goog.date.DateTime(2000, 0, 1);
  var dateTime2 = new goog.date.DateTime(2000, 0, 1, 0, 0, 0, 1);
  assertEquals(dateTime1, goog.date.min(dateTime1, dateTime2));
  assertEquals(dateTime1, goog.date.min(dateTime2, dateTime1));
  assertEquals(dateTime2, goog.date.max(dateTime1, dateTime2));
  assertEquals(dateTime2, goog.date.max(dateTime2, dateTime1));

  // Comparison of two goog.date.Dates
  var date1 = new goog.date.Date(2000, 0, 1);
  var date2 = new goog.date.Date(2000, 0, 2);
  assertEquals(date1, goog.date.min(date1, date2));

  // Comparison of native Dates.
  var jsDate1 = new Date(2000, 0, 1);
  var jsDate2 = new Date(2000, 0, 2);
  assertEquals(jsDate1, goog.date.min(jsDate1, jsDate2));
  assertEquals(jsDate2, goog.date.max(jsDate1, jsDate2));

  // Comparison of different types.
  assertEquals(date1, goog.date.min(date1, dateTime2));
  assertEquals(dateTime2, goog.date.min(date2, dateTime2));
  assertEquals(date1, goog.date.min(date1, jsDate2));
  assertEquals(jsDate2, goog.date.max(dateTime1, jsDate2));
}

function testDateTimeIntervalAdd() {
  // Add hours
  var d = new goog.date.DateTime(2007, goog.date.month.JAN, 1, 10, 20, 30);
  d.add(new goog.date.Interval(goog.date.Interval.HOURS, 10));
  assertEquals(20, d.getHours());

  // Add negative hours
  d.add(new goog.date.Interval(goog.date.Interval.HOURS, -5));
  assertEquals(15, d.getHours());

  // Add hours to the next day
  d.add(new goog.date.Interval(goog.date.Interval.HOURS, 10));
  assertEquals(2, d.getDay());
  assertEquals(1, d.getHours());

  // Add minutes
  d = new goog.date.DateTime(2007, goog.date.month.JAN, 1, 22, 20, 30);
  d.add(new goog.date.Interval(goog.date.Interval.MINUTES, 10));
  assertEquals(30, d.getMinutes());

  // Add negative minutes
  d.add(new goog.date.Interval(goog.date.Interval.MINUTES, -5));
  assertEquals(25, d.getMinutes());

  // Add minutes to the next day
  d.add(new goog.date.Interval(goog.date.Interval.MINUTES, 130));
  assertEquals(2, d.getDay());
  assertEquals(0, d.getHours());
  assertEquals(35, d.getMinutes());

  // Add seconds
  d = new goog.date.DateTime(2007, goog.date.month.JAN, 1, 23, 45, 30);
  d.add(new goog.date.Interval(goog.date.Interval.SECONDS, 10));
  assertEquals(40, d.getSeconds());

  // Add negative seconds
  d.add(new goog.date.Interval(goog.date.Interval.SECONDS, -5));
  assertEquals(35, d.getSeconds());

  // Add seconds to the next day
  d.add(new goog.date.Interval(goog.date.Interval.SECONDS, 1200));
  assertEquals(2, d.getDay());
  assertEquals(0, d.getHours());
  assertEquals(5, d.getMinutes());
  assertEquals(35, d.getSeconds());

  // Test daylight savings day 2015-11-1
  d = new goog.date.DateTime(2015, goog.date.month.NOV, 1, 0, 50, 30);
  d.add(new goog.date.Interval(goog.date.Interval.MINUTES, 15));
  assertEquals(1, d.getHours());
  assertEquals(5, d.getMinutes());

  d.add(new goog.date.Interval(goog.date.Interval.HOURS, 1));
  assertEquals(1, d.getHours());

  // Test daylight savings day 2015-3-8
  d = new goog.date.DateTime(2015, goog.date.month.MAR, 8, 0, 50, 30);
  d.add(new goog.date.Interval(goog.date.Interval.MINUTES, 15));
  assertEquals(1, d.getHours());
  assertEquals(5, d.getMinutes());

  d.add(new goog.date.Interval(goog.date.Interval.HOURS, 1));
  assertEquals(3, d.getHours());
}
