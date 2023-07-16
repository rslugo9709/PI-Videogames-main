import Cards from "../../blocks/cards/cards";
import styles from "./home.module.css";
import Paging from "../../blocks/paging/paging";
import { useState } from "react";



function Home({videogames}){
    console.log("imprimimos desde home")
    console.log(videogames)

        //se prepara el paginado
        const [currentPage, setCurrentPage] = useState(1);
        const [cardPerPage, setCard] = useState(15);
        const lastPostIndex = currentPage * cardPerPage;
        const firstPostIndex = lastPostIndex - cardPerPage;
        const currentCards = videogames.slice(firstPostIndex, lastPostIndex);

        


        
  
    //seteamos la data de la api
    if(videogames.length == 15){


        return(
            <div >
                <Cards videogames={videogames}/>
            </div>
        )
    }else{
 
        return(
            <div >

                <Paging totalPost={videogames.length} cardsPerPage={cardPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
                <Cards videogames={currentCards}/>
                <Paging totalPost={videogames.length} cardsPerPage={cardPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
                {/*<Cards videogames={videogames}/>*/}
            </div>
        )
    }



}
export default Home;