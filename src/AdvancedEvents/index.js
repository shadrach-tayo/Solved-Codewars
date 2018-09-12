
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