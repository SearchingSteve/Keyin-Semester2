/**
 * Practice Question #7
 *
 *      Name: <Stephen Crocker>
 *      Date: <Jul 15, 2024>
 */

document.addEventListener('DOMContentLoaded', () => {
    const todosContainer = document.getElementById('toDoContainer');

    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(todos => {
            todos.forEach(todo => {
                const todoItem = document.createElement('div');
                todoItem.className = 'toDoItem';
                todoItem.innerHTML = `
                    <span class="${todo.completed ? 'completed' : 'notCompleted'}">${todo.title}</span>
                    <span class="${todo.completed ? 'status-completed' : 'status-not-completed'}">
                        ${todo.completed ? 'Completed' : 'Not Completed'}
                    </span>
                `;
                todosContainer.appendChild(todoItem);
            });
        })
        .catch(error => {
            console.error(`Error fetching To Do's:`, error);
            todosContainer.innerHTML = `<p>Failed to load To Do's</p>`;
        });
});


