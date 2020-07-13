import { setAttributes } from "../lib/set-attributes";
import { mocked } from "ts-jest/utils";

describe("setAttributes", () => {
  let el: HTMLElement;

  beforeEach(() => {
    el = document.createElement("div");
    jest.spyOn(el, "removeAttribute");
    jest.spyOn(el, "setAttribute");
  });

  it("can accept an empty object", () => {
    setAttributes(el, {});
    expect(el.setAttribute).not.toBeCalled();
  });

  it("can accept an object with one property", () => {
    setAttributes(el, { foo: "123" });
    expect(el.setAttribute).toBeCalledTimes(1);
    expect(el.setAttribute).toBeCalledWith("foo", "123");
  });

  it("can accept an object with many properties", () => {
    setAttributes(el, {
      foo: "123",
      bar: "456",
    });
    expect(el.setAttribute).toBeCalledTimes(2);
    expect(el.setAttribute).toBeCalledWith("foo", "123");
    expect(el.setAttribute).toBeCalledWith("bar", "456");
  });

  it("ignores attributes that are undefined", () => {
    setAttributes(el, {
      foo: "123",
      bar: undefined, // eslint-disable-line no-undefined
    });
    expect(el.setAttribute).toBeCalledTimes(1);
    expect(el.setAttribute).toBeCalledWith("foo", "123");
  });

  it("ignores attributes that are null", () => {
    setAttributes(el, {
      foo: "123",
      bar: null,
    });
    expect(el.setAttribute).toBeCalledTimes(1);
    expect(el.setAttribute).toBeCalledWith("foo", "123");
  });

  it("deletes attributes that are undefined", () => {
    setAttributes(el, {
      foo: "123",
      bar: "456",
    });
    mocked(el.setAttribute).mockClear();
    mocked(el.removeAttribute).mockClear();

    setAttributes(el, { bar: undefined }); // eslint-disable-line no-undefined

    expect(el.getAttribute("foo")).toEqual("123");
    expect(el.removeAttribute).toBeCalledTimes(1);
    expect(el.removeAttribute).toBeCalledWith("bar");
  });

  it("deletes attributes that are null", () => {
    setAttributes(el, {
      foo: "123",
      bar: "456",
    });

    setAttributes(el, { bar: null });

    expect(el.getAttribute("foo")).toEqual("123");
    expect(el.removeAttribute).toBeCalledTimes(1);
    expect(el.removeAttribute).toBeCalledWith("bar");
  });
});
