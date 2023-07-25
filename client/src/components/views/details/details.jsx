import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import styles from "./details.module.css";
import { useSelector } from 'react-redux';

function Detail(){
    const {id} = useParams();
    console.log(id)
    
    const [game, setGame] = useState([]);
    //const game = getGame(id);
    //console.log(game);
  
    useEffect(() => {
        fetch(`http://localhost:3001/videogame/${id}`)
          .then((response) => response.json())
          .then((game) => {
            if (game.name) {
              setGame(game);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("Error al buscar");
          });
        return setGame({});
      }, [id]);
      console.log(game);
      
      let sPlat = "";
      if(game.platforms){
        for(let i = 0; i < game.platforms.length ; i++){
          //console.log(generos)
  
          sPlat += game.platforms[i];
          //console.log(props.genres[i].name)
          if(i==game.platforms.length -1){
              break
          }
          sPlat += ", "
      }}

      let sGeneros = "";
      if(game.genres){
        console.log("entra en el if")
        for(let i = 0; i < game.genres.length ; i++){
            //console.log(generos)
    
            sGeneros += game.genres[i].name;
            //console.log(props.genres[i].name)
            if(i==game.genres.length -1){
                break
            }
            sGeneros += ", "
        }
      }else if(game.Genres){
        console.log("Es una base de datos")
        console.log(game.Genres);
        for(let i = 0; i < game.Genres.length ; i++){
          //console.log(generos)
  
          sGeneros += game.Genres[i].name;
          //console.log(props.genres[i].name)
          if(i==game.Genres.length -1){
              break
          }
          sGeneros += ", "
      }
      }


      console.log("se imprime sGeneros")
      console.log(sGeneros)
      
    return (
      <div className={styles.detailcontainer} id={game.id}>
        <div className="img-container">
          <h2>{game.name}</h2>
          <img src={game.image} alt={game.name} className={styles.imagen}/>
        </div>
        <div className={styles.details}>
          <div>
          <h3>id:</h3>
          <p>{game.id}</p>
          </div>
          <div>
            <h3>rating: </h3>
            <p>{game.rating}</p>
          </div>
          <div>
            <h3>Release date:</h3>
            <p>{game.releaseDate}</p>
          </div>
          <div>
            <h3>Platforms:</h3>
            <p>{sPlat}</p>
          </div>
          <div>
            <h3>Genres:</h3>
            <p>{sGeneros}</p>
          </div>
        </div>
        <div>
            <h3>Description:</h3>
            <p>{game.description}</p>
          </div>
      </div>
    );



}



export default Detail;