-- Drop and recreate urls table (Example)

DROP TABLE IF EXISTS urls CASCADE;
CREATE TABLE urls (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL
);
