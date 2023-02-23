import { useState } from "react";

// PROPS : onSubmit
// STATE : Controlled Form State

export default function CityNameSearch(props) {
  const initialValues = { city: "" };

  const [formData, setFormData] = useState(initialValues);

  const handleChange = (event) => {
    const { value, name } = event.target;

    setFormData({ ...formData, [name]: value });

    // const newFormData = {...formData}
    // newFormData[name] = value
    // setFormData(newFormData)
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onSubmit(formData);

    setFormData(initialValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="city" value={formData.city} onChange={handleChange} />
      <button>Fetch Weather!</button>
    </form>
  );
}

function CityNameSearchSadish(props) {
  const [city, setCity] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onSubmit(city);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="city"
        value={city}
        onChange={(event) => setCity(event.target.value)}
      />
      <button>Fetch Weather!</button>
    </form>
  );
}
