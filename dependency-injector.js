/**
 * Constructor DependencyInjector
 * @param {Object} - object with dependencies
 */
var DI = function (dependency) {
  this.dependency = dependency;
};

// Should return new function with resolved dependencies
DI.prototype.inject = function (func) {
  console.log(func.toString());
  let match = func.toString().match(/function\s?\((.+?)\)\s{/);
  console.log("match", match);

  let funcs =
    match &&
    match[1]
      .split(",")
      .map((key) => this.dependency[key.trim()])
      .filter(Boolean);

  return function () {
    return func.apply(func, funcs);
  };
};

var deps = {
  dep1: function () {
    return "this is dep1";
  },
  dep2: function () {
    return "this is dep2";
  },
  dep3: function () {
    return "this is dep3";
  },
  dep4: function () {
    return "this is dep4";
  },
};

var di = new DI(deps);

var myFunc = di.inject(function (dep3, dep1, dep2, dep5) {
  return [dep2(), dep1(), dep3()].join(" -> ");
});

console.log(myFunc());
// Test.assertEquals(myFunc(), "this is dep1 -> this is dep2 -> this is dep3");
