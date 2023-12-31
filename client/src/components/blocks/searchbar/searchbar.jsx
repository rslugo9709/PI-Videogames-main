import styles from "./search.module.css";
import { useState, useEffect, useReducer } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getVideogames, getGame, buscar } from '../../../redux/actions/actions';


export default function SearchBar(props) {

   const [videogame, setVideogame] = useState("");
   const dispatch = useDispatch();
   //esto hace que no se borre la informacion en la barra de busqueda
   const handleChange =(e) => {
      const { value } = e.target;
      //console.log(value)
      setVideogame(value)
      if(!value.length){
         dispatch(buscar());
         dispatch(getVideogames("all"));
         
         
     }
      }
   
   //se debe agregar tambien en el input donde dice onChange={handleChange}
   
   //Debemos hacer el dispatch para los names
   const onSearch = (videogame) =>{
      dispatch(buscar());
      dispatch(getGame(videogame));
      
      
   }
   return (
      <div className={styles.container}>

         <input className={styles.buscador} placeholder=" Search here!" type='search' onChange={handleChange} />

         <button className={styles.agregar} onClick={() => onSearch(videogame)}>Search</button>
      </div>
   );
}