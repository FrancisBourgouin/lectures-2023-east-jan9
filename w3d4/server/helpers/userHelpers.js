require("dotenv").config();
const db = require("../data/userDb");
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);

db["periodic@table.com"].password = bcrypt.hashSync(process.env.PASSWORD1, salt);
db["pontiac@bandit.com"].password = bcrypt.hashSync(process.env.PASSWORD2, salt);

const getUserByEmail = (email) => {
  return db[email];
};

const authenticateUser = (email, password) => {
  const potentialUser = db[email];

  if (!potentialUser) {
    return { error: "user not found", user: null };
  }

  const isSamePassword = bcrypt.compareSync(password, potentialUser.password);

  if (isSamePassword) {
    return { error: null, user: potentialUser };
  }
  return { error: "bad password", user: null };
};

const addUser = (email, name, password, secret) => {
  const newUser = {
    email,
    name,
    secret,
    password: bcrypt.hashSync(password, salt),
  };

  db[email] = newUser;
};

const fetchAllUsers = () => db;

module.exports = { getUserByEmail, authenticateUser, addUser, fetchAllUsers };
