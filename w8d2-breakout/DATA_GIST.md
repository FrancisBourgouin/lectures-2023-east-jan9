# Object and array manipulations

It is important to be comfortable with object and array manipulation, because they are the building blocks for bigger data structures.

The following exercices are there to help you with:

- Play with a big data structure as a source
- Create smaller data structures
- Familiarize yourself with loops ( C-style for, for..of, for..in )
- Familiarize yourself with array methods ( .forEach, .map, .filter )

## Source data

The following array of objects is a list of multiple types of metal you can use to forge tools, knifes, damascus blocks, etc.

```js
const metals = [
  {
    name: "1084",
    type: "Carbon Steel",
    composition: {
      iron: 98.08,
      carbon: 0.8,
      manganese: 0.6,
      phosphorus: 0.05,
      sulfur: 0.04,
    },
    forging_min_temp: 900,
    forging_max_temp: 1200,
  },
  {
    name: "1075",
    type: "Carbon Steel",
    composition: {
      iron: 98,
      carbon: 0.7,
      manganese: 0.4,
      phosphorus: 0.05,
      sulfur: 0.04,
    },
    forging_min_temp: 900,
    forging_max_temp: 1200,
  },
  {
    name: "80CrV2",
    type: "Carbon Steel",
    composition: {
      iron: 98.08,
      carbon: 0.75,
      chrome: 0.4,
      molybdenium: 0.1,
      vanadium: 0.15,
      manganese: 0.3,
      phosphorus: 0.025,
      sulfur: 0.025,
    },
    forging_min_temp: 850,
    forging_max_temp: 1100,
  },
  {
    name: "S30V",
    type: "Stainless Steel",
    composition: {
      iron: 98,
      carbon: 0.015,
      chromium: 0.14,
      molybdenium: 0.2,
      vanadium: 0.4,
    },
    forging_min_temp: 975,
    forging_max_temp: 1200,
  },
  {
    name: "420HC",
    type: "Stainless Steel",
    composition: {
      iron: 98,
      carbon: 0.004,
      nickel: 0.5,
      silicon: 0.6,
      chromium: 0.12,
      manganese: 0.01,
    },
    forging_min_temp: 1050,
    forging_max_temp: 1200,
  },
];
```

## Part 1 - Solving the problems in your own way

