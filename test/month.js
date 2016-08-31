"use strict";

var assert = require('chai').assert;
const {leapYear, leapYearParser, monthHasXDays} = require('../lib/month');

describe('month', function() {
  describe('leapYear', () => {
    it('should return true for known leap year', () => {
      assert.isTrue(leapYear(2012))
    });

    it('should return false for known non-leap year', function() {
      assert.isFalse(leapYear(2011));
    });
  });

  describe('leapYearParser', function() {
    it('should alter the number of days for february of leapYear', () => {
      assert.isTrue(leapYear(2012))
    });

    it('should return false for known non-leap year', function() {
      assert.isFalse(leapYear(2011));
    });
  })
})
