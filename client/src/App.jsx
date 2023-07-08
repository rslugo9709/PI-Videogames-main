
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
    
    const location = useLocation();

    //funcion que permite capturar lo que escribe el usuario
    function changeHandler(e){
        e.preventDefault();
  
      }
    return(
        <div className='App'>
            <div>
            {/*Si en la ruta donde estoy es diferente a una ruta diferente a la raiz */}
            {(location.pathname !== "/") && <NavBar onSearch={null} onChange={changeHandler} />}
            </div>
        <Routes>
            <Route path='/' element={<Landing />}/>
            <Route path='/home' element={<Home />} />
            <Route path='/videogame/:id' element={<Detail />}/>
        </Routes>


        </div>
    )


  
}

export default App
