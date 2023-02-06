-- Basic SELECT

-- SELECT * FROM authors;
-- SELECT * FROM jokes;
-- SELECT question FROM jokes;
-- SELECT question AS beginning_of_joke FROM jokes;




-- Single WHERE clause

-- SELECT * FROM jokes WHERE rating < 5;
-- SELECT * FROM jokes WHERE question LIKE 'What%';

-- SELECT * FROM jokes WHERE question ILIKE 'what%';
-- SELECT * FROM jokes WHERE LOWER(question) LIKE 'what%';

 
-- Multiple WHERE clauses

-- SELECT * FROM jokes WHERE LOWER(question) LIKE 'what%' AND rating >= 5;

-- SELECT * 
-- FROM jokes 
--   WHERE LOWER(question) LIKE 'what%' 
--   AND rating >= 5 
--   AND answer LIKE '%.'
-- ORDER BY question
-- LIMIT 1
-- ;


-- Ordering results

-- SELECT * FROM authors ORDER BY name ASC;
-- SELECT * FROM authors ORDER BY name DESC;


-- Joining tables


-- SELECT *, jokes.id AS joke_id
-- FROM jokes

-- JOIN authors
-- ON authors.id = jokes.author_id
-- ;


-- SELECT *, jokes.id AS joke_id
-- FROM jokes

-- LEFT JOIN authors
-- ON authors.id = jokes.author_id
-- ;


-- SELECT *, jokes.id AS joke_id
-- FROM jokes

-- RIGHT JOIN authors
-- ON authors.id = jokes.author_id
-- ;

-- SELECT *, jokes.id AS joke_id
-- FROM jokes

-- FULL OUTER JOIN authors
-- ON authors.id = jokes.author_id
-- ;

-- LEFT JOIN, RIGHT JOIN, INNER JOIN, OUTER JOIN, FULL JOIN


-- Aggregate functions (AVG, MIN, MAX, SUM, COUNT) (HAVING GROUPBY)

-- SELECT AVG(rating) AS average_joke_rating FROM jokes;
-- SELECT COUNT(*), author_id FROM jokes GROUP BY author_id ORDER BY author_id;

-- SELECT AVG(rating), author_id AS average_joke_rating FROM jokes GROUP BY author_id;

-- SELECT AVG(rating) AS average_joke_rating, authors.name 
-- FROM jokes 
-- JOIN authors
-- ON authors.id = jokes.author_id
-- GROUP BY author_id, authors.name ;


-- SELECT AVG(rating) AS average_joke_rating, authors.name 
-- FROM jokes 
-- JOIN authors
-- ON authors.id = jokes.author_id
-- GROUP BY author_id, authors.name
-- HAVING AVG(rating) >= 4
-- ;



-- SHOW the jokes of authors having an average of 4 and more in their jokes

-- authors having an average of 4 and more in their jokes
-- show the jokes from those authors

-- Nested selects


-- SELECT * FROM jokes WHERE author_id IN (1,2,3)

-- SELECT * 
-- FROM jokes 
-- WHERE author_id IN (
--   SELECT author_id
--   FROM jokes
--   GROUP BY author_id
--   HAVING AVG(rating) >= 4
-- );





-- SELECT * 
-- FROM jokes
-- WHERE author_id IN (
--   SELECT id 
--   FROM authors 
--   WHERE name LIKE 'A%'
-- );




-- Views (stretch)

-- VIEW => helper functionish -- urlDatabase => getUrlsForUser


CREATE VIEW jokes_by_a_listers AS (
  SELECT * 
  FROM jokes
  WHERE author_id IN (
    SELECT id 
    FROM authors 
    WHERE name LIKE 'A%'
  )
)

