// Javascript Classes

// Arrays (Array.isArray)
// Date
// Function
// Object
// Error

// Purpose of a class ? Blueprint

const someArray = new Array();
const someOtherArray = [];

class Chicken {
  constructor(name) {
    this.name = name.toUpperCase();
  }

  sayHi() {
    console.log(`Hola me llamo ${this.name}`);
  }

  defend() {
    console.log("WHAT THE HELL!");

    console.log("*runs away*");
  }
}

class ZeldaChicken extends Chicken {
  constructor(name) {
    super(name); // Call the parent constructor
  }

  defend() {
    console.log("Wait for it...");

    console.log("*epic swarm of chickens comes and attack you*");

    console.log("MWHAHAHAHAHAHA");
  }
}

const bob = new Chicken("Pollo");

const bobby = new ZeldaChicken("Poulet");

// bob.sayHi();

// bob.defend();

// console.log(bob);

console.log(bobby);

bobby.defend();
