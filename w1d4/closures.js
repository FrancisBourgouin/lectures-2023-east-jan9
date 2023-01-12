// Higher Order Functions
// Function that needs a callback
// or
// Function that returns a function definition

const greetingGenerator = (name) => {
  const greeting = () => console.log(`Hi ${name}`);

  return greeting;
};

const result = greetingGenerator("Jonathan");
const result1 = greetingGenerator("Delal");
const result2 = greetingGenerator("Chris");

result();
result1();

const generateUserHelpers = (userDB) => {
  const fetchUsers = () => {
    for (const user of userDB) {
      // ...
    }
  };
  const fetchUserById = () => {
    for (const user of userDB) {
      // ...
    }
  };

  return { fetchUsers, fetchUserById };
};

generateUserHelpers(userDB1);
generateUserHelpers(userDB2);
