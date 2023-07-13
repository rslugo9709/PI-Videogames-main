import { GAMENAME,VIDEOGAMES,FILTER, ORDER, RESET } from "../actions/actions";

let initialState= {
    videogames: [],
    gamesId:[],
    gamesName:[],
    mockVideogames: []
}


function reducer(state= initialState, action){

    switch(action.type){

        case VIDEOGAMES:
            return{
                ...state, 
                videogames: action.payload,
            }
        case GAMENAME:
            return{
                ...state,
                videogames: action.payload,
            }
            //hacer llamado implicito
        case FILTER:
            return{
                ...state,
                mockVideogames: state.videogames.filter(
                    (game) => game.genre === action.payload
                )
            }
        case ORDER:
            //CAMBIAR ESTO
            let ordenados = [];
            if (action.payload === "Ascendente") {
              ordenados = state.videogames.sort((a, b) => (a.id > b.id ? 1 : -1));
            } else {
              ordenados = state.videogames.sort((a, b) => (b.id > a.id ? 1 : -1));
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