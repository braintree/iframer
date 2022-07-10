export function assign(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  target: Record<string, any>,
  ...objs: Record<string, unknown>[]
): // eslint-disable-next-line @typescript-eslint/no-explicit-any
Record<string, any> {
  objs.forEach(function (obj) {
    if (typeof obj !== "object") {
      return;
    }

    Object.keys(obj).forEach(function (key) {
      target[key] = obj[key];
    });
  });

  return target;
}
