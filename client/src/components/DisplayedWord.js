import React from "react";
import Favourites from "./Favourites";

const DisplayedWord = ({ words, onClick, favouriteWord, deleteFavourite }) => {

    const helloWord = words.map((word, index) => {
        return (
            <div key={index}><h2>{index + 1}. &nbsp; {word.word}</h2>
                <i><p>Definition: &nbsp; {word.meanings[0].definitions[0].definition}</p></i>
            </div>
        )
    })

    const favouriteButton = words.length > 0 ? <button onClick={onClick}>Add to Favourites!</button> : null

    return (
        <div>
            {helloWord}
            {favouriteButton}
            <div>
                <Favourites favouriteWord={favouriteWord} deleteFavourite={deleteFavourite}/>
            </div>
        </div>
    )
}

export default DisplayedWord;