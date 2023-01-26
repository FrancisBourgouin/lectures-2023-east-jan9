require("dotenv").config();
const express = require("express"); // Requires Express Framework (Routing / Server)
const path = require("path"); // Requires Path (Multiple OS path support)
const logger = require("morgan"); // Require Morgan (Logs the requests received)
const cookieParser = require("cookie-parser"); // Require Cookie Parser (Parse string to cookie)
const cookieSession = require("cookie-session");

const {
  getUserByEmail,
  authenticateUser,
  addUser,
  fetchAllUsers,
} = require("./helpers/userHelpers");

const app = express(); // Create an express server and reference with app
// view engine setup
app.set("views", path.join(__dirname, "views")); // Where the views are
app.set("view engine", "ejs"); // The rendering engine will be EJS

// Middlewares
app.use(logger("dev")); // Logs, always triggered
app.use(express.json()); // Parse incoming body (POST / PUT)
app.use(express.urlencoded({ extended: false })); // Parse incoming body (POST / PUT)
app.use(cookieParser()); // Parse cookie values, always triggered
app.use(express.static(path.join(__dirname, "public"))); // Serve static files
app.use(
  cookieSession({
    name: "session",
    keys: [
      "I like potatoes and gravy and good cheese",
      "Tartiflette is the best dish of winter",
    ],

    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
);
app.use((req, res, next) => {
  const { email } = req.session;
  const user = getUserByEmail(email);

  const whiteList = ["/", "/login"];

  if (user || whiteList.includes(req.url)) {
    // if(!req.session.email){
    return next();
  }

  return res.redirect("/");
});

app.get("/", (req, res) => {
  return res.render("index");
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const { error, user } = authenticateUser(email, password);

  if (error) {
    console.log(error);
    return res.redirect("/");
  }

  req.session.email = user.email;
  return res.redirect("/secret");
  // const result = authenticateUser(userDatabaseIsh, email, password)

  // const error = result.error
  // const user = result.user
  // const email = req.body.email
  // const password = req.body.password

  // return res.redirect("/secret");
});

app.get("/secret", (req, res) => {
  const { email } = req.session;
  const user = getUserByEmail(email);

  const templateVars = {
    name: user.name,
    secret: user.secret,
  };

  return res.render("secret", templateVars);
});

app.get("/api/users", (req, res) => {
  res.json(fetchAllUsers());
});

app.post("/register", (req, res) => {
  const { email, name, password, secret } = req.body;

  addUser(email, name, password, secret);

  req.session.email = email;

  return res.redirect("/secret");
});

module.exports = app;
