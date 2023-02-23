// PROPS: cityName
// NO STATE

export default function CityHistoryListItem(props) {
  const { cityName } = props;
  return (
    <li>
      <button>{cityName}</button>
    </li>
  );
}
