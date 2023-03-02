import useFormData from "../hooks/useForm";

export default function RepoForm(props) {
  const initialValues = {
    owner: "",
    repo: "",
  };
  const { formData, handleChange, handleSubmit } = useFormData(
    initialValues,
    props.onSubmit
  );
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="owner"
        placeholder="Enter owner name"
        value={formData.owner}
        onChange={handleChange}
      />
      <input
        type="text"
        name="repo"
        placeholder="Enter repo name"
        value={formData.repo}
        onChange={handleChange}
      />
      <button>Fetch commits!</button>
    </form>
  );
}
