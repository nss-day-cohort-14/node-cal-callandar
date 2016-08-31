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
      assert.equal(29, leapYearParser(28, 2012))
    });

    it('should return false for known non-leap year', function() {
      assert.equal(28, leapYearParser(28, 2011));
    });
  })

  describe('monthHasXDays', function() {
    it('return correct days for Jun 2016', () => {
      assert.equal(30, monthHasXDays(6, 2016))
    });

    it('return correct days for Sept 2016', function() {
      assert.equal(30, monthHasXDays(9, 2016));
    });

    it('return correct days for Feb 2016', function() {
      assert.equal(29, monthHasXDays(2, 2016));
    });

    it('return correct days for Feb 2014', function() {
      assert.equal(28, monthHasXDays(2, 2014));
    });

    it('return correct days for Feb 2015', function() {
      assert.equal(28, monthHasXDays(2, 2015));
    });

    it('return correct days for Jan 2016', function() {
      assert.equal(31, monthHasXDays(1, 2016));
    });

    it('return correct days for Nov 2014', function() {
      assert.equal(30, monthHasXDays(11, 2014));
    });

    it('return correct days for Feb 1900', function() {
      assert.equal(28, monthHasXDays(2, 1900));
    });

    it('return correct days for Feb 2000', function() {
      assert.equal(29, monthHasXDays(2, 2000));
    });
  })
})
