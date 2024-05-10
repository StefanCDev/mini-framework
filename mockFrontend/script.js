document.addEventListener("DOMContentLoaded", function(){
    const checkboxes = document.querySelectorAll('input[name="day"]');
    const datetimeInput = document.getElementById('datetime-input');
    const todoForm = document.getElementById('todo-form');

    // Event listener for submit button
    todoForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Get todo input value and datetime value
        const todoInput = document.getElementById('todo-input').value;
        const datetimeValue = datetimeInput.value;

        // Loop through checkboxes to find the checked one
        checkboxes.forEach((checkbox) => {
            if (checkbox.checked) {
                const day = checkbox.value.toLowerCase(); // Convert day name to lowercase

                // Create a new todo item
                const todoItem = document.createElement('div');
                todoItem.classList.add('todo-item');
                todoItem.textContent = `${todoInput} - ${datetimeValue}`; // Combine todo input and datetime value

                // Find the corresponding day's todo list div
                const dayTodoList = document.getElementById(`${day}-todos`);
                if (dayTodoList) {
                    dayTodoList.appendChild(todoItem); // Append the todo item to the day's todo list
                } else {
                    console.error(`Todo list for ${day} not found!`);
                }

                // Reset form inputs
                document.getElementById('todo-input').value = '';
                datetimeInput.value = '';
            }
        });
    });
});
