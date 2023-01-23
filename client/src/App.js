import './App.css';
import { useEffect, useState } from 'react';
import DisplayedWord from './components/DisplayedWord';
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

  const deleteFavourite = (id) => {
    const temp = favouriteWord.map(s =>s);
    const indexToDel = temp.map(s => s._id).indexOf(id);
    temp.splice(indexToDel, 1);
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

  return (
    <div className="App">
      <h1>Dictionary Word Definitions</h1>
      <input type="text" onChange={handleChange} />
      <button name="search" onClick={getWords}>Search</button>
      <DisplayedWord words={words} onClick={onClick} favouriteWord={favouriteWord} deleteFavourite={deleteFavourite}/>
    </div>
  );
}

export default App;
