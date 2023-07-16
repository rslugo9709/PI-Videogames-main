const axios = require("axios");
const { Op } = require('sequelize');
require('dotenv').config();
const {KEY} = process.env;
const {Videogame, Genres} = require("../db");


async function getVideoGameByName(req, res){
    const {name} = req.query;
    const fName= name.toLowerCase()
    const url = `https://api.rawg.io/api/games?search=${fName}&key=${KEY}&page_size=15`
    try {
        //buscamos en la base de datos primero
        const bdGames = await Videogame.findAll({
            where: {
                name:{
                    [Op.iLike]: `%${fName}%`
                }
            },
            limit: 15
        })

        //buscamos en la API
        const result= (await axios.get(url)).data.results
        const apiGames = clearGames(result);
        //return res.status(200).json(result)
        if(bdGames){
            console.log("se envia el resultado con los de bd")
            const resultadoJ = [...bdGames,...apiGames]
            return res.status(200).json(resultadoJ);
        }

        return res.status(200).json(apiGames)



    } catch (error) {
        res.status(500).json({message: error.message})
    }


}


function clearGames(result){

    let gameApi = [];
    
    //return res.status(200).json(response); 
    //console.log(response[0].description)
   result.map((game) =>{
        let platformas = [game.platforms, game.parent_platforms]
        .flatMap(platform => platform.map(p => p.platform.name))
        .filter((name, index, arr) => arr.indexOf(name) === index);
        let generos = [];
        game.genres.map((elem) =>{
            generos.push({
                name: elem.name
            })
        })
        gameApi.push({
            id: game.id,
            name: game.name,
            image: game.background_image,
            releaseDate: game.released,
            rating: game.rating,
            platforms: platformas,
            genres: generos
        })
    })

    return gameApi;
}

module.exports = {getVideoGameByName}