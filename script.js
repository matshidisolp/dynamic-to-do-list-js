// Ensure DOM is fully loaded before running script
document.addEventListener('DOMContentLoaded', () => {

    // Select DOM elements
    const addButton = document.getElementById('add-task-btn'); // Add Task button
    const taskInput = document.getElementById('task-input');   // Input field for tasks
    const taskList = document.getElementById('task-list');     // List to display tasks

    // Define function to add a new task
    function addTask() {
        // Get and trim input value
        const taskText = taskInput.value.trim();

        // Check if task is empty
        if (taskText === "") {
            alert("Please enter a task."); // Alert if input is empty
            return; // Stop function if empty
        }

        // Create new list item (li) for the task
        const listItem = document.createElement('li');
        listItem.textContent = taskText; // Set li text to task text

        // Create new remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove"; // Set button text
        removeButton.className = 'remove-btn'; // Assign class for styling

        // Assign onclick event to remove button
        removeButton.onclick = function() {
            taskList.removeChild(listItem); // Remove the parent li element
        };

        // Append remove button to list item
        listItem.appendChild(removeButton);
        // Append list item to task list
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = "";
    }

    // Attach event listener to Add Task button
    addButton.addEventListener('click', addTask);

    // Attach event listener to task input for 'keypress' event
    taskInput.addEventListener('keypress', (event) => {
        // Check if the pressed key is 'Enter'
        if (event.key === 'Enter') {
            addTask(); // Call addTask function
        }
    });

    // Invoke the addTask function on DOMContentLoaded (as per later instruction, though usually for initial data load, not adding a blank task)
    // Note: The instruction "Invoke the addTask function on DOMContentLoaded" seems to imply adding a task when the page loads.
    // However, typically addTask is only called by user interaction. If the intention is to populate initial tasks,
    // that logic would go here. For now, I'm interpreting it as simply running the setup code.
    // If you literally want a blank task to be added on load (which is unusual), you would call addTask(); here.
    // As it makes more sense for a to-do list to start empty, I'm simply ensuring the script setup runs.
    // If there were initial tasks to load from storage, this is where that logic would go.

});
