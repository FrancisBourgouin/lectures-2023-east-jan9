import { Component } from "react";

export default class RepoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      owner: "",
      repo: "",
    };

    // this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ ...this.state, [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="owner"
          placeholder="Enter owner name"
          value={this.state.owner}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="repo"
          placeholder="Enter repo name"
          value={this.state.repo}
          onChange={this.handleChange}
        />
        <button>Fetch commits!</button>
      </form>
    );
  }
}

// function() {
//   // THIS is bound to the definition
// }

// () => {
//   // THIS is bound to where it's run
// }
