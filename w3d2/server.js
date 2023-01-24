const express = require("express");
const app = express();
const port = 3000;
const {
  fetchAllTodos,
  fetchTodoById,
  toggleCompletion,
  removeTodo,
  addTodo,
} = require("./todoHelpers");

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// /todos (GET)
const todo = {
  id: "12345",
  task: "Feed the pet rock",
  isCompleted: false,
};
const todo2 = {
  id: "54321",
  task: "Look at the snow",
  isCompleted: true,
};

const todos = {
  12345: todo,
  54321: todo2,
};

const formHTMLInJSEwww = `
  <form method="POST" action="/todos">
    <button type="submit">Add todo</button>
  </form>
  <form method="POST" action="/todos/12345/delete">
    <button type="submit">Delete todo</button>
  </form>
  <form method="POST" action="/todos/12345/update">
    <button type="submit">Edit todo</button>
  </form>
`;

app.get("/todos", (req, res) => {
  // res.send(formHTMLInJSEwww);
  // res.send("ALL THE TODOS");
  const todoList = fetchAllTodos(todos);
  const templateVars = { name: "Pequeno Pollo", todoList };
  res.render("todos", templateVars);
});

// /todos/id (GET)
app.get("/todos/:todo_id", (req, res) => {
  // req.params access the parameters of the url
  const todoId = req.params.todo_id;
  const todo = fetchTodoById(todos, todoId);

  const templateVars = { todo };

  res.render("todo", templateVars);

  // res.send(`A SINGULAR TODO OF DESTINY ${req.params.todo_id}`);
});

// /todos (POST)

app.post("/todos", (req, res) => {
  console.log(req.body);
  const task = req.body.task;
  const newTodo = addTodo(todos, task);

  res.redirect(`/todos/${newTodo.id}`);
});

// /todos/id/delete (POST)

app.post("/todos/:todo_id/delete", (req, res) => {
  const todoId = req.params.todo_id;

  removeTodo(todos, todoId);

  res.redirect(`/todos`);
});

// /todos/id/update (POST)

app.post("/todos/:todo_id/update", (req, res) => {
  const todoId = req.params.todo_id;

  toggleCompletion(todos, todoId);

  res.redirect(`/todos/${todoId}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
