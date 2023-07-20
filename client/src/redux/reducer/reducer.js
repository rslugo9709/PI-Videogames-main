import { GAMENAME,VIDEOGAMES,FILTER, ORDER, RESET, GENRES, SEARCHED, DBGAMES, APIGAMES, GETAPI, GETDB } from "../actions/actions";

let initialState= {
    videogames: [],
    buscado: false,
    gamesId:[],
    generos: [],
    gamesName:[],
    gamesBD: [],
    gamesApi: [],
    mockVideogames: []
}


function reducer(state= initialState, action){

    switch(action.type){

        case VIDEOGAMES:
            return{
                ...state, 
                videogames: action.payload,
                mockVideogames: action.payload,
            }
        case DBGAMES:
            return{
                ...state,
                videogames: action.payload,
                gamesBD: action.payload
            }
        case APIGAMES:
            return{
                ...state,
                videogames: action.payload,
                gamesApi: action.payload
            }

        case GAMENAME:
            return{
                ...state,
                videogames: action.payload,
            }
            //hacer llamado implicito

        case SEARCHED:
            if(state.buscado){
                return{
                    ...state,
                    buscado: false
                }
            }else{
                return{
                    ...state,
                    buscado: true
                }
            }

        case GENRES:
            return{
                ...state,
                generos: action.payload,
            }
        case FILTER:
            console.log("se imprime desde el reducer el filtro por genero");
            console.log(action.payload)
            if(action.payload !== "all"){
                const genreA = []
                for (let index = 0; index < state.mockVideogames.length; index++) {
                    if(state.mockVideogames[index].genres){
                        for (let j = 0; j < state.mockVideogames[index].genres.length; j++) {
                            //console.log(state.videogames[index].genres[j].name)
                            if(state.mockVideogames[index].genres[j].name === action.payload){
                                genreA.push(state.mockVideogames[index]);
                            }
                        }
                    }

                    
                }
                return {
                    ...state,
                    videogames: genreA
                }
            }else{
                return{
                    ...state,
                    //videogames: state.mockVideogames
                }
            }

        case ORDER:
            //CAMBIAR ESTO
            let ordenados = [];
            
            
            if (action.payload === "low") {
              ordenados = state.videogames.sort((a, b) => (a.rating > b.rating ? 1 : -1));
            } else  if (action.payload === "high"){
              ordenados = state.videogames.sort((a, b) => (b.rating > a.rating ? 1 : -1));
            }else  if (action.payload === "ascendente"){
                ordenados = state.videogames.sort((a, b) => {
                    if (a.name < b.name) {
                        return -1;
                      }
                      if (a.name > b.name) {
                        return 1;
                      }
                      return 0;
                });
            }else  if (action.payload === "descendente"){
                ordenados = state.videogames.sort((a, b) => {
                    if (a.name > b.name) {
                        return -1;
                      }
                      if (a.name < b.name) {
                        return 1;
                      }
                      return 0;
                });
            }else{
                console.log("se envia lo original")
                return {...state,
                    videogames: state.mockVideogames
                }
            }
            return {
              ...state,
              videogames: [...ordenados],
            };
        
        case RESET:
            return{
                    ...state,
                    videogames: state.mockVideogames
                }
        default:
            return{
                ...state
            }
    }
}

export default reducer;