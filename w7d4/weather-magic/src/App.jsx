import { useState, useEffect } from "react";
import axios from "axios";

import Header from "./components/Header";
import CityNameSearch from "./components/CityNameSearch";
import CityHistoryList from "./components/CityHistoryList";
import CurrentWeather from "./components/CurrentWeather";
import Spy from "./components/Spy";

import "./App.css";

import data from "./data/weatherData";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [cityList, setCityList] = useState([]);

  // ASYNC CODE => SYNC FIRST, THEN ASYNC

  useEffect(() => {
    const API = "09fd719b4b698ec0260e424f83378e3d";
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${"Montréal"}&appid=${API}`;
    axios
      .get(URL)
      .then((res) => res.data)
      .then(setWeatherData)
      .catch((err) => {
        console.log(err);
        setWeatherData(null);
      });
  }, []);

  const fetchWeatherByCity = (formData) => {
    const API = "09fd719b4b698ec0260e424f83378e3d";
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${formData.city}&appid=${API}`;

    axios
      .get(URL)
      .then((res) => res.data)
      .then(setWeatherData)
      .then(() => {
        if (!cityList.includes(formData.city)) {
          setCityList([...cityList, formData.city]);
        }
      })
      .catch((err) => {
        console.log(err);
        setWeatherData(null);
      });
  };

  const report = (event) => {
    console.log(`App Spy - Target clicked at: ${event.clientX}, ${event.clientY}`);
  };

  useEffect(() => {
    document.addEventListener("click", report);
    console.log("CITYLIST CHANGED !");

    // Cleanup of the effect
    return () => document.removeEventListener("click", report);
  }, [cityList]);

  return (
    <div className="App">
      <Header />
      <main>
        {/* PROPS : onSubmit */}
        <CityNameSearch onSubmit={fetchWeatherByCity} />

        {/* PROPS : Array of cities (CityList) */}
        <CityHistoryList cityList={cityList} />

        {/* PROPS weatherData obj */}
        {weatherData && <CurrentWeather weatherData={weatherData} />}
      </main>
    </div>
  );
}

export default App;
