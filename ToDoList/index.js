databaseURL = "https://todolist-fa0f1-default-rtdb.europe-west1.firebasedatabase.app/";

function Data(type, link, data){
    var package = {
        type : type,
        url : link,
        data : data,
        error: function(e) {
        console.log(e);
        },
        dataType: "json",
        contentType: "application/json"
    }
    return package;
}
function TaskToJson(task)
{
    var task = JSON.stringify({
        "task:content": task,
    });
    return task;
}

let tasktable = $(".todo table tbody")[0];
const input = $(".input")[0];
const addButton = $(".add")[0];
const clearButton = $(".clear")[0];

addButton.addEventListener('click', AddTask);
clearButton.addEventListener('click', ClearAll);

function RemoveTask(event){
    const button = event.currentTarget;
    const tdContent = button.parentNode;
    const row = tdContent.parentNode;
    tasktable.removeChild(row);
    var task = tdContent.textContent.slice(0, -1);
    // var data = $.ajax(Data('GET', databaseURL + "tasks.json", JSON.stringify({"task:content": ""})));
}

function ClearAll() {
    while(tasktable.childElementCount > 1)
    {
        tasktable.removeChild(tasktable.lastChild);
    }
    $.ajax(Data('Delete', databaseURL + "tasks.json", JSON.stringify({"task:content": ""})));
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

    $.ajax(Data('POST', databaseURL + "tasks.json", TaskToJson(task)));
}

function Capitalize(task) {
    task = task.slice(0, 1).toUpperCase() + task.slice(1, task.length);
    return task;
}

