import { useState } from "react";

export default function TweetForm(props) {
  const [tweet, setTweet] = useState(0 || props.id);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(id);
    props.addNewTweet({ id });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="tweet"
        value={tweet}
        onChange={(event) => setTweet(event.target.value)}
      />
      <button>Submit!</button>
    </form>
  );
}
