const axios = require("axios");

const { Sequelize } = require('sequelize');
const {Videogame, Genres} = require("../db");

async function postVideogame(req, res){


    try{
    const {id, name, description, platforms, image, releaseDate, rating } = req.body;

    if(!id || !name || !description || !platforms || !image || !releaseDate || !rating){
        return res.status(401).send("Missing info");
    }

     await Videogame.findOrCreate({
        where: {id, name, description, platforms, image, releaseDate, rating}
    })

    return res.status(200).json({message:"juego creado exitosamente"})
    }catch(error){
        return res.status(500).json({message: error.message})
    }
}


module.exports = {postVideogame};