// var taskInput = document.getElementById('taskInput');
// var addTaskBtn = document.getElementById('addTaskBtn');
// var taskList = document.getElementById('taskList');
// function addTask(){
//     var addTask = taskInput.value 
//     alert('Task Cannot be empty')
// }
// var li = document.createElement('li')
// li 
// function c
// document.addEventListener('DOMContentLoaded', function() {
    var taskInput = document.getElementById('taskInput');
    var addTaskBtn = document.getElementById('addTaskBtn');
    var taskList = document.getElementById('taskList');

    // Function to add a new task
    function addTask() {
        var taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Task is empty!');
            return;
        }

        // Create a new task element
        var li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.innerHTML = '<span class="task-text">' + taskText + '</span>' +
            '<div>' +
            '<button class="btn btn-danger btn-sm delete-task">Delete</button>' +
            '</div>';

        // Append to the task list
        taskList.appendChild(li);
        taskInput.value = '';
    }

    // Event listener for adding a task
    addTaskBtn.addEventListener('click', addTask);

    // Event listener for handling task actions
    taskList.addEventListener('click', function(e) {
        if (e.target.classList.contains('delete-task')) {
            var taskItem = e.target.closest('li');
            taskList.removeChild(taskItem);
        }
    });


    // document.getElementById('addTaskBtn').addEventListener('click', addTaskBtn);
    
    // function addTask(){
    //     const taskInput = document.getElementById('taskInput')
    //     const taskValue = taskInput.value;
    //     if(taskValue ===''){
    //         alert('The Field is Empty')
    //     }
    //     const li = document.createElement('li')
    //     li.className = ' list-group-item d-flex justify-content-evenly align-items-center'

    // }