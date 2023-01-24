// Callbacks / async
//

// Why do we want to use parameters in a function?
// More reusable
// Less hardcoding
// Readable

// Why do we want to use callbacks?
// Custom actions
// Managing asynchronous actions

const someHigherOrderFunction = (list, callbackAction) => {
  for (const element of list) {
    callbackAction(element, list); // We don't know yet
  }
};

const someList = [1, 2, 3];
const someAction = (element) => console.log("The element is: ", element);

someHigherOrderFunction(someList, someAction);
someHigherOrderFunction(someList, console.log);

// Async => Multitasking, no blocking, waiting for interaction
// JS (event driven) was made for the browser

// USB (polling) or PS/2 (interrupt)

// setTimeout(() => console.log("Hello! 1"), 1000);
// setTimeout(() => console.log("Hello! 2"), 1000);
// setTimeout(() => console.log("Hello! 3"), 1000);

// let bob = "Pequeno Pollo de la Pampa"; // Set bob to ""
// console.log(bob);

// setTimeout(() => console.log(bob), 0); // Set a timer to run the callback after one sec

// bob = "A sad pollo"; // Change bob to a new string
// // setTimeout(() => {
// // }, 1500);

// setTimeout(() => {
//   console.log(bob);
//   bob = "A Sad Pollo";
//   setTimeout(() => {
//     console.log(bob);
//   }, 1000);
// }, 1000);

// let number = 1;

// number += 2;

// console.log(number);

// number += 5;

// console.log(number);
// Wait for events (After everything that is synchronous)
// Timeout event is triggered
// Run the callback

// Try / Catch

let number = 5;
number = "Mwahahahahah"; // Error, logical error, something that will cause problems down the line
const bob = "bob";

try {
  setTimeout(() => (bob = "bobby"), 1000);
  // bob = "robert"; //Error, Exception irrecuperable error (THREW AN ERROR)
} catch (error) {
  console.log(error.name, error.message);
  console.log("OH NO, I did a booboo");
}

// CATCH IT

console.log("code is done");

setTimeout(() => {
  try {
    bob = "bobby";
  } catch (e) {
    console.log(e.name);
  }
}, 1000);

// 1- Set a variable number to 5
// 2- change the value to "mwhahahaha"
// 3- Open up a try/catch block
// 4-   create a const bob with the value bob
// 5-   start a timeout that will run a callback (cb1)
// 6- End the try part
// 7- Skip the catch part because there is no error
// 8- Console log code is done
// 9- END OF SYNCHRONOUS CODE
// 10- Wait
// 11- Run the callback cb1
// 12- 🔥🔥🔥🔥🔥🔥🔥🔥🔥 (because trying to assign to a constant)
