// Pantry & Orders

const pantry = [
  { name: "Chocolate", icon: "🍫", description: "Stale chocolate" },
  { name: "Cookie", icon: "🍪", description: "Very soft cookie" },
  { name: "Tuna", icon: "🎣", description: "It's in a can" },
  { name: "Pasta", icon: "🍝", description: "Ready to reheat!" },
  { name: "Potato", icon: "🥔", description: "Happy potato" },
];

const ashleysRun = ["🎣", "🍝"];

const youssefsRun = [
  { name: "Tuna", icon: "🎣", description: "It's in a can" },
  { name: "Potato", icon: "🥔", description: "Sad but happy potato" },
];

// Same problems that we have with repetition in databases

// Selectors:

const generateRunInfo = (run) => {
  const parsedData = [];

  for (const icon of run) {
    parsedData.push(pantry.find((item) => item.icon === icon));
  }

  return parsedData;
};

const bob = generateRunInfo(ashleysRun);

console.log(bob);
pantry[2].description = "not in a can!";
console.log(bob);

bob[0].name = "WAGAGAGAGAGAGA";
console.log(pantry);
