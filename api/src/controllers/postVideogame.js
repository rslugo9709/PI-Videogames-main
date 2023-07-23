const axios = require("axios");

const { Sequelize } = require('sequelize');
const {Videogame, Genres} = require("../db");

async function postVideogame(req, res){


    try{
    const {name, description, platforms, image, releaseDate, rating, genres } = req.body;
    let objeto = {
        name: name,
        description: description,
        platforms: platforms,
        image: image,
        releaseDate: releaseDate,
        rating: rating,
        genres: genres
    }
    console.log(platforms);
    //si falta algun dato se rechaza
    if(!name || !description || !platforms || !image || !releaseDate || !rating || !genres){
        return res.status(401).send("Missing info");
    }
    let existencia = await gameExists(name)
    if(existencia){
        console.log("se procede a crear el videojuego")
        const gameC = await Videogame.findOrCreate({
            where: {name, description, platforms, image, releaseDate, rating}
        })
        console.log(gameC)
        await gameC[0].setGenres(genres);
        let gameI = await Videogame.findAll({
            where:{
                name: name
            },
            include: [
                {
                    model: Genres,
                    attributes: ["id", "name"]
                }
            ]
        })
        return res.status(200).json({message:"juego creado exitosamente", gameI})
    }else{
        return res.status(400).json({message: "EL juego ya existe!"})
    }
    /*
     await Videogame.findOrCreate({
        where: {id, name, description, platforms, image, releaseDate, rating}
    })
    */

    }catch(error){
        return res.status(500).json({message: error.message})
    }
}

async function gameExists(name){
    //busco por el nombre en la base de datos
    let exists = await Videogame.findOne({
        where:{
            name: name
        }
    })
    if(exists){
        console.log("el videojuego existe y no será creado")
        return false;
    }else{
        console.log("el videojuego no existe")
        return true;
    }
    
} 

module.exports = {postVideogame};