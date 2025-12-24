// crud app (create, read, update, delete)
// select elements
const input = document.querySelector(".input");
const submit = document.querySelector(".add");
const tasksDiv = document.querySelector(".tasks");

let tasksArr = [];

if (localStorage.getItem("tasks")) {
  tasksArr = JSON.parse(localStorage.getItem("tasks"));
}

getDataFromLoacalStorage();

// add task
submit.addEventListener("click", () => {
  if (input.value !== "") {
    addTaskToArr(input.value);
    input.value = "";
  }
});

// function to add task
function addTaskToArr(text) {
  // task
  const task = {
    id: Date.now(),
    title: text,
    completed: false,
  };
  // push task to array
  tasksArr.push(task);
  // display data
  displayTasks(tasksArr);
  // storage data
  addDataToLocalStorage(tasksArr);
}

function displayTasks(tasksArr) {
  tasksDiv.innerHTML = "";

  tasksArr.map((task) => {
    // create task div
    const div = document.createElement("div");
    div.className = "task";
    if (task.completed) {
      div.className = "task done";
    }
    div.setAttribute("data-id", task.id);
    // Create Delete Button
    let span = document.createElement("span");
    span.className = "del";
    span.textContent = "x";

    div.textContent = task.title;
    div.appendChild(span);
    tasksDiv.appendChild(div);
  });
}

function addDataToLocalStorage(tasksArr) {
  window.localStorage.setItem("tasks", JSON.stringify(tasksArr));
}

function getDataFromLoacalStorage() {
  let data = window.localStorage.getItem("tasks");
  if (data) {
    let tasks = JSON.parse(data);
    displayTasks(tasks);
  }
}

// delete or update task

function deleteTask(taskId) {
  tasksArr = tasksArr.filter((task) => task.id != taskId);
  addDataToLocalStorage(tasksArr);
}

function toggleStatusTaskWith(taskId) {
  for (let i = 0; i < tasksArr.length; i++) {
    if (tasksArr[i].id == taskId) {
      tasksArr[i].completed == false
        ? (tasksArr[i].completed = true)
        : (tasksArr[i].completed = false);
    }
  }
  addDataToLocalStorage(tasksArr);
}

tasksDiv.addEventListener("click", (e) => {
  if (e.target.classList.contains("del")) {
    deleteTask(e.target.parentElement.getAttribute("data-id"));
    e.target.parentElement.remove();
  }

  if (e.target.classList.contains("task")) {
    toggleStatusTaskWith(e.target.getAttribute("data-id"));
    e.target.classList.toggle("done");
  }
});

// update task (edit task title) on double click
tasksDiv.addEventListener("dblclick", (e) => {
  if (e.target.classList.contains("task")) {
    const taskId = e.target.getAttribute("data-id");
    const currentTitle = e.target.firstChild.textContent;
    const newTitle = prompt("Edit task title:", currentTitle);
    if (newTitle && newTitle.trim() !== "") {
      // Update the task title in tasksArr
      for (let i = 0; i < tasksArr.length; i++) {
        if (tasksArr[i].id == taskId) {
          tasksArr[i].title = newTitle.trim();
        }
      }
      // Update local storage
      addDataToLocalStorage(tasksArr);
      // Refresh the displayed tasks
      displayTasks(tasksArr);
    }
  }
});
