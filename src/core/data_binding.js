// mini-framework/src/core/data_binding.js

class DataBinding {
    constructor() {
      this.data = {};
      this.listeners = new Map();
    }
  
    setData(key, value) {
      this.data[key] = value;
      this.notifyListeners(key);
    }
  
    getData(key) {
      return this.data[key];
    }
  
    addListener(key, listener) {
      if (!this.listeners.has(key)) {
        this.listeners.set(key, []);
      }
      this.listeners.get(key).push(listener);
    }
  
    notifyListeners(key) {
      const listeners = this.listeners.get(key);
      if (listeners) {
        listeners.forEach(listener => listener(this.data[key]));
      }
    }
  }
  
  export default DataBinding;
  