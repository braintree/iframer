const setAttributes = require('../lib/set-attributes');
const assert = require('assert');

describe('setAttributes', () => {
  let testContext;

  beforeEach(() => {
    testContext = {};
    testContext.el = {
      attributes: {},
      setAttribute: function (key, value) {
        this.attributes[key] = value;
      },
      removeAttribute: function (key) {
        delete this.attributes[key];
      }
    };
  });

  it('can accept an empty object', () => {
    setAttributes(testContext.el, {});
    assert.deepEqual(testContext.el.attributes, {});
  });

  it('can accept an object with one property', () => {
    setAttributes(testContext.el, {foo: 123});
    assert.deepEqual(testContext.el.attributes, {foo: 123});
  });

  it('can accept an object with many properties', () => {
    setAttributes(testContext.el, {
      foo: 123,
      bar: 456
    });
    assert.deepEqual(testContext.el.attributes, {
      foo: 123,
      bar: 456
    });
  });

  it('ignores attributes that are undefined', () => {
    setAttributes(testContext.el, {
      foo: 123,
      bar: undefined
    });
    assert.deepEqual(testContext.el.attributes, {foo: 123});
  });

  it('ignores attributes that are null', () => {
    setAttributes(testContext.el, {
      foo: 123,
      bar: null
    });
    assert.deepEqual(testContext.el.attributes, {foo: 123});
  });

  it('deletes attributes that are undefined', () => {
    setAttributes(testContext.el, {
      foo: 123,
      bar: 456
    });
    setAttributes(testContext.el, {bar: undefined});
    assert.deepEqual(testContext.el.attributes, {foo: 123});
  });

  it('deletes attributes that are null', () => {
    setAttributes(testContext.el, {
      foo: 123,
      bar: 456
    });
    setAttributes(testContext.el, {bar: null});
    assert.deepEqual(testContext.el.attributes, {foo: 123});
  });
});
