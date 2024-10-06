// Function to add a task
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskValue = taskInput.value.trim();

    if (taskValue === "") {
        alert("Please enter a task.");
        return;
    }

    const taskList = document.getElementById("taskList");
    const li = document.createElement("li");

    li.innerHTML = `
        ${taskValue}
        <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
    `;
    li.addEventListener("click", function() {
        if (!this.classList.contains("completed")) {
            this.classList.add("completed");
            moveToCompleted(this);
        }
    });

    taskList.appendChild(li);
    taskInput.value = "";  // Clear the input field
}

// Function to delete a task
function deleteTask(button) {
    const li = button.parentElement;
    li.remove();
}

// Function to move a task to the completed task list
function moveToCompleted(taskItem) {
    const completedTaskList = document.getElementById("completedTaskList");
    taskItem.querySelector(".delete-btn").addEventListener("click", function() {
        taskItem.remove();
    });
    completedTaskList.appendChild(taskItem);
}
