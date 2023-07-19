
import { useState, useEffect, useReducer } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getVideogames, getGame, getGenres, buscar } from './redux/actions/actions';


import axios from "axios";

import './App.css'

//importamos los componentes
import NavBar from './components/blocks/nav/navbar';


//importamos las views

import Landing from './components/views/landing/landing';
import Home from './components/views/home/home';
import Detail from './components/views/details/details';

function App() {
    //la funcion vizualizar determina si se renderizan todas las cartas, o solo las que estan llamadas desde la funcion id. 
    const [visualizar, setVizualizar] = useState(false);
  
    //const [videogames, setVideogames] = useState([]);

    const location = useLocation();
    const dispatch = useDispatch();
    let data =[];
    let generos = [];
    let marcador = true; 
    //Para desplegar todos los juegos
    //funcion que permite capturar lo que escribe el usuario
    function changeHandler(e){
        e.preventDefault();
  
    }

    //busqueda inicial de cartas


    if(visualizar === false){
      //console.log("se inician pruebas con el reducer");
      //se carga la data al redux
      //se cargan los juegos
      useEffect(() =>{
        
        dispatch(getVideogames());
      }, [dispatch]);
      //cargamos al redux los videojuegos de la api
      useEffect(() =>{
        dispatch(getVideogames("api"));
      }, [dispatch]);
      
      //cargamos los de la DB
      useEffect(() =>{
        dispatch(getVideogames("db"));
      }, [dispatch]);

      //se cargan los generos
      useEffect(() =>{
        dispatch(getGenres());
      }, [dispatch]);
      



      //console.log("se imprime desde el condicional de visualizar")
      //console.log(data);
      data = useSelector(state => state.videogames);
      generos = useSelector(state => state.generos);
      marcador = useSelector(state => state.buscado);
      console.log("se imprime desde el condicional de visualizar el marcador")
      console.log(marcador);
    }
    
 
 


      
    //console.log("se imprime la data")
    //console.log(data)



      
    return(
        <div className='App'>
            <div>
            {/*Si en la ruta donde estoy es diferente a una ruta diferente a la raiz */}
            {(location.pathname !== "/") && <NavBar onChange={changeHandler} />}
            </div>


        <Routes>
            <Route path='/' element={<Landing />}/>
            <Route path='/home'  element={<Home videogames={data} genres={generos} marcador= {marcador}/>} />
            <Route path='/videogame/:id' element={<Detail />}/>
        </Routes>


        </div>
    )


  
}

export default App;
