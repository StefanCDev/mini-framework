// core/components/todo_list.js

import { DataBinding } from '../data_binding';

class TodoList {
  constructor(container) {
    this.container = container;
    this.dataBinding = new DataBinding();
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
  
  editTodo(index) {
    // Todo: implement edit todo logic here
    // Call the editTodo function from StateManagement
    // and render the updated todo list
  }
  
  deleteTodo(index) {
    deleteTodo(index); // Call the deleteTodo function from StateManagement
    this.render(); // Render the updated todo list
  }
}

export default TodoList;