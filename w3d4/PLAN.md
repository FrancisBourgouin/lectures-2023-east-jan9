# Project

Secret vault of destiny!

# Purpose

Store a terrible secret, only accessible w/ username + password

# DATA

```jsx
const user = {
  name:
  email:
  password:
  secret:
};
```

```jsx
const usersArr = [user1, user2];
const usersObj = {
  "periodic@table.com": user1,
  "pontiac@bandit.com": user2,
};
```

# Snippets

require("dotenv").config();

const cookieSession = require("cookie-session");
app.use(
cookieSession({
name: "session",
keys: ["$oksq/!134k,M", "Pequeno pollo de la pampa"],

    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000, // 24 hours

})
);

const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);

app.get("/api/users", (req, res) => {
res.json(usersObj);
});
