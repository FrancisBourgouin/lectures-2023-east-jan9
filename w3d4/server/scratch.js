const bcrypt = require("bcryptjs");

const salt = bcrypt.genSaltSync(10);

const somePassword = "Hello wiggle.";
const hashedPassword = bcrypt.hashSync(somePassword, salt);

console.log(somePassword, hashedPassword);

console.log(somePassword === hashedPassword);

console.log(bcrypt.compareSync(somePassword, hashedPassword));
