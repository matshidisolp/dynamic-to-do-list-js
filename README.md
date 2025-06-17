Build an interactive To-do list
Overview

You are tasked with developing a To-Do List application that allows users to add tasks, display them, and remove tasks. This application will utilize advanced DOM manipulation techniques.

Step-by-Step Guide
Setup Event Listener for Page Load:

At the beginning of your script, use document.addEventListener to listen for the 'DOMContentLoaded' event. This ensures your JavaScript code runs after the HTML document has fully loaded. Place all your subsequent code inside the callback function of this event listener.
Select DOM Elements:

Use document.getElementById to select the “Add Task” button and store it in a constant named addButton.
Similarly, select the input field where users enter tasks (id="task-input") and the unordered list (id="task-list") that will display the tasks. Store these references in constants named taskInput and taskList, respectively.
Create the addTask Function:

Define a function named addTask. This function will be responsible for adding new tasks to the list.
Inside addTask, retrieve and trim the value from the task input field. Store this value in a variable named taskText.
Check if taskText is not empty (""). If it is empty, use alert to prompt the user to enter a task.
Task Creation and Removal:

Within the addTask function, if taskText is not empty:
Create a new li element. Set its textContent to taskText.
Create a new button element for removing the task. Set its textContent to "Remove", and give it a class name of 'remove-btn'.
Assign an onclick event to the remove button that, when triggered, removes the li element from taskList.
Append the remove button to the li element, then append the li to taskList.
Clear the task input field by setting taskInput.value to an empty string.
Attach Event Listeners:

Add an event listener to addButton that calls addTask when the button is clicked.
Add an event listener to taskInput for the 'keypress' event to allow tasks to be added by pressing the “Enter” key. Inside this event listener, check if event.key is equal to 'Enter' before calling addTask.
Invoke the addTask function on DOMContentLoaded. - Outside addTask, add an event listener to document for the DOMContentLoaded event. Set the callback function to invoke addTask. This ensures your data fetching logic runs once the HTML document has fully loaded.
Additional Instructions
Code Structure: Follow the provided code structure and naming conventions exactly as specified to ensure your solution aligns with the expected output.
Comments: Include comments in your code to describe the purpose of each major step or function, as shown in the example.
Testing: After completing your script, test the functionality of your To-Do List application by adding and removing tasks to ensure everything works as intended.
