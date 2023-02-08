const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const { fetchAllJokes, fetchJokeById, addJoke } = require("./db/dbHelpers");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Route to see all the jokes
app.get("/jokes", (req, res) => {
  fetchAllJokes()
    .then((jokeList) => {
      res.json(jokeList);
    })
    .catch((error) => {
      res.json(error);
    });
});
app.get("/jokes/new", (req, res) => {
  res.render("new_joke");
});

// Route to see a singular joke by ID
app.get("/jokes/:joke_id", (req, res) => {
  fetchJokeById(req.params.joke_id)
    .then((joke) => {
      const templateVars = { joke };

      res.render("joke", templateVars);
    })
    .catch((error) => {
      res.json(error);
    });
});

// Route to add a joke
app.post("/jokes", (req, res) => {
  const { question, answer, rating, author_id } = req.body;

  addJoke(question, answer, rating, author_id)
    .then((joke) => {
      res.json(joke); // If using it as an API
      res.redirect(`/jokes/${joke.id}`); // If using it with EJS
    })
    .catch((error) => {
      res.json(error);
    });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
