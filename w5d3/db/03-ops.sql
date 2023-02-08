
-- Query to get all the jokes

SELECT *, jokes.id AS joke_id
FROM jokes 
JOIN authors 
  ON authors.id = jokes.author_id
ORDER BY
  authors.id
;

-- Query to get a single joke by id

SELECT *, jokes.id AS joke_id
FROM jokes 
JOIN authors 
  ON authors.id = jokes.author_id
WHERE
  jokes.id = 1
;

-- Query to insert a joke

INSERT INTO jokes 
  (question, answer, rating, author_id)
VALUES
  ('Knock knock, whos there, to who', 'no, to whom',3, 1)
RETURNING *
;

-- Query to insert an author

INSERT INTO authors 
  (name, funny, description) 
VALUES 
  ('Matt', TRUE, 'A student in sept 19')
RETURNING *;
