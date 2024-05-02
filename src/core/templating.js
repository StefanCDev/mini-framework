

class Templating {
    static renderTodoList(todos) {
      let html = '';
      todos.forEach(todo => {
        html += `<li>${todo}</li>`;
      });
      return `<ul>${html}</ul>`;
    }
  }
  
  export default Templating;
  