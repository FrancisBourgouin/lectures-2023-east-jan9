const fetchAllTodos = (todos) => {
  return Object.values(todos);
};

// - View a todo
const fetchTodoById = (todos, id) => {
  return todos[id];
};
// - Add a todo
const addTodo = (todos, taskDescription) => {
  const id = Math.floor(Math.random() * 1000000);
  const isCompleted = false;
  const task = taskDescription;

  const newTodo = { id, task, isCompleted };

  todos[id] = newTodo;

  return newTodo; // or return the id
};
// - Remove a todo
const removeTodo = (todos, id) => {
  const todoToBeDeleted = todos[id];
  delete todos[id];

  return todoToBeDeleted;
};
// - Edit/Update a todo
const toggleCompletion = (todos, id) => {
  const changedTodo = todos[id];

  changedTodo.isCompleted = !changedTodo.isCompleted;

  return changedTodo;
};

module.exports = { fetchAllTodos, fetchTodoById, addTodo, removeTodo, toggleCompletion };
