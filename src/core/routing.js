// mini-framework/src/core/router.js
import TodoList from '../components/todo_list';

router.addRoute('/todos', () => {
  const todoList = new TodoList(document.getElementById('todo-list'));
  todoList.render(todos); // todos is an array of todo items
});
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
    const url = new URL(window.location.href);
    const path = url.pathname;
    const handler = this.routes[path];
    if (handler) {
      handler();
    } else {
      console.error(`Route not found: ${path}`);
    }
  }
}

export default Router;