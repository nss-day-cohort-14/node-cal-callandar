"use strict";

var assert = require('chai').assert;
const {getDayOfWeek, modifiedMonth, modifiedYear} = require('../lib/zellers');

describe('getDayOfWeek', function() {
  describe('getDay', () => {
    it.skip('description', done => {
      getDay(2016, 8, 1) === 1
    });
  });

  describe('getDayOfWeek func', function() {
    it('should be a function', function() {
      assert.isFunction(getDayOfWeek);
    });



    it('should return a valid day number for each month', function() {
      for (let i = 0; i < 11; i++) {
        assert.oneOf(getDayOfWeek(i, 15, 2016), [0, 1, 2, 3, 4, 5, 6])
      }
    });

    it('should return a valid day number for each day of the month', function() {
      for (let i = 0; i < 31; i++) {
        assert.oneOf(getDayOfWeek(1, i, 2016), [0, 1, 2, 3, 4, 5, 6])
      }
    });

    it('should return a valid day number for 100 years', function() {
      for (let i = 0; i < 100; i++) {
        assert.oneOf(getDayOfWeek(1, 15, (1916 + i)), [0, 1, 2, 3, 4, 5, 6])
      }
    });

    it('should return a valid day of the week for every day for 100 years', done => {
      for (let y = 0; y < 100; y++) {
        for (let d = 0; d < 31; d++) {
          for (let m = 0; m < 11; m++) {
            assert.oneOf(getDayOfWeek(m, d, (1916 + y)), [0, 1, 2, 3, 4, 5, 6])
          }
        }
      }
      done()
    });
  })

  describe('modifiedMonth', () => {
    it('modifiedMonth is a function', done => {
      assert.isFunction(modifiedMonth)
      done()
    });

    it('should handle jan', done => {
      assert.strictEqual(modifiedMonth(1), 13)
      done()
    });

    it('should handle feb', done => {
      assert.strictEqual(modifiedMonth(2), 14)
      done()
    });

    it('should handle other months', done => {
      assert.strictEqual(modifiedMonth(3), 3)
      done()
    });
  });

  describe('modifiedYear', () => {
    it('modifiedMonth is a function', done => {
      assert.isFunction(modifiedMonth)
      done()
    });

    it('should handle jan', done => {
      assert.strictEqual(modifiedYear(2000, 1), 1999)
      done()
    });

    it('should handle feb', done => {
      assert.strictEqual(modifiedYear(2000, 2), 1999)
      done()
    });

    it('should handle other months', done => {
      assert.strictEqual(modifiedYear(2000, 3), 2000)
      done()
    });
  });
});
