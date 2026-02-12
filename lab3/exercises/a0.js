// let taskInput = document.getElementById("taskInput");
let taskInput = document.querySelector("#taskInput");
let addTaskButton = document.querySelector("#addTaskButton");
let taskList = document.querySelector("#taskList");


addTaskButton.addEventListener("click", function() {
    let taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }
    let taskItem = document.createElement("li");
    taskItem.innerHTML = taskText;
    taskList.appendChild(taskItem);
    taskInput.value = "";
});