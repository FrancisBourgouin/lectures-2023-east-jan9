import { useState } from "react";
import axios from "axios";
import useWow from "./hooks/useWow";

import Header from "./components/Header";
import RepoForm from "./components/RepoForm";
import Spy from "./components/Spy";
import CommitList from "./components/CommitList";

import "./App.css";

function App() {
  const [commitData, setCommitData] = useState(null);
  const { sayWow } = useWow();

  const fetchCommits = (formData) => {
    const URL = `https://api.github.com/repos/${formData.owner}/${formData.repo}/commits`;
    axios
      .get(URL)
      .then((res) => res.data)
      .then((data) => setCommitData(data))
      .then(() => sayWow());
  };

  return (
    <div className="App">
      <div className="App">
        <Header />
        <Spy />
        <main>
          <RepoForm onSubmit={fetchCommits} />
          {commitData && <CommitList commitData={commitData} />}
        </main>
      </div>
    </div>
  );
}

export default App;
