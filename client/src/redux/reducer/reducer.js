import { GAMENAME,VIDEOGAMES,FILTER, ORDER, RESET, GENRES, SEARCHED, DBGAMES, APIGAMES, GETAPI, GETDB, ALLGAMES, GETPLAT, POSTGAME } from "../actions/actions";

let initialState= {
    videogames: [],
    buscado: false,
    gamesId:[],
    generos: [],
    plataformas: [],
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
                gamesBD: action.payload,
            }
        case APIGAMES:
            return{
                ...state,
                gamesApi: action.payload,

            }
        case ALLGAMES:
            return{
                ...state,
                videogames: state.mockVideogames
            }
        case GETDB:
            console.log("se deberian traer los juegos de la base de datos")
            return{
                ...state,
                videogames: state.gamesBD,
            }
        case GETAPI:
            console.log("se deberian traer los juegos de la api")
            return{
                ...state,
                videogames: state.gamesApi,
    
            }
        case GETPLAT:
            console.log("se ejecuta el reducer de plataformas")
            return{
                ...state,
                plataformas: action.payload
            }
        case GAMENAME:
            return{
                ...state,
                videogames: action.payload,
            }
            //hacer llamado implicito
        
        case POSTGAME:
            console.log("se creó el juego")
            return{
                ...state
            }
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
                //tocó a la antigua xd
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
            }else if(action.payload == "all"){
                return{
                    ...state,
                    videogames: state.mockVideogames
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