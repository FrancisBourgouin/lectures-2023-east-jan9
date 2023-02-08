const { Client } = require("pg");

const db = new Client({
  user: "francis",
  password: "francis",
  host: "localhost",
  database: "jokes",
  port: 5432,
});

const id = process.argv[2];

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

const jokeParser = (jokeObj) => {
  console.log("😂🤣😆😂🤣😆😂🤣😆");
  console.log(`Question: ${jokeObj.question}`);
  console.log(`Answer: ${jokeObj.answer}`);
  console.log(`A fantastic joke by ${jokeObj.name}`);
  console.log("😂🤣😆😂🤣😆😂🤣😆\n\n");
};

db.connect() // First, we connect (async)
  .then(() => db.query(sqlQuery, sqlParams)) // Then we do the query from the variable called sqlQuery (async)
  .then((dbRes) => dbRes.rows[0]) // We extract the only row from the dbRes
  .then((jokeObj) => jokeParser(jokeObj)) // We give the row to our parser
  .catch((e) => console.log(e)) // If there's a problem, we log it
  .finally(() => db.end()); // We CLOSE the connection with end.

// AJAX, cleaning product, AJAX, though in grease, Ajax historical figure against greece
