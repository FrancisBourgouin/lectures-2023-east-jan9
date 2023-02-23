// PROPS : Array of cities (CityList)
// NO STATE

import CityHistoryListItem from "./CityHistoryListItem";

export default function CityHistoryList(props) {
  const { cityList } = props;

  const parsedCities = cityList.map((cityName) => (
    <CityHistoryListItem key={cityName} cityName={cityName} />
  ));

  return (
    <section>
      <h1>Previously searched cities</h1>
      <ul>
        {/* PROPS: cityName */}
        {parsedCities}
      </ul>
    </section>
  );
}
