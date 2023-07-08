import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import styles from "./details.module.css";


function Detail(){
    const {id} = useParams();
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
    return (
      <div className={styles.detailcontainer} id={game.id}>
        <div className="img-container">
          <h2>{game.name}</h2>
          <img src={game.image} alt={game.name} className={styles.imagen}/>
        </div>
        <div className={styles.details}>
          <div>
            <h3>rating:</h3>
            <p>{game.rating}</p>
          </div>
          <div>
            <h3>Release date:</h3>
            <p>{game.releaseDate}</p>
          </div>

        </div>
        <div>
            <h3>Description:</h3>
            <p>{game.description}</p>
          </div>
      </div>
    );



}

async function getGame(id){

    const game = await axios.get(`http://localhost:3001/videogame/${id}`)
    return game;
}

export default Detail;