export default function assign(target, ...objs): Record<string, any> {
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
