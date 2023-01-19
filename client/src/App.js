import './App.css';
import { useState } from 'react';
import DisplayWord from './components/DisplayedWord';

function App() {

  const [words, setWords] = useState([]);
  const [searchWord, setSearchWord] = useState([]);

  const getWords = () => {
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + searchWord)
    .then(res => res.json())
    .then(data => setWords(data))
  }

  const handleChange = (event) => {
      setSearchWord(event.target.value)
  }


  return (
    <div className="App">
      <h1>Dictionary Word Definitions</h1>
      <input type="text" onChange={handleChange}/>
      <button name="search" onClick={getWords}>Search</button>
      <DisplayWord words={words}/>
    </div>
  );
}

export default App;
