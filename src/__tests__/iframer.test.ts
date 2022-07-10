import iframer = require("../index");

describe("iframer", () => {
  it("returns an iframe element", () => {
    const result = iframer();

    expect(result).toBeInstanceOf(HTMLIFrameElement);
  });

  it("applies default attribtutes", () => {
    const result = iframer();

    expect(result.getAttribute("src")).toBe("about:blank");
    expect(result.getAttribute("frameborder")).toBe("0");
    expect(result.getAttribute("allowtransparency")).toBe("true");
    expect(result.getAttribute("scrolling")).toBe("no");
  });

  it("sets attributes", () => {
    const result = iframer({
      frameborder: "10",
      width: "40%",
    });

    expect(result.getAttribute("frameborder")).toBe("10");
    expect(result.getAttribute("width")).toBe("40%");
  });

  describe("id", () => {
    it("defaults to empty", () => {
      const result = iframer();

      expect(result.id).toBe("");
    });

    it("is set to match name", () => {
      const result = iframer({ name: "foo" });

      expect(result.id).toBe("foo");
    });

    it("will use passed in id over name", () => {
      const result = iframer({ name: "foo", id: "bar" });

      expect(result.id).toBe("bar");
    });
  });

  describe("style", () => {
    it("applies styles as a string", () => {
      const result = iframer({
        style: "background: tomato; transition: color 100ms;",
      });

      expect(result.getAttribute("style")).toBe(
        "background: tomato; transition: color 100ms;"
      );
    });

    it("applies styles as an object", () => {
      const result = iframer({
        style: {
          backgroundColor: "rgb(123, 0, 123)",
          width: "3em",
        },
      });

      expect(result.style.backgroundColor).toBe("rgb(123, 0, 123)");
      expect(result.style.width).toBe("3em");
    });
  });
});
