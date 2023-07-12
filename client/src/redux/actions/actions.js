import axios from "axios";

export const FILTER = "FILTER";
export const ORDER = "ORDER";
export const RESET = "RESET";
export const VIDEOGAMES= "VIDEOGAMES";


export function getVideogames(){
    
    return async function(dispatch){
        console.log("se ejecuta el action de getvideogames")

        try {
          console.log("se trae la data del back")
          let response = (await axios.get(`http://localhost:3001/videogames`)).data;
          //console.log(response)
          dispatch({type:VIDEOGAMES,payload:response})
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

export function filterCards(gender){
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



