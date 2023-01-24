const todo = {
  id: "dqokdqowdwdl",
  task: "Feed the pet rock",
  isCompleted: false,
};

const todos = {
  dqokdqowdwdl: todo,
};

const fetchAllTodos = (todos) => {
  return Object.values(todos);
};
// - View a todo
const fetchTodo = (todos, id) => {
  return todos[id];
};
// - Add a todo
const addTodo = (todos, taskDescription) => {
  const id = Math.random();
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

console.log(fetchAllTodos(todos));

toggleCompletion(todos, "dqokdqowdwdl");

console.log(fetchAllTodos(todos));

removeTodo(todos, "dqokdqowdwdl");

console.log(fetchAllTodos(todos));
