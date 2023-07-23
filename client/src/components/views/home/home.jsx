import Cards from "../../blocks/cards/cards";
import styles from "./home.module.css";
import Paging from "../../blocks/paging/paging";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { filterGender, getAllGames, getApi, getDbGames, getVideogames, orderCards, reset } from "../../../redux/actions/actions";


function Home({videogames, genres, marcador}){
    //console.log("imprimimos desde home")
    //console.log("videogames");
    //console.log(videogames);
    //console.log("generos");
    //console.log(genres);

    //se prepara el paginado
    const [currentPage, setCurrentPage] = useState(1);
    const [cardPerPage, setCard] = useState(15);
    const lastPostIndex = currentPage * cardPerPage;
    const firstPostIndex = lastPostIndex - cardPerPage;
    const currentCards = videogames.slice(firstPostIndex, lastPostIndex);

    //preparamos para los filtros
    const dispatch = useDispatch();

    const handleFilterGenres = (e) =>{
        console.log("se ejecuta el filtro por generos");
        dispatch(filterGender(e.target.value));
    }
    const handleOrigin = (e) =>{
        console.log("se ejecuta el filtro por locacion");
        if(e.target.value == "all"){
            dispatch(getAllGames())
        }else if(e.target.value == "api"){
            dispatch(getApi());
        }else if(e.target.value == "db"){
            dispatch(getDbGames());
        }
        
    }
    const handleSort = (e) =>{
        console.log("se ejecuta el ordenamiento");
        if(e.target.value == "order"){
            dispatch(getAllGames())
        }else{
            dispatch(orderCards(e.target.value));
        }
       
    }

    const handleReset = (e) =>{
        console.log("se ejecuta el reseteo")
        window.alert("Se reestablece todo");
        dispatch(getVideogames("all"))
    }
        
  
    //Si lo recibido por props es de un tamaño de 15 elementos entonces es porque se quiere renderizar la ruta de name
    if(marcador){
        console.log("entra en el marcador")
        return(
            <div >
                <Cards videogames={videogames}/>
            </div>
        )
    }else{
        //sino, es porque se quieren renderizar todos los videojuegos
        console.log(currentCards);
        return(
            <div >
                <div>
                    <select placeholder="Genre" onChange={handleFilterGenres}>
                        <option value="all">All genres</option>
                        {genres.map(genero =>{
                            return <option key={genero.id} value={genero.name}>{genero.name}</option>
                        })}
                    </select>
                    <select placeholder="Origin" onChange={handleOrigin}>
                        <option value="all">All games</option>
                        <option value="db">Database</option>
                        <option value="api">API</option>
                    </select>
                    <select placeholder="Order" onChange={handleSort}>
                        <option value="order">
                            Order
                        </option>
                        <option value="ascendente">
                            A to Z
                        </option>
                        <option value="descendente" >
                            Z to A
                        </option>
                        <option value="high" >
                            Highest rating
                        </option>
                        <option value="low" >
                            Lowest rating
                        </option>
                    </select>

                    <button value="reset" onClick={handleReset}>
                        Reset
                    </button>

                
                </div>
                <Paging totalPost={videogames.length} cardsPerPage={cardPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>

                <Cards videogames={currentCards}/>

                <Paging totalPost={videogames.length} cardsPerPage={cardPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
                {/*<Cards videogames={videogames}/>*/}
            </div>
        )
    }



}
export default Home;