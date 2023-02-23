export default function NewButtonForm(props) {
  const initialValues = { name: "", value: "", isClicked: "" };

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
      <input type="text" name="name" onChange={handleChange} value={formData.name} />
      <input type="text" name="value" onChange={handleChange} value={formData.value} />
      <input
        type="text"
        name="isClicked"
        onChange={handleChange}
        value={formData.isClicked}
      />
    </form>
  );
}
