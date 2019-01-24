var event = new Event();

function add(args) {
  console.log(args.reduce((init, arg) => init + arg, 0));
}

function mult(args) {
  console.log(args.reduce((init, arg) => init * arg, 1));
}

function f() {
  f.calls = (f.calls || 0) + 1;
  f.args = Array.prototype.slice.call(arguments);
  console.log(f.calls);
  console.log(f.args);
}

console.log(
  event
    .subscribe(add)
    .subscribe(mult)
    .emit(1, 3, 5, 6)
    .emit(1, 2)
    .unsubscribe(add)
    .emit(1, 3, 5, 6)
    .emit(1, 2)
    .subscribe(add)
    .emit(1, 3, 5, 6)
    .emit(1, 2)
    .unsubscribe(add)
    .unsubscribe(mult)
    .subscribe(f)
    .emit("2", "foo", true)
);

// ============================================================================================

var event = new Event();

function actOnce(args) {
  console.log(this);
  console.log(args);
  this.unsubscribe(actOnce);
}

function add(args) {
  console.log(this);
  console.log(args);
  console.log(args.reduce((init, arg) => init + arg, 0));
}

function mult(args) {
  console.log(args.reduce((init, arg) => init * arg, 1));
}

console.log(
  event
    .subscribe(actOnce)
    .subscribe(add)
    .subscribe(mult)
    .subscribe(actOnce)
    .emit(1, 2, 3, 4)
    .unsubscribe(actOnce)
);
// test passed
