// mini-framework/examples/todoMVC/app.js

import { Element, DataBinding, Router, StateManagement, EventHandling } from '../../src/index.js';

// Initialize router
const router = new Router();

// Initialize data binding
const dataBinding = new DataBinding();

// Initialize state management
const stateManagement = new StateManagement();

// Initialize event handling
const eventHandling = new EventHandling();

// Define todo item component
class TodoItem {
  constructor(text, completed) {
    this.text = text;
    this.completed = completed;
  }

  toggleCompleted() {
    this.completed = !this.completed;
    stateManagement.setState({ todos: dataBinding.getData('todos') });
  }

  render() {
    const todoItem = new Element('li', { class: 'todo-item' }, [
      new Element('input', { type: 'checkbox', checked: this.completed }, []),
      new Element('span', {}, [this.text]),
    ]);

    eventHandling.addEventListener('click', () => this.toggleCompleted());

    return todoItem.render();
  }
}

// Initialize todo list
function initializeTodoList() {
  dataBinding.setData('todos', [
    new TodoItem('Learn JavaScript', false),
    new TodoItem('Build Mini Framework', false),
    new TodoItem('Implement TodoMVC', false),
  ]);
}

// Render todo list
function renderTodoList() {
  const todos = dataBinding.getData('todos');
  const todoList = new Element('ul', { class: 'todo-list' }, todos.map(todo => todo.render()));
  document.getElementById('app').innerHTML = '';
  document.getElementById('app').appendChild(todoList.render());
}

// Add event listener for routing
router.addRoute('/', () => renderTodoList());

// Initialize todo list and render on startup
initializeTodoList();
router.navigate('/');
