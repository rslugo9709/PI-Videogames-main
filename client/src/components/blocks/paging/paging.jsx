import React from "react";
import Cards from "../cards/cards";
import { useState } from "react";

function Paging(props){
    const {videogames} = props;
    //console.log("se imprime desde paging");
    //console.log(videogames)
    

    return (
        <div>
            <h1>Welcome to the largest videogame database</h1>
            <button onClick={props.prevHandler}>Prev</button>
            <button onClick={props.nextHandler} >Next</button>
            <p>Game page {props.current}</p>


            <Cards videogames={videogames}/>
        </div>
    )




}


export default Paging;