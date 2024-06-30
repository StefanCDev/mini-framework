
// state_management.js

class StateManagement {
  constructor() {
    this.state = {
      todos: [],
    };
  }

  getState() {
    return this.state;
  }

  setState(newState) {
    this.state = newState;
  }

  addTodo(title) {
    const newTodo = { title, completed: false };
    const todos = this.getState().todos;
    todos.push(newTodo);
    this.setState({ todos });
  }
}