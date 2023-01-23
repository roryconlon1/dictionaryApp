import './App.css';
import { useEffect, useState } from 'react';
import DisplayWord from './components/DisplayedWord';
import { getFavourites, postFavourite } from "./DbService"

function App() {

  const [words, setWords] = useState([]);
  const [searchWord, setSearchWord] = useState([]);
  const [favouriteWord, setFavouriteWord] = useState([]);
  const [formData, setFormData] = useState({
  })

  useEffect(() => {
    getFavourites().then((allFaves) => {
      setFavouriteWord(allFaves)
    })
  })

  const getWords = () => {
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + searchWord)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('Something went wrong');
      })
      .then(data => setWords(data))
      .catch((error) => {
        console.log(error)
    })
  }

  const handleChange = (event) => {
    setSearchWord(event.target.value)
  }

  const addWord = (word) => {
    const temp = favouriteWord.map(s => s);
    temp.push(word);
    setFavouriteWord(temp);
  }


  const onClick = (event) => {
    event.preventDefault()
    words.map((word) => {
      const newFormData = Object.assign({}, word);
      setFormData(newFormData);
      console.log(newFormData);
      event.preventDefault();
      postFavourite(newFormData)
      .then((data) => {
        addWord(data);
      })
      setFormData({})
    })
  }

const handleSearch = () => {
  getWords();
}

  const helloWord = words.map((hello, index) => {
    return hello.word ? 
    <div key={index}><h2 name="word">{index + 1}. &nbsp; {hello.word}</h2>
      <i><p name="def">Definition: &nbsp; {hello.meanings[0].definitions[0].definition}</p></i>
      {/* <button onClick={onClick}>Add to Favourites!</button> */}
    </div> : <h1>Naw</h1>
  })

  const favourites = favouriteWord.map((word, index) => {
    return <div key={index}> 
    <h2>{index + 1}. &nbsp;{word.word}</h2>
    <i><p>Definition: &nbsp; {word.meanings[0].definitions[0].definition}</p></i>
    </div>
  })

const favourite = words.length > 0?  <button onClick={onClick}>Add to Favourites!</button> : null

  return (
    <div className="App">
      <h1>Dictionary Word Definitions</h1>
      <input type="text" onChange={handleChange} />
      <button name="search" onClick={handleSearch}>Search</button>
      {helloWord}
      {favourite}
      {/* <button onClick={onClick}>Add to Favourites!</button> */}
      <h1>Favourite Words:</h1>
      {favourites}
    </div>
  );
}

export default App;
