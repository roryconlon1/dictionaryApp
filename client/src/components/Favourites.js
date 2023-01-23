import React from "react";

const Favourites = ({ favouriteWord }) => {

    const favourites = favouriteWord.map((word, index) => {
        return <div key={index}>
            <h2>{index + 1}. &nbsp;{word.word}</h2>
            <i><p>Definition: &nbsp; {word.meanings[0].definitions[0].definition}</p></i>
        </div>
    })

    const handleDelete = () => {
        
    }

    return (
        <div>
            <h1>Favourite Words:</h1>
            {favourites}
        </div>
    )
}

export default Favourites;