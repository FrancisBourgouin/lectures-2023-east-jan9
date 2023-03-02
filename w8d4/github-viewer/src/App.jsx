import { Component } from "react";
import axios from "axios";

import Header from "./components/Header";
import RepoForm from "./components/RepoForm";
import CommitList from "./components/CommitList";

import "./App.css";
import Spy from "./components/Spy";

class App extends Component {
  constructor(props) {
    super(props);

    this.bob = "bob";

    this.state = {
      commitData: null,
      isFound: false,
    };
  }

  spyFound = () => this.setState({ ...this.state, isFound: true });

  fetchCommits = (formData) => {
    const URL = `https://api.github.com/repos/${formData.owner}/${formData.repo}/commits`;
    axios
      .get(URL)
      .then((res) => res.data)
      .then((data) => this.setState({ ...this.state, commitData: data }));
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Spy spyFound={this.spyFound} />
        <main>
          <RepoForm onSubmit={this.fetchCommits} />
          {this.state.commitData && <CommitList commitData={this.state.commitData} />}
        </main>
      </div>
    );
  }
}

export default App;
