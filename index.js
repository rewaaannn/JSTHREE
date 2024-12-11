const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");


addTaskButton.addEventListener("click", function () {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");

    const taskContent = document.createElement("span");
    taskContent.textContent = taskText;

    // Done  button
    const doneButton = document.createElement("button");
    doneButton.textContent = "Done";
    doneButton.classList.add("done");
    doneButton.addEventListener("click", function () {
        taskDiv.classList.toggle("done");
    });

    // Delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete");
    deleteButton.addEventListener("click", function () {
        taskDiv.remove();
    });

    // Append 
    taskDiv.appendChild(taskContent);
    taskDiv.appendChild(doneButton);
    taskDiv.appendChild(deleteButton);

    // Add task to the task list
    taskList.prepend(taskDiv); 
    taskInput.value = ""; 
});

//////task two
// Fetch and display data in a table
function fetchData() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
  
  xhr.onload = function () {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      const tableBody = document.querySelector('#dataTable tbody');
      let output = '';

      data.forEach(user => {
        output += `
          <tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
          </tr>
        `;
      });

      tableBody.innerHTML = output;
    }
  };

  xhr.send();
}

function getDataById() {
  const id = document.getElementById('userId').value;
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `https://jsonplaceholder.typicode.com/users/${id}`, true);

  xhr.onload = function () {
    if (xhr.status === 200) {
      const user = JSON.parse(xhr.responseText);
      document.getElementById('userData').innerText = 
       ` ID: ${user.id}, Name: ${user.name}, Email: ${user.email}`;
    } else {
      document.getElementById('userData').innerText = 'User not found!';
    }
  };

  xhr.send();
}
window.onload = fetchData;
