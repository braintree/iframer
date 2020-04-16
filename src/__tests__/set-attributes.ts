import setAttributes from "../lib/set-attributes";

describe("setAttributes", () => {
  let testContext;

  beforeEach(() => {
    testContext = {};
    testContext.el = {
      attributes: {},
      setAttribute(key, value): void {
        this.attributes[key] = value;
      },
      removeAttribute(key): void {
        delete this.attributes[key];
      },
    };
  });

  it("can accept an empty object", () => {
    setAttributes(testContext.el, {});
    expect(testContext.el.attributes).toEqual({});
  });

  it("can accept an object with one property", () => {
    setAttributes(testContext.el, { foo: 123 });
    expect(testContext.el.attributes).toEqual({ foo: 123 });
  });

  it("can accept an object with many properties", () => {
    setAttributes(testContext.el, {
      foo: 123,
      bar: 456,
    });
    expect(testContext.el.attributes).toEqual({
      foo: 123,
      bar: 456,
    });
  });

  it("ignores attributes that are undefined", () => {
    setAttributes(testContext.el, {
      foo: 123,
      bar: undefined, // eslint-disable-line no-undefined
    });
    expect(testContext.el.attributes).toEqual({ foo: 123 });
  });

  it("ignores attributes that are null", () => {
    setAttributes(testContext.el, {
      foo: 123,
      bar: null,
    });
    expect(testContext.el.attributes).toEqual({ foo: 123 });
  });

  it("deletes attributes that are undefined", () => {
    setAttributes(testContext.el, {
      foo: 123,
      bar: 456,
    });
    setAttributes(testContext.el, { bar: undefined }); // eslint-disable-line no-undefined
    expect(testContext.el.attributes).toEqual({ foo: 123 });
  });

  it("deletes attributes that are null", () => {
    setAttributes(testContext.el, {
      foo: 123,
      bar: 456,
    });
    setAttributes(testContext.el, { bar: null });
    expect(testContext.el.attributes).toEqual({ foo: 123 });
  });
});
