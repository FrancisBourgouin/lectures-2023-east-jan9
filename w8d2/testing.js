// Testing in JS !

// Homemade
// Mocha / Chai
// Storybook
// Jest
// ESLint

// Static Testing
// Unit Testing
// Integration Testing ( Integration Hell )
// End to End Testing

const addTwoNumbers = (a, b) => a + b;

// Mocking? Mockingbird

// Promise

someFunctionThatReturnsAPromise()
  .then((res) => res.data)
  .then((data) => console.log(data))
  .catch((err) => console.log(error))
  .finally(() => console.log("All done"));

const asyncFunction = async () => {
  try {
    const result = await someFunctionThatReturnsAPromise();
  } catch (error) {
    return error;
  }

  console.log(result.data);

  return "bob";
};

// await Promise.all([])

Promise.all([
  axios.get("/api/days"),
  axios.get("/api/appointments"),
  axios.get("/api/interviewers"),
]).then(resArray);

axios.get("/api/days").then((res) => res.data);
axios.get("/api/appointments").then((res) => res.data);
axios.get("/api/interviewers").then((res) => res.data);

axios
  .get("/api/days")
  .then((res) => {
    setState({ ...state, days: res.data });
    return axios.get("/api/appointments");
  })
  .then((res) => axios.get("/api/interviewers"));

bookInterview()
  .then((interview) => {
    return apppointmentObj;
  })
  .then((apppointmentObj) => {});
