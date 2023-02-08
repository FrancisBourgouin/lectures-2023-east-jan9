const { Client } = require("pg");

const dbConnection = new Client({
  user: "francis",
  password: "francis",
  host: "localhost",
  database: "jokes",
  port: 5432,
});

const sqlQuery = `
SELECT *, jokes.id AS joke_id
FROM jokes 
JOIN authors 
  ON authors.id = jokes.author_id
ORDER BY
  authors.id
;
`;

// {
//   id: 1,
//   question: 'Knock knock, whos there, to who',
//   answer: 'no, to whom',
//   rating: 3,
//   author_id: 1,
//   joke_id:1,
//   name: 'AFrancis',
//   funny: true,
//   description: 'Oh boy, he is a teacher'
// }

const jokeParser = (jokeObj) => {
  console.log("😂🤣😆😂🤣😆😂🤣😆");
  console.log(`Question: ${jokeObj.question}`);
  console.log(`Answer: ${jokeObj.answer}`);
  console.log(`A fantastic joke by ${jokeObj.name}`);
  console.log("😂🤣😆😂🤣😆😂🤣😆\n\n");
};

const jokeListParser = (jokeList) => jokeList.forEach(jokeParser);

dbConnection
  .connect()
  .then(() => dbConnection.query(sqlQuery))
  .then((dbRes) => dbRes.rows)
  .then(jokeListParser)
  .catch((e) => console.log(e))
  .finally(() => dbConnection.end());

// try{
//   await dbConnection.connect()

// }catch(e){

// }
