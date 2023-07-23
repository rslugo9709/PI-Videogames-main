import {Link} from "react-router-dom";

import styles from "./navbar.module.css";
import SearchBar from "../searchbar/searchbar";
import control from "../../../assets/control.png"
export default function NavBar(){

    return(
        <div>
            <nav className={styles.nav}>
                <div className={styles.iContainer}>
                <img className={styles.imagen} src={control} alt="imagen de un control" />
                </div>
                <div className= {styles.container}>
                    
                    <Link to={"/home"} className={styles.links}>Home</Link>
                    <Link to={"/add"} className={styles.links}>Add</Link>
                    <Link to={"/about"} className={styles.links}>About</Link>
                    <Link to={"/"} className={styles.links}>Exit </Link>
                </div>
                <SearchBar />
            </nav>
        </div>
    )

}