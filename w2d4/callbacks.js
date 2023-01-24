const grindBeans = (nextStepAction) => {
  // ...
  console.log("Grinding beans");
  const isSuccess = Math.random() > 0.2;

  setTimeout(() => {
    try {
      if (isSuccess) {
        console.log("*Empty grind hopper noises*");
        nextStepAction(isSuccess);
      } else {
        throw new Error("Rocks in the coffee bean");
      }
    } catch (error) {
      console.log("Oh no :( No coffee");
      nextStepAction(isSuccess);
    }
  }, 1000);
};

const tampGrounds = (nextStepAction) => {
  // ...
  console.log("Squish it");
  setTimeout(() => {
    console.log("Looks like a nice puck");
    nextStepAction();
  }, 500);
};

const machineOn = (nextStepAction) => {
  // ...
  console.log("Happy espresso machine noises");

  setTimeout(() => {
    console.log("Click off");
    nextStepAction();
  }, 2000);
};

const enjoyCoffee = () => {
  // ...
  console.log("*slurps super hard*");
  setTimeout(() => {
    console.log("MIAM MIAM");
  }, 1000);
};

// grindBeans(() => {
//   tampGrounds(() => {
//     machineOn(() => {
//       enjoyCoffee();
//     });
//   });
// });

// grindBeans((isSuccess) => {
//   if(isSuccess){
//     tampGrounds((isSuccess) => {
//       if(isSuccess){
//         machineOn((isSuccess) => {
//           if(isSuccess){
//             enjoyCoffee()
//           } else {
//             console.log("Dang it let's remove rocks")
//           })
//       } else {
//         console.log("Dang it let's remove rocks")
//       })
//   } else {
//     console.log("Dang it let's remove rocks")
//   }
// });
