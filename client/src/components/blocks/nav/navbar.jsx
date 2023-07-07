import {Link} from "react-router-dom";

import styles from "./navbar.module.css";
import SearchBar from "../searchbar/searchbar";

export default function NavBar({onSearch, onChange}){

    return(
        <div>
            <nav className={styles.nav}>
                <div className= {styles.container}>
                    <Link to={"/home"} className={styles.links}>Home</Link>
                    <Link to={"/about"} className={styles.links}>About</Link>
                    <Link to={"/fav"} className={styles.links}>Favorites </Link>
                    <Link to={"/"} className={styles.links}>Exit </Link>
                </div>
            <SearchBar onSearch={onSearch} />
            </nav>
        </div>
    )

}