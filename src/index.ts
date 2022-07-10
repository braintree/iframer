import { setAttributes } from "./lib/set-attributes";
import { defaultAttributes } from "./lib/default-attributes";
import { assign } from "./lib/assign";

export = function createFrame(
  options: Record<string, unknown> = {}
): HTMLIFrameElement {
  const iframe = document.createElement("iframe");
  const config = assign({}, defaultAttributes, options);

  if (config.style && typeof config.style !== "string") {
    assign(iframe.style, config.style);
    delete config.style;
  }

  setAttributes(iframe, config);

  if (!iframe.getAttribute("id")) {
    iframe.id = iframe.name;
  }

  return iframe;
};
