const axios = require("axios");

//importamos los datos del .env
require('dotenv').config();
const {KEY} = process.env;

async function getPlat(req, res){

    try {
        
        let url = `https://api.rawg.io/api/platforms?key=${KEY}`
        //const data = apiPlat(url);
        
        const response = (await axios.get(url)).data.results;
        let plataformas = []
        response.map((plat) =>{
            plataformas.push({
                id: plat.id,
                name: plat.name
            })
        })
        return res.status(200).json(plataformas);
        
        
    } catch (error) {
        
        return res.status(500).json({message: error.message})

    }

}

async function apiPlat(url){
    const response = (await axios.get(url)).data.results;
    let aPlat = []
    /*
    response.map((plat) =>{
        plat.push({
            id: plat.id,
            name: plat.name
        })
    })
    */
    return response;
}

module.exports = {getPlat};