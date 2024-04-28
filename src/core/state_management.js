// mini-framework/src/core/state_management.js

class StateManagement {
    constructor() {
      this.state = {};
    }
  
    setState(newState) {
      this.state = { ...this.state, ...newState };
    }
  
    getState() {
      return this.state;
    }
  }
  
  export default StateManagement;
  