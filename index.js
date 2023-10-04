function addTask() {
  const taskInput = document.getElementById("new-task");
  const notesInput = document.getElementById("task-notes");
  const optionsInput = document.getElementById("task-options");
  const taskText = taskInput.value.trim();
  const taskNotes = notesInput.value.trim();
  const taskOptions = optionsInput.value.trim();

  if (taskText === "") {
      return;
  }

  const tasksList = document.getElementById("tasks");
  const li = document.createElement("li");
  li.innerHTML = `
      <strong>${taskText}</strong>
      <p>${taskNotes}</p>
      <em>${taskOptions}</em>
      <button class="remove-button"  onclick="removeTask(this)">Remove</button>
  `;

  tasksList.appendChild(li);
  taskInput.value = "";
  notesInput.value = "";
  optionsInput.value = "";
}

function removeTask(button) {
  const taskItem = button.parentElement;
  const tasksList = document.getElementById("tasks");
  tasksList.removeChild(taskItem);
}

document.getElementById("new-task").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
      addTask();
  }
});
