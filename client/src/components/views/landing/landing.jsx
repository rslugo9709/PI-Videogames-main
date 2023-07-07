import React from "react";
import { Link } from "react-router-dom";
import styles from "./landing.module.css";
import gif from "../../../assets/landing2.gif";

export default function Landing(){

    return (
        <div className={styles.containergen}>
            
            <div className={styles.smallContainer}>
            <img src={gif} className={styles.gif}/>
            <h1 className={styles.titulo}>Welcome to the arcade world!</h1>
            <Link to={"/home"} className={styles.boton}>INSERT COIN</Link>
            </div>

            
        </div>
        
    )
}