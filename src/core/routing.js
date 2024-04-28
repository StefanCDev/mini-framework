// mini-framework/src/core/router.js

class Router {
    constructor() {
      this.routes = {};
      window.addEventListener('popstate', this.handleRouteChange.bind(this));
    }
  
    addRoute(path, handler) {
      this.routes[path] = handler;
    }
  
    navigate(path) {
      history.pushState({}, '', path);
      this.handleRouteChange();
    }
  
    handleRouteChange() {
      const path = window.location.pathname;
      const handler = this.routes[path];
      if (handler) {
        handler();
      }
    }
  }
  
  export default Router;
  