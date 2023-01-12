const listOfStudents = ["Nazia", "Youssef", "Cody", "Ashley"];
const listOfCoolStudents = ["Khalid", "Mingun", "Mauro", "Esther"];

// Why loops?
// Repeat an action
// Traverse a structure

// for (const name of listOfStudents) {
//   console.log(`Hello or Bonjour or Hola or Ciao or 'sup ${name}`);
// }

const sayHiToStudents = function (list) {
  for (const name of list) {
    console.log(`Hello or Bonjour or Hola or Ciao or 'sup ${name}`);
  }
};

const sayByeToStudents = function (list) {
  for (const name of list) {
    console.log(`Aurevoir ${name}`);
  }
};

const saySomethingToStudents = function (list, message) {
  for (const name of list) {
    console.log(`${message} ${name}`);
  }
};

const saySomethingToStudentsButBetterQuestionMark = function (
  list,
  messageBefore,
  messageAfter
) {
  for (const name of list) {
    console.log(`${messageBefore} ${name} ${messageAfter}`);
  }
};
const saySomethingToStudentsButBetterAgain = function (list, messageType) {
  for (const name of list) {
    sayHiToOneStudent(name);
    sayByeToOneStudent(name);
  }
};

const sayHiToOneStudent = function (name) {
  // Callback Function?
  console.log(`Good morning ${name}`);
};
const sayByeToOneStudent = function (name) {
  console.log(`Bye ${name}`);
};

const saySomethingToStudentsButBetter = function (list, action) {
  if (!Array.isArray(list)) {
    return console.log("List is not an array");
  }
  for (const name of list) {
    if (!action) {
      return console.log("no action was defined");
    }
    action(name);
  }
};

// saySomethingToStudentsButBetter(listOfStudents, sayHiToOneStudent); // sayHiToOneStudent is THE callback of saySomething...
// saySomethingToStudentsButBetter(listOfStudents, sayByeToOneStudent); // Callback

// saySomethingToStudentsButBetter(listOfStudents); // Higher Order Function (HOF) -> President of a company

// sayHiToOneStudent(); // called / invoked / executed
// sayHiToOneStudent; // reference

// sayHiToStudents(listOfCoolStudents);
// sayHiToStudents(listOfStudents);

// Aurevoir Amaal, on se voit au prochain cours
// sayHiToStudents({ name: "Bob", type: "chicken" });

const homemadeForEach = function (list, action) {
  for (const key in list) {
    action(list[key], key, list);
  }
};

// Action is a parameter, so will be defined at the time of execution

const logToConsole = function (value) {
  console.log("--------");
  console.log(value);
  console.log("--------");

  // console.log(`----- \n ${value} \n------`);
};

const logToConsoleBasic = function (value) {
  console.log(value);
};

homemadeForEach([1, 2, 3, 4], logToConsole);

homemadeForEach(["Bob", "Robert"], logToConsole);

homemadeForEach(["Bob", "Robert"], function (value) {
  console.log(value);
});

const arrowFunction = (value) => console.log(value);

homemadeForEach(["Bob", "Robert"], (value) => console.log(value));

const someNumbers = [1, 34, 24, 24, 5, 6, 2];

let sum = 0;
// homemadeForEach(someNumbers, (number) => (sum += number));

someNumbers.forEach((number, index, array) =>
  console.log(`The value is ${number} at position ${index} of the array ${array}`)
);
homemadeForEach(someNumbers, (number, index, array) =>
  console.log(`The value is ${number} at position ${index} of the array ${array}`)
);

console.log(sum);

// Response from parents
// strictParents min 95
// relaxParents min 60, 90 maths

// Not a simple conditional statement

const relaxParents = (grade, subject) => {
  let minimumGrade = 60;
  if (subject === "maths") {
    minimumGrade = 90;
  }

  return grade >= minimumGrade;
};

const strictParents = (grade) => grade > 95;

const weirdParents = (grade, subject) => subject !== "history";

// console.log(strictParents(99), strictParents(9));

const responseFromParents = (grade, subject, checkIfParentHappy) => {
  // Check with the parent that will be given as a callback parameter
  const areParentsHappy = checkIfParentHappy(grade, subject);

  // Condition based on the result
  if (areParentsHappy) {
    console.log("GOOD JOB.");
  } else {
    console.log("SON I AM DISAPPOINT");
  }
};

const alwayHappyParents = function () {
  return true;
};
const moodyParents = function () {
  return Math.random() > 0.5;
};

responseFromParents(90, "history", relaxParents);
responseFromParents(90, "history", strictParents);
responseFromParents(90, "history", alwayHappyParents);
