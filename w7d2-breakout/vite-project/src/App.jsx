import { useState } from "react";

import "./App.css";
import TweetForm from "./TweetForm";

function App() {
  const [tweets, setTweets] = useState([{ id: 1 }, { id: 2 }]);

  const addNewTweet = (tweetData) => {
    setTweets([...tweets, tweetData]);
    // refreshTweetList()
  };
  const addARandomTweet = () => {};

  return (
    <div className="App">
      <h1>HI I AM APP</h1>
      <h2>I HAVE {tweets.length} TWEETS</h2>
      <TweetForm addNewTweet={addNewTweet} />
    </div>
  );
}

export default App;
