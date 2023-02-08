# TODO LIST - THE PLAN !

## Functionality

- View all todos
- View a todo
- Add a todo
- Remove a todo
- Edit/Update a todo

## Data structure

### Todo Item

```jsx
const todo = {
  id: "dqokdqowdwdl",
  task: "Feed the pet rock",
  isCompleted: false,
};
```

### Todo List

```jsx
const todos = [todo, todo, todo]; // Bad (not bad but not as good)

const todos = {
  id: todo,
  id: todo,
  id: todo,
};
```

## Actions

```jsx
// - View all todos
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
```

## Events CRUD (GET POST PUT DELETE ...)

- View all todos (GET)
- View a todo (GET)
- Add a todo (POST)
- Remove a todo (DELETE) ---> HTML limitations (POST)
- Edit/Update a todo (PUT) ---> HTML limitations (POST)

## Routes & Events

- /todos (GET)
- /todos/id (GET)
- /todos (POST)
- /todos/id/delete (POST)
- /todos/id/update (POST)

## Packages

- Express (https://expressjs.com/)
- UUID (https://www.npmjs.com/package/uuid)
- EJS (https://www.npmjs.com/package/ejs)
- Nodemon (https://www.npmjs.com/package/nodemon)

## Configs

- app.set('view engine', 'ejs')
- app.use(express.static('public'))
- app.use(express.bodyParser)
