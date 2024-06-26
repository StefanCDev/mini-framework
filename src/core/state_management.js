import { Templating } from '../core/templating';
import { addTodo, deleteTodo, editTodo, getTodos } from '../core/state_management';

class TodoList {
  constructor(container) {
    this.container = container;
    this.templating = new Templating();
  }

  render() {
    const template = '<ul>{{#todos}}<li>{{title}}</li>{{/todos}}</ul>';
    const data = { todos: getTodos() }; // Get the todo list from StateManagement
    const html = this.templating.render(template, data);
    this.container.innerHTML = html;
  }

  addTodo(title) {
    addTodo(title); // Call the addTodo function from StateManagement
    this.render(); // Render the updated todo list
  }

  editTodo(index, title) {
    const title = prompt('Enter new title:'); // Get the new title from the user
    editTodo(index, title); // Call the editTodo function from StateManagement
    this.render(); // Render the updated todo list
  }

  deleteTodo(index) {
    deleteTodo(index); // Call the deleteTodo function from StateManagement
    this.render(); // Render the updated todo list
  }
}