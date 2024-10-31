// Initialize an empty array to store tasks 
let tasks = [];

// Get DOM elements
const addInput = document.getElementById('add');
const tasksContainer = document.querySelector('.tasks-container');

// Add event listener for input (when user presses Enter)
addInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const task = addInput.value.trim();
        
        if (task !== '') {
            // Add task to array
            tasks.push(task);
            
            // Clear input field
            addInput.value = '';
            
            // Display tasks
            displayTasks();
            
            // Optional: Save to localStorage
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }
});

// Function to display tasks
function displayTasks() {
    tasksContainer.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskElement = document.createElement('div');
        taskElement.className = 'task';
        taskElement.innerHTML = `
            <span>${task}</span>
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        tasksContainer.appendChild(taskElement);
    });
}

// Function to delete task
function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
    // Update localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Load tasks from localStorage when page loads
window.addEventListener('load', () => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
        tasks = JSON.parse(savedTasks);
        displayTasks();
    }
});