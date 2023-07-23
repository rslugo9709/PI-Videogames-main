const axios = require("axios");
require('dotenv').config();
const {KEY} = process.env;
const { Sequelize } = require('sequelize');
const {Videogame, Genres} = require("../db")
const { Op } = require('sequelize');
async function getVideogameById(req, res){
    const {id} = req.params;
    
    //buscamos en la base de datos primero
    //let gameBd = buscarBD(id);
/*    if(gameBd){
        return gameBd;
    }*/
    try {
        
        //buscamos en la DB
        const bdGame =await buscarBD(id);
        console.log(bdGame)
        if(bdGame){
            return bdGame;
        }
        

        //buscamos en la api
        const response = (await axios.get(`https://api.rawg.io/api/games/${id}?key=${KEY}`)).data
        let plataformas= []
        let generos= []
        //return res.status(200).json(response);
        if(response){
            response.platforms.map((elem) =>{
                plataformas.push({
                    name: elem.platform.name
                })
            })
            response.genres.map((elem) =>{
                generos.push({
                    name: elem.name
                })
            })
            const vGame = {
                id: response.id,
                name: response.name,
                description: response.description,
                platforms: plataformas,
                //platforms: response.platforms,
                genres: generos,
                image: response.background_image,
                releaseDate: response.released,
                rating: response.rating,
            }
            return res.status(200).json(vGame);
        }else{
            return res.status(404).json({message: "No existe ese videojuego"})
        }
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }


}


//creamos una funcion para buscar en la base de datos

async function buscarBD(id){
    try {
        const videogame = (await Videogame.findOne({
            where:{
                id: id
            },
            include: [
                {
                    model: Genres,
                    attributes: ["id", "name"]
                }
            ],
        })).dataValues
        console.log("se imprime el videogameDB de id: " + id)
        console.log(videogame)

        return videogame;
    } catch (error) {
        return null;
    }
}


module.exports = {getVideogameById};