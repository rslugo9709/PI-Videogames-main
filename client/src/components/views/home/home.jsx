import Cards from "../../blocks/cards/cards";
import styles from "./home.module.css";
import Paging from "../../blocks/paging/paging";
import { useState } from "react";



function Home({videogames}){
    console.log("imprimimos desde home")
    console.log(videogames)
        //se setea el estado
        
        let initial = videogames.slice(0, 15);
        console.log("se imprime el primer mazo de cartas")
        console.log(initial)
        const [current, setCurrent] = useState(15);
        const [gamesPage, setGames] = useState([...initial]);
        const [currentPage, setCurrentPage] = useState(1)
        console.log("se imprime el gamesPage");
        console.log(gamesPage);
        
        
        const [number, setNumber] = useState(0);
        let firstTime = false;
        console.log("se empieza la paginacion");
        const pagination = () =>{
            
            return setGames(videogames.slice(current, current +15))
        }
        
        const nextHandler = () =>{
               if(videogames){
                   console.log("se ejecuta el nextHandler")
                   if((videogames.length) > current + 15){
                       console.log("Pasa la pagina hacia delante")
                       setCurrent(current +15)
                       console.log(current);
                       setCurrentPage(currentPage+1);
                       pagination();

                   }else{
                       console.log("llegaste al limite!")
                   }
                }else{
                    console.log("no llega la data")
                }
            }
    
       
    
        const prevHandler =() =>{
            console.log("se ejecuta el prevHandler")
            if(current > 0){
                console.log("pasa la pagina hacia atrás")
                setCurrent(current -15)
                console.log(current);
                setCurrentPage(currentPage-1);
                pagination();
            }else{
                console.log("llegaste al limite!")
            }
        }
    
    //preparamos el paginado    
    //seteamos la data de la api
    if(videogames.length == 15){


        return(
            <div >
                <h1>No paginado</h1>
                
                <Cards videogames={videogames}/>
            </div>
        )
    }else{
 
        return(
            <div >
                <h1>Paginado</h1>
                <Paging nextHandler={nextHandler} prevHandler={prevHandler} videogames={gamesPage} current= {currentPage}/>
                {/*<Cards videogames={videogames}/>*/}
            </div>
        )
    }



}
export default Home;