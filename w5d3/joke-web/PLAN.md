# JOKE LIST - THE PLAN !

## Functionality

- View all jokes
- View a joke
- Add a joke
- Remove a joke
- Edit/Update a joke

## Data structure

### Joke Item

```jsx
const joke = {
  id: 1,
  question: "Knock knock, whos there, to who",
  answer: "no, to whom",
  rating: 3,
  author_id: 1,
  joke_id: 1,
  name: "AFrancis",
  funny: true,
  description: "Oh boy, he is a teacher",
};
```

### Joke List

```jsx
const jokeList = [joke, joke];
```

## Actions

```jsx
// - View all jokes

const fetchAllJokes = () => {
  const sqlQuery = `
    SELECT *, jokes.id AS joke_id
    FROM jokes 
    JOIN authors 
      ON authors.id = jokes.author_id
    ORDER BY
      authors.id
    ;
  `;

  return db.query(sqlQuery).then((dbRes) => dbRes.rows);
};

app.get("/jokes", (req, res) => {
  fetchAllJokes().then((rows) => res.json(rows));
});

// - View a joke

const fetchJokeById = (id) => {
  const sqlQuery = `
    SELECT *, jokes.id AS joke_id
    FROM jokes 
    JOIN authors 
      ON authors.id = jokes.author_id
    WHERE
      jokes.id = $1
    ;
  `;
  const sqlParams = [id];

  return db.query(sqlQuery, sqlParams).then((dbRes) => dbRes.rows[0]);
};

// - Add a joke

const addJoke = (question, answer, rating, author_id) => {
  const sqlQuery = `
    INSERT INTO jokes 
      (question, answer, rating, author_id)
    VALUES
      ($1, $2, $3, $4)
    RETURNING *
    ;
  `;

  const sqlParams = [question, answer, rating, author_id];

  return db.query(sqlQuery, sqlParams).then((dbRes) => dbRes.rows[0]);
};

// - Remove a joke

// - Edit/Update a joke
```

## Events CRUD (GET POST PUT DELETE ...)

- View all jokes (GET)
- View a joke (GET)
- Add a joke (POST)
- Remove a joke (DELETE) ---> HTML limitations (POST)
- Edit/Update a joke (PUT) ---> HTML limitations (POST)

## Routes & Events

- /jokes (GET)
- /jokes/id (GET)
- /jokes (POST)
- /jokes/id/delete (POST)
- /jokes/id/update (POST)

## Packages

- Express (https://expressjs.com/)
- UUID (https://www.npmjs.com/package/uuid)
- EJS (https://www.npmjs.com/package/ejs)
- Nodemon (https://www.npmjs.com/package/nodemon)

## Configs

- app.set('view engine', 'ejs')
- app.use(express.static('public'))
- app.use(express.bodyParser)
