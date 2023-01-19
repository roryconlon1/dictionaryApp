import React from "react";
import Favourites from "./Favourites";

const DisplayedWord = ({words}) => {

    const helloWord = words.map((hello, index) => {
        return <div key={index}><h2>{index + 1}. &nbsp; {hello.word}</h2>
        <i><p>{hello.meanings[0].definitions[0].definition}</p></i>
        <button>Add to Favourites!</button>
        </div>
      })

    return(
        <div>
            {helloWord}
            <div>
                <Favourites/>
            </div>
        </div>
    )
}

export default DisplayedWord;