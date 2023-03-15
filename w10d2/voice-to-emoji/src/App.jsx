import logo from './logo.svg';
import './App.css';

import "@tensorflow/tfjs"
import * as speechCommands from "@tensorflow-models/speech-commands"
import { useState } from 'react';


const createModel = async () => {
  const URL = "http://localhost:3000/model/"
  const checkpointURL = URL + "model.json"; // model topology
  const metadataURL = URL + "metadata.json"; // model metadatanpm s

  const recognizer = speechCommands.create(
      "BROWSER_FFT", // fourier transform type, not useful to change
      undefined, // speech commands vocabulary feature, not useful for your models
      checkpointURL,
      metadataURL);

  // check that model and metadata are loaded via HTTPS requests.
  await recognizer.ensureModelLoaded();

  return recognizer;
}

const options = {
  includeSpectrogram: true, // in case listen should return result.spectrogram
  probabilityThreshold: 0.55,
  invokeCallbackOnNoiseAndUnknown: true,
  overlapFactor: 0.50 // probably want between 0.5 and 0.75. More info in README
}

const listen = async (options,callback) => {
  const recognizer = await createModel();
  const classLabels = recognizer.wordLabels(); // get class labels

  // listen() takes two arguments:
  // 1. A callback function that is invoked anytime a word is recognized.
  // 2. A configuration object with adjustable fields
  recognizer.listen(result => {
      const scores = Array.from(result.scores); // probability of prediction for each class
      // render the probability scores per class
      // console.log(scores)
      // console.log(classLabels)

      const biggestNumber = Math.max(...scores)
      const biggestNumberIndex = scores.indexOf(biggestNumber)

      biggestNumberIndex !== 0 && callback(biggestNumberIndex)
      // biggestNumberIndex !== 0 && console.log(classLabels[biggestNumberIndex])

  }, options);

  // Stop the recognition in 5 seconds.
  // setTimeout(() => recognizer.stopListening(), 5000);
}


const someScores = [
  0.02207260951399803,
  0.13634297251701355,
  0.007124750874936581,
  0.04002617299556732,
  0.018086008727550507,
  0.01805487461388111,
  0.7582927346229553
]

const boringLabels = [
  "Bruit de fond",
  "Cowabunga",
  "Fromage",
  "Grenouille",
  "Pollo",
  "Potato",
  "Zamboni"
]

const coolLabels = [
  "🙉🙉🙉",
  "🍕🐢🍕",
  "🧀🧀🧀",
  "🐸🐸🐸",
  "🐓🐓🐓",
  "🥔🥔🥔",
  "🚜🧊🏒"
]

const biggestNumber = Math.max(...someScores)
const biggestNumberIndex = someScores.indexOf(biggestNumber)
// Math.max(1,2,3,4,5)
// indexOf


function App() {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <div className="App">
      <header>
        <h1>Super Voice to Emoji ! :D </h1>
      </header>
      <main>
        <h1>{coolLabels[currentIndex]}</h1>
      </main>

      <button onClick={() => listen(options, setCurrentIndex)}>Start listening!</button>
    </div>
  );
}

export default App;
