import { FILTER, ORDER, RESET } from "../actions/actions";

let initialState= {
    allVideogames: [],
    mockVideogames: []
}


function reducer(state= initialState, action){

    switch(action.type){
        case FILTER:
            return{
                ...state,
                mockVideogames: state.allVideogames.filter(
                    (char) => char.gender === action.payload
                )
            }
        case ORDER:
            //CAMBIAR ESTO
            let ordenados = [];
            if (action.payload === "Ascendente") {
              ordenados = state.allVideogames.sort((a, b) => (a.id > b.id ? 1 : -1));
            } else {
              ordenados = state.allVideogames.sort((a, b) => (b.id > a.id ? 1 : -1));
            }
            return {
              ...state,
              mockVideogames: [...ordenados],
            };
        
        case RESET:
            
            return{
                    ...state,
                    mockVideogames: state.allVideogames
                }
        default:
            return{
                ...state
            }
    }
}

export default reducer;