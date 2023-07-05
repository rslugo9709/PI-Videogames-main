import axios from "axios";

export const FILTER = "FILTER";
export const ORDER = "ORDER";
export const RESET = "RESET";


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



