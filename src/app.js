// app.js
import { DataBinding, Router, StateManagement, Templating, TodoList } from './core/index';

// Initialize the application
const app = {
    dataBinding: new DataBinding(),
    router: new Router(),
    stateManagement: new StateManagement(),
    templating: new Templating(),
    todoList: new TodoList(document.getElementById('todo-list')),
  };

// Define the application routes
app.router.addRoute('', () => {
    const template = '<ul>{{#todos}}<li>{{title}} ({{completed}})</li>{{/todos}}</ul>';
    const data = app.stateManagement.getState().todos;
    const html = app.templating.render(template, { todos: data });
    app.dataBinding.bind(html, data);
  
    // Add event listener for submitting the form
    const form = document.getElementById('todo-form');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const todoInput = document.getElementById('todo-input');
      const todoTitle = todoInput.value.trim();
      if (todoTitle) {
        app.stateManagement.addTodo(todoTitle);
        todoInput.value = '';
      }
    });
  });

app.router.addRoute('active', () => {
  const template = '<ul>{{#todos}}{{#isActive}}<li>{{title}} ({{completed}})</li>{{/isActive}}{{/todos}}</ul>';
  const data = app.stateManagement.getState().todos.filter(todo => !todo.completed);
  const html = app.templating.render(template, { todos: data });
  app.dataBinding.bind(html, data);
});

app.router.addRoute('completed', () => {
  const template = '<ul>{{#todos}}{{#isCompleted}}<li>{{title}} ({{completed}})</li>{{/isCompleted}}{{/todos}}</ul>';
  const data = app.stateManagement.getState().todos.filter(todo => todo.completed);
  const html = app.templating.render(template, { todos: data });
  app.dataBinding.bind(html, data);
});

// Initialize the application state
app.stateManagement.setState({
  todos: [
    { title: 'Buy milk', completed: false },
    { title: 'Walk the dog', completed: false },
    { title: 'Do laundry', completed: true },
  ],
});

// Start the application
app.router.navigate('');
app.todoList.render();