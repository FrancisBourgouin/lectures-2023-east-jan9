(function () {
  console.log("I LIKE POTATOES");
})();

// IIFE != IFFY
// Immediatly Invoked Function Expression

// Functions!

// Reusable

const notGreatFunction = function () {
  console.log("Hello");
};

// Not great because it's not reusable
// We can give parameters / arguments

const betterFunction = function (message) {
  console.log(message);
};

// When we have generic tasks (looping)
// Make a generic action

const genericFunction = function (list, action) {
  for (const item of list) {
    action(item);
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

genericFunction([1, 2, 3, 4], logToConsole);

genericFunction(["Bob", "Robert"], logToConsole);
