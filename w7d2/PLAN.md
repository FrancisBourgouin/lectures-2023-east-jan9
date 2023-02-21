# Watering Plant App

Show a list of plants, with their name, type, last watered and a warning if they are dangerously dry.

## Data

## Plant

```jsx
const plant = {
  id: "",
  name: "",
  type: "",
  lastWatered: "date",
  wateringInterval: 0,
};
```

## Plants

```jsx
const plants = [plant, plant]; // Good since we don't have to modify

const plants = { id: plant, id: plant }; // Overkill if we chose it
```

## Seed

```jsx
const plant1 = {
  id: "1",
  type: "Monsterous plant",
  name: "Monstera",
  lastWatered: "2023-02-20",
  wateringInterval: 7,
};
const plant2 = {
  id: "2",
  type: "Paper or real?",
  name: "Tulips",
  lastWatered: "2023-02-10",
  wateringInterval: 4,
};
const plant3 = {
  id: "3",
  type: "Blossoms are nice",
  name: "Cherry",
  lastWatered: "2023-01-20",
  wateringInterval: 60,
};
const plant4 = {
  id: "4",
  type: "GIMME THAT",
  name: "Money Tree",
  lastWatered: "2020-01-20",
  wateringInterval: 1000,
};

const plants = [plant1, plant2, plant3, plant4];
```

## Structure

### HTML

- body
  - header
    - h1 Title of App
  - main
    - section
      - h1 Title of section (all plants)
      - article
        - h1 Name of plant
        - p type of plant
        - p last watered date
        - border red/green for happy/sad plant

### Components

- App
  - Header
  - PlantList
    - PlantListItem

### Component Data

- App (plantData)
  - Header (amount of plants)
  - PlantList (plants)
    - PlantListItem (singular plant)

App setDay
DayList setDay
DayListItem setDay fct??
