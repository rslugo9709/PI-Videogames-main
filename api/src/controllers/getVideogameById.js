const axios = require("axios");
require('dotenv').config();
const {KEY} = process.env;
const { Sequelize } = require('sequelize');
const {Videogame, Genres} = require("../db")

async function getVideogameById(req, res){
    const {id} = req.params;
    
    //buscamos en la base de datos primero
    //let gameBd = buscarBD(id);
/*    if(gameBd){
        return gameBd;
    }*/
    try {
        
        console.log("se ejecuta el getVideoGameByID")
        const response = (await axios.get(`https://api.rawg.io/api/games/${id}?key=${KEY}`)).data
        if(response){
            const vGame = {
                id: response.id,
                name: response.name,
                description: response.description,
                platforms: response.platforms,
                image: response.background_image,
                releaseDate: response.released,
                rating: response.rating,
            }
            return res.status(200).json(vGame);
        }else{
            return res.status(404).json({message: "No existe ese personaje"})
        }
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }


}


//creamos una funcion para buscar en la base de datos

async function buscarBD(id){
    try {
        const videogame = await Videogame.findOne({
            where:{
                id: id
            }
        })
        return videogame;
    } catch (error) {
        return null;
    }
}


module.exports = {getVideogameById};