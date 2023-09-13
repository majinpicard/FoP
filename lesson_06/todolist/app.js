console.log('hello world')

const tasks = [];

function newTask() {
    console.log('newTask');
    const task = document.getElementById('todo-input').value
    console.log(task)

    // Create the <li> element with new task value
    const li = document.createElement("li")
    li.class = "tasks-list-item";
    li.innerText = task;

    // append it to our list
    document.querySelector("ul").appendChild(li);

    // put in array for safekeeping
    tasks.push(task);
    console.log('tasks array', tasks)
}

/*
Loop thru tasks array and render each task as an <li> in our list
*/
function renderTasksList() {
    const ul = document.getElementById('tasks-list')
    for (const task of tasks) {
        // TODO: Make this real
    }
}
