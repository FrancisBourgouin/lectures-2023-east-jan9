function makeIdGenerator() {
  let id = 0;

  // The following is the closure function
  return function () {
    // This inner function accesses and assigns the value of
    // the variable id, which was defined in the parent function
    id += 1;
    return id;
  };
}

// makeIdGenerator returns a function which is assigned to
// the variable nextId
const nextId = makeIdGenerator();

console.log(nextId()); // Logs: 1
console.log(nextId()); // Logs: 2

const name = "Bob";

const someFunction = () => {
  let name = "Chicken";

  const changeName = (newName) => {
    console.log("old name is:", name);
    console.log("new name is:", newName);
    name = newName;
  };

  return changeName;
};

const changeName = someFunction();
const changeNameAgain = someFunction();

changeName("Esther");
changeNameAgain("Francis");
