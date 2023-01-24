// What is a promise ?

// About the future => Future thing
// Successful fulfillement then
// Unsuccessful fulfillement catch
// They always finish finally

const grindBeans = () => {
  // ...
  console.log("Grinding beans");
  const isSuccess = Math.random() > 0.2;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        if (isSuccess) {
          resolve("*Empty grind hopper noises*");
        } else {
          throw new Error("Rocks in the coffee bean");
        }
      } catch (error) {
        reject(error);
      }
    }, 1000);
  });
};

const tampGrounds = () => {
  // ...
  console.log("Squish it");
  const isSuccess = Math.random() > 0.2;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isSuccess) {
        resolve("Looks like a nice puck");
      } else {
        reject("You tamped too hard");
      }
    }, 500);
  });
};

const machineOn = () => {
  // ...
  console.log("Happy espresso machine noises");
  const isSuccess = Math.random() > 0.5;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isSuccess) {
        resolve("Click off");
      } else {
        reject("STEAM AND WATER EVERYWHERE OMG");
      }
    }, 2000);
  });
};

const enjoyCoffee = () => {
  // ...
  console.log("*slurps super hard*");
  const isSuccess = Math.random() > 0.5;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isSuccess) {
        resolve("MIAM MIAM");
      } else {
        reject("OH DANG SO HOT OUCH");
      }
    }, 1000);
  });
};

grindBeans()
  .then(console.log)
  .then(tampGrounds)
  .then(console.log)
  .then(machineOn)
  .then(console.log)
  .then(enjoyCoffee)
  .then(console.log)
  .catch(console.log)
  .finally(() => console.log("Well that was an experience."));

// LOADING SPINNER
// WORK
// END SPINNER

// const fctWithCB = (action) => {
//   console.log("do the action!");
//   action();
// };

// const logAMessage = () => console.log("message");

// fctWithCB(logAMessage);

// someFct((a,b,c,d) => someOtherFunction(a,b,c,d))
