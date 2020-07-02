export function setAttributes(
  element: HTMLElement,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  attributes: Record<string, any>
): void {
  for (const key in attributes) {
    if (attributes.hasOwnProperty(key)) {
      const value = attributes[key];

      if (value == null) {
        element.removeAttribute(key);
      } else {
        element.setAttribute(key, value);
      }
    }
  }
}
