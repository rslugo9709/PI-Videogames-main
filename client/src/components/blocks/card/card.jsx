import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import style from "./card.module.css"


function Card(props){
    //console.log("imprimimos desde card");
    //console.log(props)
    let generos = "";
    //console.log("se imprimen las props de generos");
    //console.log(props.genres);
    if(props.genres){
        for(let i = 0; i < props.genres.length ; i++){
            //console.log(generos)
    
            generos += props.genres[i].name;
            //console.log(props.genres[i].name)
            if(i==props.genres.length -1){
                break
            }
            generos += ", "
        }

    }
    //console.log("se imprime generos");
    //console.log(generos)
    return(
    <div className={style.card}>
        
        <img className={style.imagenes} src={props.image} alt={props.name} />      
         <Link to={`/videogame/${props.id}`}>
         <h2  className={style.link}>{props.name}</h2>
         </Link>
         <h2 className={style.generos}>Genres:</h2>
         <div className={style.generos}>
        <p >{generos}</p>
         </div>
         
        </div>

    )
}


export default Card;