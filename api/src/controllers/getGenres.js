const axios = require("axios");

//importamos los modelos
const {Genres} = require("../db");

//importamos los datos del .env
require('dotenv').config();
const {KEY} = process.env;


async function getGenres(req, res){

    try {
        const { count, rows } = await Genres.findAndCountAll();
        if (count === 0 && !rows.length){
            console.log("entra en el if para crear los generos")
            let url = `https://api.rawg.io/api/genres?key=${KEY}`
            /* let url = `https://api.rawg.io/api/genres?key=${KEY}&dates=2019-09-01,2019-09-30&platforms=18,1,7` */
            const apiData = await apiGenres(url);
            const genreDB = await Genres.bulkCreate(apiData);
            return res.status(201).json(genreDB);

        }else{
            console.log("llama a la DB para traer elos juegos")
            const genreDB = await Genres.findAll();
            return res.status(200).json(genreDB);
        }
 


        
    } catch (error) {
        
        return res.status(500).json({message: error.message})

    }

}

async function apiGenres(url){
    const response = await axios.get(url);
    let aGenres = []
    response.data.results.map((genre) =>{
        aGenres.push({
            id: genre.id,
            name: genre.name
        })
    })
    return aGenres;
}

module.exports = {getGenres};