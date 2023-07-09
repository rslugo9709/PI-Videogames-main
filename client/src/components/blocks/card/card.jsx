import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import style from "./card.module.css"


function Card(props){
    return(
    <div className={style.card}>
        
        <img className={style.imagenes} src={props.image} alt={props.name} />      
         <Link to={`/videogame/${props.id}`}>
         <h2  className={style.link}>{props.name}</h2>
         </Link>
         <h2>{props.rating}</h2>
         <h2>{props.releaseDate}</h2>
         
        </div>

    )
}


export default Card;