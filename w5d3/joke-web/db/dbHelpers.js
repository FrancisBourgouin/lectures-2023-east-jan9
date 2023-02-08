const { Client } = require("pg");

const db = new Client({
  user: "francis",
  password: "francis",
  host: "localhost",
  database: "jokes",
  port: 5432,
});

db.connect();

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

module.exports = { fetchAllJokes, fetchJokeById, addJoke };
