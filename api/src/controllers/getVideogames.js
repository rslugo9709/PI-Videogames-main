const axios = require("axios");
const { Op } = require('sequelize');

//importamos los modelos
const {Videogame, Genres} = require("../db");

//importamos los datos del .env
require('dotenv').config();
const {KEY} = process.env;

//definimos la ruta


async function getVideogames(req, res){


    
    try {
        let url = `https://api.rawg.io/api/games?key=${KEY}&dates=2019-09-01,2019-09-30&platforms=18,1,7`;
        const response = (await axios.get(url));
        console.log("Se ejecuta el controller de videogames")
        return res.status(200).json(response.data.results); 
        
    
    } catch (error) {
        res.status(500).json({message: error.message})
    }

}


module.exports = {getVideogames};