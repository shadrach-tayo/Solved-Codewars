// Es5 solution
function Event() {
  this.handlers = [];

  this.subscribe = fn => {
    if (!~this.handlers.indexOf(fn)) {
      if (typeof fn === "function") this.handlers.push(fn);
      else throw `Error: cannot susbscribe ${fn}: not a function`;
    }
    return this;
  };

  this.unsubscribe = fn => {
    if (this.handlers.includes(fn)) {
      let fnIndex = this.handlers.indexOf(fn);
      unsubscribedFn = this.handlers.splice(fnIndex, 1);
      return this;
    }
    throw `Error: ${fn} has not been subscribed`;
  };

  this.emit = (...args) => {
    if (this.handlers.length > 0) {
      this.handlers.forEach(handler => handler(...args));
      return this;
    }
  };
}

// Es6 solution
class Event {
  constructor() {
    this.subscribers = new Set();
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
