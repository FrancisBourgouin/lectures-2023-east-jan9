const parentFunction = () => {
  const data = { amount: 500 };

  const showData = () => console.log(data);
  const addMonay = (amount) => (data.amount += amount);

  return [showData, addMonay];
};

const [showData, addMonay] = parentFunction();

const addALotOfMoney = (list) => {
  for (const amount of list) {
    addMonay(amount);
  }
};

showData();

addALotOfMoney([100, 200, 500, 10000000]);

showData();

const App = () => {
  const [tweets, setTweets] = useState([]);

  const addNewTweet = (tweetData) => setTweets([...tweets, tweetData]);

  return <TweetForm addNewTweet={addNewTweet} />;
};
