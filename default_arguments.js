function add(a, b) {
  return a + b;
}

/*
function defaultArguments(func, params) {
  let defaultArgs = [],
    currentArgNames = [];
  console.log(
    "--------------------------------------_____________----------------------"
  );
  //   console.log(func.toString());
  currentArgNames = func
    .toString()
    .replace(/\s+/g, "")
    .replace(/[/][/].*$/gm, "")
    .replace(/[/][*][^/*]*[*][/]/g, "")
    .split("(")[1]
    .split(")")[0]
    .split(",");

  if (!this.argNames || currentArgNames[0] != "") {
    this.argNames = currentArgNames;
  }
  console.log(this.argNames);

  for (let i = 0; i < this.argNames.length; i++) {
    if (params[this.argNames[i]]) defaultArgs[i] = params[this.argNames[i]];
  }

  console.log(
    "--------------------------------------_____________----------------------"
  );

  return function () {
    let args = Array.from(arguments);
    currentArgs = defaultArgs.slice();

    for (let i = 0; i < args.length; i++) {
      let newArg = args[i];
      currentArgs[i] = newArg;
    }
    console.log("args.. ", currentArgs);
    return func.apply(null, currentArgs);
  };
}
*/

function defaultArguments(func, params) {
  var names =
    func.names ||
    func
      .toString()
      .replace(/\/\/.*$|\/\*.*?\*\/|\s/gm, "")
      .match(/(?:[\w]+(?:,[\w]+)*)?(?=\))/m)[0]
      .split(",");

  var detour = function () {
    var input = arguments;
    return func.apply(
      this,
      names.map(function (val, i) {
        return i < input.length ? input[i] : params[names[i]];
      })
    );
  };

  detour.names = names;
  return detour;
}

var add_ = defaultArguments(add, { b: 9 });

// console.log(add_.toString());
console.log(add_(10)); // returns 19
console.log(add_(10, 7)); // returns 17
console.log(add_()); // returns NaN

add_ = defaultArguments(add_, { b: 3, a: 2 });
// console.log("add: ", add_);
console.log(add_(10)); // returns 13 now
console.log(add_()); // returns 5

add_ = defaultArguments(add_, { c: 3 }); // doesn't do anything, since c isn't an argument
console.log(add_(10)); // returns NaN
console.log(add_(10, 10)); // returns 20
