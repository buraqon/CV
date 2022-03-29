let tasktable = $(".todo table tbody")[0];
const input = $(".input")[0];
const addButton = $(".add")[0];
const clearButton = $(".clear")[0];

addButton.addEventListener('click', AddTask);
clearButton.addEventListener('click', ClearAll);

function RemoveTask(event){
    const button = event.currentTarget;
    const row = button.parentNode.parentNode;
    tasktable.removeChild(row);
    console.log("remove lol");
}

function ClearAll() {
    while(tasktable.childElementCount > 1)
    {
        tasktable.removeChild(tasktable.lastChild);
    }
}

function AddTask() {
    let task = input.value;

    const row  = document.createElement("tr");
    const col = document.createElement("td");
    const button = document.createElement("button");

    row.append(col);
    col.append(button);
    button.classList.add("delete");
    button.innerHTML = "X";
    button.addEventListener('click', RemoveTask);

    task = Capitalize(task);
    col.prepend(task);
    tasktable.append(row);
}

function Capitalize(task) {
    task = task.slice(0, 1).toUpperCase() + task.slice(1, task.length);
    return task;
}

