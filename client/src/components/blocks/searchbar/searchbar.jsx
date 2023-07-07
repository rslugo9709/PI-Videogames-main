import styles from "./search.module.css";
import { useState } from "react";



export default function SearchBar(props) {

   const [videogame, setVideogame] = useState("");

   //esto hace que no se borre la informacion en la barra de busqueda
   const handleChange =(e) => {
      const { value } = e.target;
      console.log(value)
      setVideogame(value)
      }
   
   //se debe agregar tambien en el input donde dice onChange={handleChange}


   return (
      <div className={styles.container}>

         <input className={styles.buscador} placeholder=" Busca aqui" type='search' onChange={handleChange} />

         <button className={styles.agregar} onClick={() => props.onSearch(videogame)}>Search</button>
      </div>
   );
}