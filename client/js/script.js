
const list = document.querySelector(".activity-list");

const named = document.querySelector("#add-name");
const description = document.querySelector("#add-description");
const date = document.querySelector("#add-date");
const priorityScreen = document.querySelector("#data-screen");
const priority = document.querySelector("#data-range").addEventListener("change",setRangeScreen);
const statusTag = document.querySelector("#add-status");

const add = document.querySelector(".add-button").addEventListener("click", addTask);

const removeAll = document.querySelector(".clear-all-button").addEventListener("click", removeAllTasks);


function setRangeScreen(){
    priorityScreen.value = this.value;
}


function addTask(e){

    e.preventDefault();


    //Element Creation

    //Divs
    const task = document.createElement("div");
    task.classList.add("task");
    const taskTitle = document.createElement("div");
    taskTitle.classList.add("task-title");
    const taskContent = document.createElement("div");
    taskContent.classList.add("task-content");
    const taskLeft = document.createElement("div");
    taskLeft.classList.add("task-left");
    const taskRight = document.createElement("div");
    taskRight.classList.add("task-right");

    //H3
    const TaskTitleText = document.createElement("h3");


    //Label
    const labelDescription = document.createElement("label");
    const labelDate = document.createElement("label");
    const labelPriority = document.createElement("label");
    const labelStatus = document.createElement("label");

    //Inner - Divs
    const labelTextDescription = document.createElement("div");
    const labelTextDate = document.createElement("div");
    const labelTextPriority = document.createElement("div");
    const labelTextStatus = document.createElement("div");

    //Inputs
    const labelInputDescription = document.createElement("input");
    const labelInputDate = document.createElement("input");
    const labelInputPriority = document.createElement("input");

    // Select - Options
    const labelSelectStatus = document.createElement("select");
    //const labelStatusOptionNull = document.createElement("option");
    const labelStatusOptionToDo = document.createElement("option");
    labelStatusOptionToDo.textContent = "To Do";
    labelStatusOptionToDo.classList.add("to-do");
    const labelStatusOptionDoing = document.createElement("option");
    labelStatusOptionDoing.textContent = "Doing";
    labelStatusOptionDoing.classList.add("doing");
    const labelStatusOptionDone = document.createElement("option");
    labelStatusOptionDone.textContent = "Done";
    labelStatusOptionDone.classList.add("done");

    //Delete Button <i> - fonts awesome
    const deleteItem = document.createElement("i");
    deleteItem.classList.add("fas", "fa-circle-xmark", "fa-2x", "clear-button");

    deleteItem.addEventListener("click", ()=>removeTask(task));
    //Setting up Task name value and task title append child


    taskTitle.appendChild(TaskTitleText);
    TaskTitleText.textContent = named.value;


    //Setting up task-content append child and setting up input values for readonly

    //Description
    labelDescription.appendChild(labelTextDescription);
    labelDescription.appendChild(labelInputDescription);
    labelTextDescription.textContent = "Task Description: ";
    labelInputDescription.value = description.value;
    labelInputDescription.setAttribute("readonly","readonly");

    //Date

    labelDate.appendChild(labelTextDate);
    labelDate.appendChild(labelInputDate);
    labelTextDate.textContent = "Final Date: ";
    labelInputDate.value = date.value;
    labelInputDate.setAttribute("readonly","readonly");

    //Priority

    labelPriority.appendChild(labelTextPriority);
    labelPriority.appendChild(labelInputPriority);
    labelTextPriority.textContent = "Priority Level: ";
    labelInputPriority.classList.add("priority-screen");
    labelInputPriority.value = priorityScreen.value;
    labelInputPriority.setAttribute("readonly","readonly");
    labelInputPriority.classList.add("priority-screen");

    //Status

    labelSelectStatus.appendChild(labelStatusOptionToDo);
    labelSelectStatus.appendChild(labelStatusOptionDoing);
    labelSelectStatus.appendChild(labelStatusOptionDone);

    labelStatus.appendChild(labelTextStatus);
    labelStatus.appendChild(labelSelectStatus);
    labelTextStatus.textContent = "Status: ";
    labelSelectStatus.value = statusTag.value;

    if(statusTag.value === "To Do"){
        labelSelectStatus.classList.add("to-do");
        
        
    }
    else if(statusTag.value === "Doing"){
        labelSelectStatus.classList.add("doing");

    }
    else{
        labelSelectStatus.classList.add("done");
    }

    //Putting everything Together

    taskRight.appendChild(labelPriority);
    taskRight.appendChild(labelStatus);
    taskLeft. appendChild(labelDescription);
    taskLeft. appendChild(labelDate);

    taskContent.appendChild(taskLeft);
    taskContent.appendChild(taskRight);
    taskContent.appendChild(deleteItem);

    task.appendChild(taskTitle);
    task.appendChild(taskContent);

    list.appendChild(task);
}

function removeAllTasks(){ 
    while(list.firstElementChild){
        list.removeChild(list.firstChild)
    }
    
}

function removeTask(task){
    list.removeChild(task);
}
