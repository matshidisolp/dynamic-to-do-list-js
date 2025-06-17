// Ensure the DOM is fully loaded before executing the script
document.addEventListener('DOMContentLoaded', () => {

    // Select DOM elements
    const addButton = document.getElementById('add-task-btn'); // Add Task button
    const taskInput = document.getElementById('task-input');   // Input field for tasks
    const taskList = document.getElementById('task-list');     // List to display tasks

    // Define function to load tasks from Local Storage
    // This function populates the DOM with tasks stored in Local Storage
    function loadTasks() {
        // Retrieve tasks from Local Storage, parse them, or initialize an empty array if none found
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');

        // Iterate over each stored task text
        storedTasks.forEach(taskText => {
            // Call addTask to create the task element in the DOM
            // Pass 'false' for the 'save' parameter to prevent re-saving to Local Storage during load
            addTask(taskText, false);
        });
    }

    // Define the addTask function
    // This function handles the creation, display, and removal setup for a new task
    // It now accepts an optional 'save' parameter, defaulting to true
    function addTask(taskText, save = true) {
        // If taskText is not provided (e.g., from initial button click without input),
        // retrieve it from the input field. This handles both direct calls (from loadTasks)
        // and user interactions.
        if (typeof taskText !== 'string') {
            taskText = taskInput.value.trim();
        }

        // Check if the task text is empty
        if (taskText === "") {
            // If empty, alert the user (only for user interaction, not for loading from storage)
            if (save) { // Only alert if it's a new task being added by user
                alert("Please enter a task.");
            }
            return; // Exit the function
        }

        // Create a new list item (<li>) element for the task
        const listItem = document.createElement('li');
        // Set the text content of the list item to the entered task text
        listItem.textContent = taskText;

        // Create a new button element for removing the task
        const removeButton = document.createElement('button');
        // Set the text content of the remove button
        removeButton.textContent = "Remove";
        // Assign a class name for styling the remove button
        removeButton.className = 'remove-btn';

        // Assign an onclick event to the remove button
        removeButton.onclick = function() {
            // Remove the parent <li> element from the task list in the DOM
            taskList.removeChild(listItem);

            // Update Local Storage after task removal
            // Retrieve current tasks, filter out the removed task, and save back
            let currentTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            currentTasks = currentTasks.filter(task => task !== taskText); // Filter out the specific task text
            localStorage.setItem('tasks', JSON.stringify(currentTasks));
        };

        // Append the remove button to the newly created list item
        listItem.appendChild(removeButton);
        // Append the completed list item (with text and remove button) to the unordered task list
        taskList.appendChild(listItem);

        // If 'save' is true, it means this task is new and needs to be saved to Local Storage
        if (save) {
            // Retrieve current tasks from Local Storage
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            // Add the new task text to the array
            storedTasks.push(taskText);
            // Save the updated array back to Local Storage
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }

        // Clear the input field only if it was a user-initiated addition
        if (save) {
            taskInput.value = "";
        }
    }

    // Attach event listener to the "Add Task" button
    // When the button is clicked, the addTask function will be executed without specific text (it will read from input)
    addButton.addEventListener('click', () => addTask());

    // Attach event listener to the task input field for the 'keypress' event
    // This allows users to add tasks by pressing the "Enter" key
    taskInput.addEventListener('keypress', (event) => {
        // Check if the key pressed is the 'Enter' key
        if (event.key === 'Enter') {
            addTask(); // Call the addTask function (it will read from input)
        }
    });

    // Invoke loadTasks function on DOMContentLoaded to populate the list from Local Storage
    loadTasks();
    // Removed the previous `addTask()` call at the end of DOMContentLoaded,
    // as `loadTasks()` now handles initial population and avoids unnecessary alerts on load.
});
