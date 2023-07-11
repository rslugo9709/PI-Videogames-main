import Cards from "../../blocks/cards/cards";
import styles from "./home.module.css";


function Home({videogames}){
    //console.log("imprimimos desde home")
    //console.log(videogames)
    return(
        <div >
            <Cards videogames={videogames}/>
        </div>
    )

}
export default Home;