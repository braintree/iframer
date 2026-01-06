import { setAttributes } from "../lib/set-attributes";

describe("setAttributes", () => {
  let el: HTMLElement;

  beforeEach(() => {
    el = document.createElement("div");
    jest.spyOn(el, "removeAttribute");
    jest.spyOn(el, "setAttribute");
  });

  it("can accept an empty object", () => {
    setAttributes(el, {});
    expect(el.setAttribute).not.toHaveBeenCalled();
  });

  it("can accept an object with one property", () => {
    setAttributes(el, { foo: "123" });
    expect(el.setAttribute).toHaveBeenCalledTimes(1);
    expect(el.setAttribute).toHaveBeenCalledWith("foo", "123");
  });

  it("can accept an object with many properties", () => {
    setAttributes(el, {
      foo: "123",
      bar: "456",
    });
    expect(el.setAttribute).toHaveBeenCalledTimes(2);
    expect(el.setAttribute).toHaveBeenCalledWith("foo", "123");
    expect(el.setAttribute).toHaveBeenCalledWith("bar", "456");
  });

  it("ignores attributes that are undefined", () => {
    setAttributes(el, {
      foo: "123",
      bar: undefined, // eslint-disable-line no-undefined
    });
    expect(el.setAttribute).toHaveBeenCalledTimes(1);
    expect(el.setAttribute).toHaveBeenCalledWith("foo", "123");
  });

  it("ignores attributes that are null", () => {
    setAttributes(el, {
      foo: "123",
      bar: null,
    });
    expect(el.setAttribute).toHaveBeenCalledTimes(1);
    expect(el.setAttribute).toHaveBeenCalledWith("foo", "123");
  });

  it("deletes attributes that are undefined", () => {
    setAttributes(el, {
      foo: "123",
      bar: "456",
    });
    jest.mocked(el.setAttribute).mockClear();
    jest.mocked(el.removeAttribute).mockClear();

    setAttributes(el, { bar: undefined }); // eslint-disable-line no-undefined

    expect(el.getAttribute("foo")).toEqual("123");
    expect(el.removeAttribute).toHaveBeenCalledTimes(1);
    expect(el.removeAttribute).toHaveBeenCalledWith("bar");
  });

  it("deletes attributes that are null", () => {
    setAttributes(el, {
      foo: "123",
      bar: "456",
    });

    setAttributes(el, { bar: null });

    expect(el.getAttribute("foo")).toEqual("123");
    expect(el.removeAttribute).toHaveBeenCalledTimes(1);
    expect(el.removeAttribute).toHaveBeenCalledWith("bar");
  });
});
