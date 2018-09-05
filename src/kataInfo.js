// kata's to be tested and submitted

// SIMPLE EVENT --> SOLVED

/*
  Your goal is to write an Event constructor function, which can be used to make event objects.  

  An event object should work like this:

  it has a .subscribe() method, which takes a function and stores it as its handler
  it has an .unsubscribe() method, which takes a function and removes it from its handlers
  it has an .emit() method, which takes an arbitrary number of arguments and calls all the stored functions with these arguments
  As this is an elementary example of events, there are some simplifications:

  all functions are called with correct arguments (e.g. only functions will be passed to unsubscribe)
  you should not worry about the order of handlers' execution
  the handlers will not attempt to modify an event object (e.g. add or remove handlers)
  the context of handlers' execution is not important
  each handler will be subscribed at most once at any given moment of time. It can still be unsubscribed and then subscribed again
  Also see an example test fixture for suggested usage

// Es5 solution 
function Event() {
  this.handlers = [];

  this.subscribe = (fn) => {
    if(!~this.handlers.indexOf(fn)) {
      if(typeof fn === "function") this.handlers.push(fn)
      else throw(`Error: cannot susbscribe ${fn}: not a function`);
    }
    return this;
  }

  this.unsubscribe = (fn) => {
    if(this.handlers.includes(fn)) {
      let fnIndex = this.handlers.indexOf(fn);
      unsubscribedFn = this.handlers.splice(fnIndex, 1);
      return this;
    }
    throw(`Error: ${fn} has not been subscribed`);
  }

  this.emit = (...args) => {
    if(this.handlers.length > 0) {
      this.handlers.forEach(handler => handler(...args));
      return this;
    }
  }
}

// Es6 solution 
class Event() {
  constructor() {
    this.subscribers = new Set();
  }
}

  subscribe(fn) {
    this.subscribers.add(fn);
  }

  unsubscribe(fn) {
    this.subscribers.delete(fn);
  }

  emit(...args) {
    this.subscribers.forEach(s => s(...args));
  }
}

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
    event.subscribe(add)
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
      .emit('2', 'foo', true)
  );

*/


// ============================================================================================

// ADVANCED EVENTS --> SOLVED 

/*

  This excercise is a more sophisticated version of Simple Events kata.

  Your task is to implement an Event constructor function for creating event objects

  var event = new Event();
  which comply to the following:

  an event object should have .subscribe() and .unsubscribe() methods to add and remove handlers

  .subscribe() and .unsubscribe() should be able take an arbitrary number of arguments and tolerate invalid arguments (not functions, or for unsubscribe, functions which are not subscribed) by simply skipping them

  multiple subscription of the same handler is allowed, and in this case unsubscription removes the last subscription of the same handler

  an event object should have an .emit() method which must invoke all the handlers with the arguments provided

  .emit() should use its own invocation context as handlers' invocation context

  the order of handlers invocation must match the order of subscription

  handler functions can subscribe and unsubscribe handlers, but the changes should only apply to the next emit call - the handlers for an ongoing emit call should not be affected

  subscribe, unsubscribe and emit are the only public properties that are allowed on event objects (apart from Object.prototype methods)
  Check the test fixture for usage example

*/

// Es6 implementation 
class Event {
  constructor() {
    this.handlers = [];

  }

  subscribe(...fns) {
    console.log(this);
    for(let i = 0; i < arguments.length; i++) {
      if(typeof arguments[i] === 'function') {
        this.handlers.push(arguments[i]);
      }
    }
    return this;
  }

  unsubscribe(...fns) {
    console.log(arguments);
    for(let i = 0; i < arguments.length; i++) {
      let fnIndex = this.handlers.lastIndexOf(arguments[i]);
      if(fnIndex) this.handlers.splice(fnIndex, 1);
    }
    return this;
  }

  emit(...args) {
    console.log(args);
    for(let i = 0; i < this.handlers.length; i++) {
      this.handlers[i].call(this, args);
    }
    return this;
  }

}

// es5 implementation 
// function Event() {
//   this.handlers = [];
// }

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
  event.subscribe(actOnce)
    .subscribe(add)
    .subscribe(mult)
    .subscribe(actOnce)
    .emit(1, 2, 3, 4)
    .unsubscribe(actOnce)
); 
// test passed