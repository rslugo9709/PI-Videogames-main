import React from "react";

import styles from "./about.module.css"
import foto from "../../../assets/foto2.jpeg"
import css from "../../../assets/css.png"
import js from "../../../assets/jsLogo.png"
import github from "../../../assets/github.png"
import seq from "../../../assets/sequelize.png"
import node from "../../../assets/9035101_logo_nodejs_icon.png"
import react from "../../../assets/reactLogo.png"
import redux from "../../../assets/redux.png"
export default function About(){

    return(
        <div className={styles.bigContainer}>
            
            <div className={styles.pageContainer}> 

            <div className={styles.container}>
            <img src={foto} className={styles.profile}></img>
            
            <div className={styles.info}>
                <h1>Raul Lugo</h1>
                <h2>Full stack developer</h2>
                <br />
                <p>Hi! I am Raul I am very pleased to have you here!</p>
                <p>I consider myself as a hardworking and determined person that has advanced problem solving skills.  I live in  Barranquilla, Colombia and I am fluent in English, Portuguese and Spanish.</p>
                <p> Please check out below the list of technologies that were used to create this wonderful project.</p>
                
                <p>Thank you!</p>
            </div>
            </div>
            <h2>Technologies</h2>
            <div className={styles.techs}>
                <img src={css} className={styles.imagesT}></img>
                <img src={js} className={styles.imagesT}></img>
                <img src={node} className={styles.imagesT}></img>
                <img src={seq} className={styles.imagesT}></img>
                <img src={github} className={styles.imagesT}></img>
                <img src={react} className={styles.imagesT}></img>
                <img src={redux} className={styles.imagesT}></img>
            </div>
            </div>
        </div>
    )



}