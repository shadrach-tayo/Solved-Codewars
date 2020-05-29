const add = (x, y, z) => x + y + z;

function curryPartial(...fns) {
  let fn;
  if (typeof fns[0] === "function") fn = fns.shift();
  console.log("fn", fn, " args ", fns);

  if (fns.length >= 3) return fn(...fns.slice(0, 3));

  return curryPartial.apply(this, [fn]);
  return function (...args) {
    return curryPartial(fn.bind(fn, ...fns), ...args);
  };
}

// console.log(curryPartial(add)(1)(2)()(3));
// console.log(curryPartial(add)()(1)()()(2)(3, 4, 5, 6));
console.log(curryPartial(curryPartial(curryPartial(add, 1)), 2, 3));
