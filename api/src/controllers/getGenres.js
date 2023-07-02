const axios = require("axios");
const { Op } = require('sequelize');

//importamos los modelos
const {Videogame, Genres} = require("../db");

//importamos los datos del .env
require('dotenv').config();
const {KEY} = process.env;


async function getGenres(req, res){

    try {
        
        let url = `https://api.rawg.io/api/genres?key=${KEY}&dates=2019-09-01,2019-09-30&platforms=18,1,7`

        const response = await axios.get(url);
        let aGenres = []
        response.data.results.map((genre) =>{
            aGenres.push({
                id: genre.id,
                name: genre.name
            })
        })
        return res.status(200).json(aGenres)
    } catch (error) {
        
        return res.status(500).json({message: error.message})

    }

}


module.exports = {getGenres};