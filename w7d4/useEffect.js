// componentDidMount / componentWillUnmount / componenDidChange
// Old React Way, we had lifecycle methods
// Very easy to compare the old way with the new

// UseEffect will run everytime the component is rendered
// Unless there is a dependency array

useEffect(() => {}); // Runs every render

useEffect(() => {}, []); // Runs when something in the watchlist changes (dependency array)

// BAD TIME INCOMING !

const [weatherData, setWeatherData] = useState(null);
const [currentCity, setCurrentCity] = useState(null);
const [cityList, setCityList] = useState([]);

useEffect(() => {
  console.log(currentCity);
  setCityList([...cityList, currentCity]);
}, [weatherData]);

useEffect(() => {
  if (currentCity !== null) {
    // axios....
    setWeatherData(data);
  }
}, [currentCity]);

const updateCurrentCity = (formData) => setCurrentCity(formData.city);
