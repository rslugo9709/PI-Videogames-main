
import { useState, useEffect, useReducer } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import axios from "axios";

import './App.css'

//importamos las views

import Landing from './components/views/landing/landing';


function App() {
    
    const location = useLocation();

    return(
        <div className='App'>

        <Routes>
            <Route path='/' element={<Landing />}/>

        </Routes>


        </div>
    )


  
}

export default App