In the first part, the goal is to solve each problem separately without any specific indications. It is highly suggested that you copy the original data and work out the solution in a separate [repl](https://repl.it) for each question

### Question 1: Create a list of all metals in the collection

```js
`["1084", "1075", "80CrV2", "S30V", "420HC"]`;
```

### Question 2: Create a list of all metals with their type in the collection

```js
[
  "1084 Carbon Steel",
  "1075 Carbon Steel",
  "80CrV2 Carbon Steel",
  "S30V Stainless Steel",
  "420HC Stainless Steel",
];
```

### Question 3: Create an object containing the metals by type

```js
{
  "Carbon Steel": ["1084","1075","80CrV2"],
  "Stainless Steel": ["S30V", "420HC"]
}
```

### Question 4: Create a list of all metals sorted by their carbon concentration (in descending order)

```js
["1084", "80CrV2", "1075", "S30V", "420HC"];
```

### Question 5: Create a list of every element used in the composition of the metals, and store their average concentration

```js
{
  carbon: 0.004,
  chrome: 0.4,
  chromium: 0.12,
  iron: 98,
  manganese:0.01,
  molybdenium: 0.2,
  nickel:0.5,
  phosphorus: 0.025,
  silicon:0.6,
  sulfur: 0.025,
  vanadium:0.4,
}
```

## Part 2 - Solving the questions differently

In this second part, the goal is to solve the same problems of part 1, but using only **for..of** loops we iteration is needed.

### Question 1: Create a list of all metals in the collection

```js
`["1084", "1075", "80CrV2", "S30V", "420HC"]`;
```

### Question 2: Create a list of all metals with their type in the collection

```js
[
  "1084 Carbon Steel",
  "1075 Carbon Steel",
  "80CrV2 Carbon Steel",
  "S30V Stainless Steel",
  "420HC Stainless Steel",
];
```

### Question 3: Create an object containing the metals by type

```js
{
  "Carbon Steel": ["1084","1075","80CrV2"],
  "Stainless Steel": ["S30V", "420HC"]
}
```

### Question 4: Create a list of all metals sorted by their carbon concentration (in descending order)

```js
["1084", "80CrV2", "1075", "S30V", "420HC"];
```

### Question 5: Create a list of every element used in the composition of the metals, and store their average concentration

```js
{
  carbon: 0.004,
  chrome: 0.4,
  chromium: 0.12,
  iron: 98,
  manganese:0.01,
  molybdenium: 0.2,
  nickel:0.5,
  phosphorus: 0.025,
  silicon:0.6,
  sulfur: 0.025,
  vanadium:0.4,
}
```

## Part 3 - Solving the questions differently

In this second part, the goal is to solve the same problems of part 1, but using only **for..in** loops we iteration is needed.

### Question 1: Create a list of all metals in the collection

```js
`["1084", "1075", "80CrV2", "S30V", "420HC"]`;
```

### Question 2: Create a list of all metals with their type in the collection

```js
[
  "1084 Carbon Steel",
  "1075 Carbon Steel",
  "80CrV2 Carbon Steel",
  "S30V Stainless Steel",
  "420HC Stainless Steel",
];
```

### Question 3: Create an object containing the metals by type

```js
{
  "Carbon Steel": ["1084","1075","80CrV2"],
  "Stainless Steel": ["S30V", "420HC"]
}
```

### Question 4: Create a list of all metals sorted by their carbon concentration (in descending order)

```js
["1084", "80CrV2", "1075", "S30V", "420HC"];
```

### Question 5: Create a list of every element used in the composition of the metals, and store their average concentration

```js
{
  carbon: 0.004,
  chrome: 0.4,
  chromium: 0.12,
  iron: 98,
  manganese:0.01,
  molybdenium: 0.2,
  nickel:0.5,
  phosphorus: 0.025,
  silicon:0.6,
  sulfur: 0.025,
  vanadium:0.4,
}
```

## Part 4 - Solving the questions differently

In this second part, the goal is to solve the same problems of part 1, but using only the **forEach** method where iteration is needed.

### Question 1: Create a list of all metals in the collection

```js
`["1084", "1075", "80CrV2", "S30V", "420HC"]`;
```

### Question 2: Create a list of all metals with their type in the collection

```js
[
  "1084 Carbon Steel",
  "1075 Carbon Steel",
  "80CrV2 Carbon Steel",
  "S30V Stainless Steel",
  "420HC Stainless Steel",
];
```

### Question 3: Create an object containing the metals by type

```js
{
  "Carbon Steel": ["1084","1075","80CrV2"],
  "Stainless Steel": ["S30V", "420HC"]
}
```

### Question 4: Create a list of all metals sorted by their carbon concentration (in descending order)

```js
["1084", "80CrV2", "1075", "S30V", "420HC"];
```

### Question 5: Create a list of every element used in the composition of the metals, and store their average concentration

```js
{
  carbon: 0.004,
  chrome: 0.4,
  chromium: 0.12,
  iron: 98,
  manganese:0.01,
  molybdenium: 0.2,
  nickel:0.5,
  phosphorus: 0.025,
  silicon:0.6,
  sulfur: 0.025,
  vanadium:0.4,
}
```

## Part 5 - Solving the questions differently

In this second part, the goal is to solve the same problems of part 1, but using only the **map, filter & reduce** methods where iteration is needed.

### Question 1: Create a list of all metals in the collection

```js
`["1084", "1075", "80CrV2", "S30V", "420HC"]`;
```

### Question 2: Create a list of all metals with their type in the collection

```js
[
  "1084 Carbon Steel",
  "1075 Carbon Steel",
  "80CrV2 Carbon Steel",
  "S30V Stainless Steel",
  "420HC Stainless Steel",
];
```

### Question 3: Create an object containing the metals by type

```js
{
  "Carbon Steel": ["1084","1075","80CrV2"],
  "Stainless Steel": ["S30V", "420HC"]
}
```

### Question 4: Create a list of all metals sorted by their carbon concentration (in descending order)

```js
["1084", "80CrV2", "1075", "S30V", "420HC"];
```

### Question 5: Create a list of every element used in the composition of the metals, and store their average concentration

```js
{
  carbon: 0.004,
  chrome: 0.4,
  chromium: 0.12,
  iron: 98,
  manganese:0.01,
  molybdenium: 0.2,
  nickel:0.5,
  phosphorus: 0.025,
  silicon:0.6,
  sulfur: 0.025,
  vanadium:0.4,
}
```

## Part 6

### Question 1: In the first question, what would be more appropriate between a for..of, a forEach and map ?

Why ?

### Question 2: In the second question, what would be more appropriate between a for..of, a forEach and map ?

Why ?

### Question 3: In the third question, what would be more appropriate between a for..of, a forEach and map ?

Why ?

### Question 4: In the fourth question, after sorting, what would be more appropriate between a for..of, a forEach and map ?

Why ?

### Question 5: In the fifth question, what would be more appropriate between a for..of, a forEach and map ?

Why ?
