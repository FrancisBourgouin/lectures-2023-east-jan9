// PROPS weatherData obj
// NO STATE

// temperature: weatherData.main.temp,
// conditions: weatherData.weather[0].description,
// city: weatherData.name,

export default function CurrentWeather(props) {
  const { weatherData } = props;

  const temperature = Math.round(weatherData.main.temp - 273.15);
  const conditions = weatherData.weather[0].description;
  const name = weatherData.name;

  return (
    <section>
      <h1>Current weather for {name}</h1>
      <p>It is currently {temperature} °C</p>
      <p>And the condition are: {conditions}</p>
    </section>
  );
}
