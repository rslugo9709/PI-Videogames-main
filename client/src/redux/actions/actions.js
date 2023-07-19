import axios from "axios";

export const FILTER = "FILTER";
export const ORDER = "ORDER";
export const RESET = "RESET";
export const VIDEOGAMES= "VIDEOGAMES";
export const GAMENAME= "GAMENAME";
export const GENRES = "GENRES";
export const SEARCHED = "SEARCHED";
export const DBGAMES = "DBGAMES";
export const APIGAMES = "APIGAMES";

export function buscar(){
    console.log("se cambia el estado de buscado")
    return {
        type: "SEARCHED",

    }
}




export function getVideogames(source){
    
    return async function(dispatch){
        //console.log("se ejecuta el action de getvideogames")

        try {
          //console.log("se trae la data del back")
          //definimos que ruta tomará segun lo que llegue de props
          let response= "";
          if(!source){
            response = (await axios.get(`http://localhost:3001/videogames/`)).data;
          }else if(source === "api"){
            response = (await axios.get(`http://localhost:3001/videogames/?src=${"api"}`)).data;
          }else{
            response = (await axios.get(`http://localhost:3001/videogames/?src=${"db"}`)).data;
          }

          //console.log(response)
          dispatch({type:VIDEOGAMES,payload:response})
        } catch (error) {
          alert(error.message);
        }
    }
}




export function getGame(game){

    return async function(dispatch){
        try {

            //console.log("se ejecuta la busqueda del juego por nombre");
            let response = (await axios.get(`http://localhost:3001/videogames/name/?name=${game}`)).data;
        
            dispatch({type:GAMENAME,payload:response})
        } catch (error) {
            alert(error.message);
        }

    }


}

export function getGenres(){

    return async function(dispatch){
        console.log("se ejecuta el action de getGenres")

        try {
          //console.log("se trae la data del back")
          let response = (await axios.get(`http://localhost:3001/genres`)).data;
          //console.log(response)
          dispatch({type:GENRES,payload:response})
        } catch (error) {
          alert(error.message);
        }
    }

}


export function orderCards(order){
    return{
        type: "ORDER", 
        payload: order
    }
}

export function filterGender(gender){
    return{
        type: "FILTER",
        payload: gender
    }
}

export function reset(){
    return{
        type: "RESET"
    }
}



