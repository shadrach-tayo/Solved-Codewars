function sum(x, y) {
  return x + y;
}

function double(x) {
  return sum(x, x);
}

function minus(x, y) {
  return x - y;
}

function addOne(x) {
  return sum(x, 1);
}

function composeChain(fns) {
  for (const func in fns) {
    this[func] = (...args) => {
      let inputs = args;
      if (this.result) {
        inputs = [this.result, ...args];
      }

      let clonedFn = new composeChain(fns);
      clonedFn.result = fns[func](...inputs);
      return clonedFn;
    };
  }
}

composeChain.prototype.execute = function () {
  return this.result;
};

function chain(fns) {
  return new composeChain(fns);
}

var c = chain({ sum: sum, minus: minus, double: double, addOne: addOne });

console.log(
  c.sum(4, 5).sum(5).minus(4).sum(7).addOne().double().double().execute()
); // 72

console.log("c ", c);
var c1 = c.sum(1, 2);
console.log(c1);
var c2 = c.minus(1, 2);
console.log(c2);
console.log(c1.execute()); // == fns.sum(1, 2) == 3
console.log(c2.execute()); // == fns.minus(1, 2) == 3
// console.log(c1);
console.log("double", c1.double().execute()); // == fns.double(fns.sum(1, 2)) == 6
// console.log(c1);
console.log("addOne ", c1.addOne().execute()); // == fns.addOne(fns.sum(1, 2)) == 4
// console.log(c1);

/*

c1.execute(); // == fns.sum(1, 2) == 3

var c2 = c1.sum(5);
c2.addOne().execute(); // == fns.addOne(fns.sum(fns.sum(1, 2) 5)) == 9
c2.sum(3).execute(); // == fns.sum(c1.sum(fns.sum(1, 2), 5), 3) == 11
c2.execute(); // == fns.sum(fns.sum(1, 2), 5) == 8

c1.execute(); // == fns.sum(1, 2) == 3

*/
