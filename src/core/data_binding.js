/* The `DataBinding` class in JavaScript allows for data binding and notification of listeners when
data is updated. */


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
    if (typeof listener !== 'function') {
      throw new Error('Listener must be a function');
    }
    if (!this.listeners.has(key)) {
      this.listeners.set(key, []);
    }
    this.listeners.get(key).push(listener);
  }

  removeListener(key, listener) {
    if (this.listeners.has(key)) {
      const listeners = this.listeners.get(key);
      const index = listeners.indexOf(listener);
      if (index !== -1) {
        listeners.splice(index, 1);
      }
    }
  }

  notifyListeners(key) {
    const listeners = this.listeners.get(key);
    if (listeners) {
      listeners.forEach((listener) => listener(this.data[key]));
    }
  }
}

export default DataBinding;