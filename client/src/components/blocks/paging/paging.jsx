import React from "react";
import Cards from "../cards/cards";
import { useState } from "react";
import styles from "./paging.module.css"
function Paging({totalPost, cardsPerPage, setCurrentPage, currentPage}){
    let pages = [];

    for (let i= 1; i <= Math.ceil(totalPost/cardsPerPage); i++){
        pages.push(i);
    }
    
    //console.log("se imprime desde paging");
    //console.log(videogames)
    

    return (
        <div className={styles.pagination}>
            {pages.map((page, index) =>{
                let boton = ""
                if(page === currentPage){
                    boton = styles.active
                }else{
                    boton= styles.boton;
                }
                return <button key={index} className={boton} onClick={() => setCurrentPage(page)}> {page}</button>
            })}
        </div>
    )




}


export default Paging;