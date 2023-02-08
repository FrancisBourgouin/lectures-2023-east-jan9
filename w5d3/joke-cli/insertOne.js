const { Client } = require("pg");

const db = new Client({
  user: "francis",
  password: "francis",
  host: "localhost",
  database: "jokes",
  port: 5432,
});

// const question = process.argv[2]
// const answer = process.argv[3]
// const rating = process.argv[4]
// const author_id = process.argv[5]

const [, , question, answer, rating, author_id] = process.argv;

const sqlQuery = `
INSERT INTO jokes 
  (question, answer, rating, author_id)
VALUES
  ($1, $2, $3, $4)
RETURNING *
;
`;

const sqlParams = [question, answer, rating, author_id];

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
