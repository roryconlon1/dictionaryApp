// import './App.css';
// import { useEffect, useState } from 'react';
// import DisplayWord from './components/DisplayedWord';
// import { getFavourites, postFavourite } from "./DbService"

// function App() {

//   const [words, setWords] = useState([]);
//   const [searchWord, setSearchWord] = useState([]);
//   const [favouriteWord, setFavouriteWord] = useState([]);
//   const [formData, setFormData] = useState({
//     word: ""
//   })

//   useEffect(() => {
//     getFavourites().then((allFaves) => {
//       setFavouriteWord(allFaves)
//     })
//   })

//   const getWords = () => {
//     fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + searchWord)
//       .then(res => res.json())
//       .then(data => setWords(data))
//   }

//   // const getFavouritesDef = () => {
//   //   fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + favouriteWord)
//   //   .then(res => res.json())
//   //   .then(data => setFavouriteWord(data))
//   // }

//   const handleChange = (event) => {
//     setSearchWord(event.target.value)
//     const newFormData = Object.assign({}, formData);
//     newFormData[event.target.name] = event.target.value;
//     setFormData(newFormData);
//   }

//   const addWord = (word) => {
//     const temp = favouriteWord.map(s => s);
//     temp.push(word);
//     setFavouriteWord(temp);
//   }


//   const onClick = (event) => {
//     event.preventDefault();
//     postFavourite(formData)
//         .then((data) => {
//             addWord(data);
//         })
//   }

//   const onFaveClick = () => {
//     setFavouriteWord()
//   }



//   const helloWord = words.map((hello, index) => {
//     return <div key={index}><h2>{index + 1}. &nbsp; {hello.word}</h2>
//       <i><p>{hello.meanings[0].definitions[0].definition}</p></i>
//       <button onClick={onClick}>Add to Favourites!</button>
//     </div>
//   })

//   // const favourites = favouriteWord.map((word, index) => {
//   //   return <h1>{word.meanings[0].definitions[0].definition}</h1>
//   // })

//     const favourites = favouriteWord.map((word, index) => {
//     return <div>{word.word}</div>
//   })


//   return (
//     <div className="App">
//       <h1>Dictionary Word Definitions</h1>
//       <input type="text" onChange={handleChange} name="word"/>
//       <button name="search" onClick={getWords}>Search</button>
//       {helloWord}
//       {/* <DisplayWord words={words}/> */}
//       <h1>Favourite Words:</h1>
//       <button>Show Fav</button>
//       {favourites}
//     </div>
//   );
// }

// export default App;
