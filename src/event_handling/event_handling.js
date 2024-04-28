// mini-framework/src/event_handling/event_handling.js

class EventHandling {
    constructor() {
      this.events = {};
    }
  
    addEventListener(event, handler) {
      if (!this.events[event]) {
        this.events[event] = [];
      }
      this.events[event].push(handler);
    }
  
    triggerEvent(event, data) {
      const handlers = this.events[event];
      if (handlers) {
        handlers.forEach(handler => handler(data));
      }
    }
  }
  
  export default EventHandling;
  