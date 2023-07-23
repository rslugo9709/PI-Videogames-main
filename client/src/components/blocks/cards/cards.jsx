import React from "react";
import Card from "../card/card";
import styles from "./cards.module.css"

function Cards(props) {
    const { videogames, onClose } = props;
    //console.log("imprimimos desde cards")    
    //console.log(videogames)
    //trataremos de limpiar el array para que no haya conflicto con lo traido en la DB
    
   videogames.map((game) =>{
      if(game.Genres){
         let genres= []
         //console.log("hay un juego de la bd");
         //console.log(game.Genres);
         for (let i = 0; i < game.Genres.length; i++) {
            let name = game.Genres[i].name;
            genres.push({
               name: name
            });
            
            //console.log("se imprime desde el ciclo for")
            //console.log(genres);
            
         }
         //console.log("se imprime desde fuera del ciclo")
         //console.log(genres)
         game.genres= genres;
         //console.log("se imprime desde la propiedad creada");
         //console.log(game.genres)
      }

   })
   


    return (
      
      
         
       <div className={styles.container}>
          {
             videogames.map(game => {
             return(<Card 
             key = {game.id}
             name={game.name}
             image={game.image}
             genres={game.genres}
             id={game.id}
             rating={game.rating}
             releaseDate={game.releaseDate}
             onClose={props.onClose}
             /> )})
             
          }
       </div>
    );
 }

 export default Cards;