// Init Todos
const todos = new Todos();
// Init TodosView
const todosView = new TodosView();
// Init AlertView
const alertView = new AlertView();
// Init ui elements
const { table, form, title, text } = uiElements;

// Events
title.addEventListener("keyup", toogleDisabled);
form.addEventListener("submit", onSubmit);
table.addEventListener("click", remove);

// Handlers
function toogleDisabled(e) {
  text.disabled = !title.value
}
function onSubmit(e) {
  e.preventDefault();

  if (!title.value || !text.value) return;
  const newTodo = todos.addTodo(title.value, text.value);
  todosView.addTodo(newTodo);
  alertView.addAlert();
  setTimeout(function() {alertView.deleteAlert()}, 3000)
  form.reset();
  toogleDisabled();
}
function remove(e) {
  let deleteId = e.target.closest('[data-task-id]').dataset.taskId;

  if (e.target.classList.contains('remove-task')) {
    todosView.deleteTodo(deleteId);
    todos.deleteTodo(deleteId);
  }    
 }