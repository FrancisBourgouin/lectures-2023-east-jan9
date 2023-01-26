const express = require("express"); // Requires Express Framework (Routing / Server)
const path = require("path"); // Requires Path (Multiple OS path support)
const logger = require("morgan"); // Require Morgan (Logs the requests received)
const cookieParser = require("cookie-parser"); // Require Cookie Parser (Parse string to cookie)
const cookieSession = require("cookie-session");

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

const user1 = {
  name: "Dimitri Ivanovich Mendeleiv",
  email: "periodic@table.com",
  password: "hydrogen",
  secret: "Actually prefers biology over chemistry",
};
const user2 = {
  name: "Doug Judy",
  email: "pontiac@bandit.com",
  password: "rosa",
  secret: "Cannot drive stick",
};

const userDatabaseIsh = {
  "periodic@table.com": user1,
  "pontiac@bandit.com": user2,
};

const getUserByEmail = (db, email) => {
  return db[email];
};

const authenticateUser = (db, email, password) => {
  const potentialUser = db[email];

  if (!potentialUser) {
    return { error: "user not found", user: null };
  }

  if (potentialUser.password === password) {
    return { error: null, user: potentialUser };
  }
  return { error: "bad password", user: null };
};

app.get("/", (req, res) => {
  return res.render("index");
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const { error, user } = authenticateUser(userDatabaseIsh, email, password);

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

  const user = getUserByEmail(userDatabaseIsh, email);

  const templateVars = {
    name: user.name,
    secret: user.secret,
  };

  return res.render("secret", templateVars);
});

module.exports = app;
