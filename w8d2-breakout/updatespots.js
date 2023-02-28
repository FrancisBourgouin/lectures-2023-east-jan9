// Immutable data patterns

const days = [
  {
    id: 1,
    name: "Monday",
    appointments: [1, 2],
    interviewers: [1, 2],
    spots: 0,
  },
];

const appointments = {
  1: {
    id: 1,
    time: "12pm",
    interview: {
      student: "Lydia Miller-Jones",
      interviewer: 1,
    },
  },
  2: {
    id: 2,
    time: "1pm",
    interview: null,
  },
  3: {
    id: 3,
    time: "2pm",
    interview: null,
  },
};

const interviewers = {
  1: {
    id: 1,
    name: "Sylvia Palmer",
    avatar: "https://i.imgur.com/LpaY82x.png",
  },
  2: {
    id: 2,
    name: "Tori Malcolm",
    avatar: "https://i.imgur.com/Nmx0Qxo.png",
  },
};

const state = {
  day: "Monday",
  days,
  appointments,
  interviewers,
};

// UPDATE SPOTS ! YEAH !

// 1- FUDGE IT, LETS POKE THE API AGAIN (BAD!)
//    Excessive use of data
//    Desync of state for a undefined of time
//    What if you switch to offline version

// 2- Brute force that thingy (++, --, nothing)
//    Not the best, but not the worst
//    Doesn't account for batch editing
//    Superfluous amount of functions

// 3- DATA STRUCTURE MAGIIIC YEAH

// What is the meaning of spots?
// Number of free appointments
// Free appointment, when the interview key has a null value

// // Find the current day first
// const currentDay = state.days.find((day) => day.name === state.day);

// // Find the appointments for day
// const listOfAppointments = currentDay.appointments.map((id) => state.appointments[id]);

// // Find the empty appointments
// const listOfEmptyAppointments = listOfAppointments.filter(
//   (app) => app.interview === null
// );

// // Get the number of spots
// const spots = listOfEmptyAppointments.length;

// // NUMBER OF SPOTS IS FOUND YEAH

// const newCurrentDay = { ...currentDay, spots };
// const newDays = [...state.days];
// const indexOfTheDayThatIWantToChange = newDays.findIndex((day) => day.name === state.day);

// newDays[indexOfTheDayThatIWantToChange] = newCurrentDay;

// const newState = { ...state, days: newDays };

// console.log(state);
// console.log(newState);

const updateSpots = (state) => {
  const currentDay = state.days.find((day) => day.name === state.day);
  const currentDayIndex = newDays.findIndex((day) => day.name === state.day);

  const listOfAppointments = currentDay.appointments.map((id) => state.appointments[id]);
  const listOfEmpty = listOfAppointments.filter((app) => app.interview === null);

  const spots = listOfEmpty.length;

  const newCurrentDay = { ...currentDay, spots };

  const newDays = [...state.days];
  newDays[currentDayIndex] = newCurrentDay;

  const newState = { ...state, days: newDays };

  return newState;
};

bookInterview = (id, interiew) => {
  const newAppointments = {};

  const newState = { ...state, appointments: newAppointments };

  const newNewState = updateSpots(newState);

  setState(newNewState);
};
