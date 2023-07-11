
import { useState, useEffect, useReducer } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
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
  
    const [videogames, setVideogames] = useState([]);
    const [allgames, setAllgames] = useState([]);
    const location = useLocation();



    //Para desplegar todos los juegos
    //funcion que permite capturar lo que escribe el usuario
    function changeHandler(e){
        e.preventDefault();
  
    }

    //busqueda inicial de cartas
    async function allHandler(){
      console.log("se ejecuta all handler")

      try {
        console.log("se trae la data del back")
        let response = (await axios.get(`http://localhost:3001/videogames`)).data;
        //console.log(response)
        setAllgames(response)
      } catch (error) {
        alert(error.message);
      }
    }


    //buscar por id
    async function searchHandler(id) {
        console.log("se ejecuta la funcion buscar")
        //console.log(character)
        console.log(id)
        try {
          //console.log(filtered)
          //console.log(videogames)
          let found = false;
          if(videogames.length==0){
            found = false;
          }else{
            found = videogames.find(
              (game) => game.id === Number(id)
            ); 
          }

            //console.log("comprobamos el found")
            //console.log(found)
            
          if (!(found)) {
            console.log("entra en el condicional para buscar")
            let response = (await axios.get(`http://localhost:3001/videogame/${id}`)).data;

            console.log(response)
            if (response.name) {
              //console.log(response.name)
              setVideogames([...videogames, response]);
              setVizualizar(true);
            }
          } else {
            alert("Ya buscaste este juego!");
          }
        } catch (error) {
          alert(error.message);
        }
      }

      console.log("se imprime videogames")
      console.log(videogames)

      if(!visualizar){
        //allHandler();
        console.log("se debe ejecutar el allhandler aqui")
      }
      console.log("se imprime all games")
      console.log(allgames)
      let data = [];
      
    return(
        <div className='App'>
            <div>
            {/*Si en la ruta donde estoy es diferente a una ruta diferente a la raiz */}
            {(location.pathname !== "/") && <NavBar onSearch={searchHandler} onChange={changeHandler} />}
            </div>


        <Routes>
            <Route path='/' element={<Landing />}/>
            <Route path='/home'  element={<Home videogames={videogames}/>} />
            <Route path='/videogame/:id' element={<Detail />}/>
        </Routes>


        </div>
    )


  
}

export default App;
