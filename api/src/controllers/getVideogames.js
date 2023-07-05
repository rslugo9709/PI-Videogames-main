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
        //llamamos a la base de datos

        const gameBd = await Videogame.findAll();
        //buscamos en la api
        let url = `https://api.rawg.io/api/games?key=${KEY}&dates=2019-09-01,2019-09-30&platforms=18,1,7`;
        const response = (await axios.get(url)).data.results;
        gameApi = clearArray(response);
        console.log("Se ejecuta el controller de videogames")
        resultado = [...gameBd, gameApi];
        return res.status(200).json(resultado); 
        
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }

}

function clearArray(a){
    resultado = []
    a.map((game) =>{
        resultado.push({
            id: game.id,
            name: game.name,
            description: game.description,
            platforms: game.platforms,
            image: game.background_image,
            releaseDate: game.released,
            rating: game.rating
        })
    })
    return resultado;
}

module.exports = {getVideogames};