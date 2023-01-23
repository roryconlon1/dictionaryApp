import React from "react";
import styled from 'styled-components';

const FavouriteList = styled.h2`
padding-top: 50px;`

const Favourites = ({ favouriteWord }) => {

    const favourites = favouriteWord.map((word, index) => {
        return <div key={index}>
            <h3>{index + 1}. &nbsp;{word.word}</h3>
            <i><p>Definition: &nbsp; {word.meanings[0].definitions[0].definition}</p></i>
        </div>
    })

    return (
        <div>
            <FavouriteList>Favourite Words:</FavouriteList>
            {favourites}
        </div>
    )
}

export default Favourites;