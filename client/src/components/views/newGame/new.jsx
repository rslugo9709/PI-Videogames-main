import React from 'react'
import { useState } from 'react';
import styles from './new.module.css'
import {validate} from "./validate"



export default function Add ({genres, plataformas}) {

  //console.log("se imprime desde adicionar las plataformas")
  //console.log(plataformas)
  //seteamos el hook para el input
  const [inputs, setInputs] = useState({
    
    name:"",
    image: "",
    description:"",
    releaseDate: "",
    rating: "",
    plataformas: [],
    generos: [],
    generosId: []

  })

  const [aux, setAux] = useState({
    sGeneros: ""
  })

  //seteamos el hook para el error
  const [errors, setErrors] = useState({
    
    name:"",
    image: "",
    description:"",
    rating: "",
    releaseDate: "",
    plataformas: "",
    generos: ""

  })

  //seteamos la funcion para manejar los cambios en el formulario
  const handleInputChange  = (e) => {
    
    //llamamos al hook
    //usamos el spread operator(...cosa) para copiar todo el estado anterior
    //usamos los objetos literales para hacer dinamico el formulario
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    })

    setErrors( 
      (validate({
        ...inputs,
        [e.target.name]: e.target.value
      }))
    )

  };

  const handleDate = (e) =>{
    console.log("Se deberia ver la fecha")
    setInputs({
      ...inputs,
      releaseDate: e.target.value
    }
      )
  }

  const handleGenres = (e) =>{
    console.log("se deberia ver los generos");
    let id=e.target.value;
    console.log(id);
    let existente = false;
    inputs.generos.map((gen) =>{
      if(gen.id == Number(id)){
        existente = true;
        console.log("si hay un existente")
      }
    })
    if(existente){
      return window.alert("ya agregaste este genero!")
    }
    let agregar ={};
    agregar = genres.filter((gen) => gen.id === Number(id) )
    console.log(agregar)
    inputs.generos.push(...agregar);
    inputs.generosId.push(id);
    console.log("se imprimen los generos");
    console.log(inputs.generos);
    console.log(inputs.generosId);

    //se intenta arreglar
    let sGeneros = "";
    if(inputs.generos){
      for(let i = 0; i < inputs.generos.length ; i++){
          //console.log(generos)
  
          sGeneros += inputs.generos[i].name;
          //console.log(props.genres[i].name)
          if(i==inputs.generos.length -1){
              break
          }
          sGeneros += ", "
      }
      console.log(sGeneros)
      setAux({
        ...aux,
        sGeneros: sGeneros
      })
  }
  }


  const handlePlat = (e) =>{
    console.log("se deberia ver las plataformas");
    let name=e.target.value;
    console.log(name);
    let existente = false;
    inputs.plataformas.map((plat) =>{
      if(plat == name){
        existente = true;
        console.log("si hay un existente")
      }
    })
    if(existente){
      return window.alert("ya agregaste esta consola!")
    }
    //se agrega al array 
    inputs.plataformas.push(name);
    console.log(inputs.plataformas)

    //vamos a renderizarlo en el preview
    
  }

  const handleSubmit = (e) =>{
    e.preventDefault();

    //el condicional convierte el objeto errors a un array
    if(Object.keys(errors).length){
      alert("Debe llenar todos los campos");
    }else{
      alert("Datos completos");
      setInputs({
        name:"",
        image: "",
        releaseDate: "",
        description:"",
        rating: 0,
        plataformas: [],
        generos: []
      }
      )

      setErrors({
        name:"",
        image: "",
        releaseDate: "",
        description:"",
        rating: 0,
        plataformas: "",
        generos: ""

      })

    }
  }

  //console.log("se imprime el string final")
  //console.log(aux.sGeneros);
  return (
    <div className={styles.origin}>
      {/* */}
      <div className={styles.container}>
      <h1>Create a new game</h1>
      <p>Please fill out this form with the required information</p>
      <div className={styles.formContainer}>
      <form onSubmit={handleSubmit} action=''className={styles.formulario}>

        {/*Para el nombre*/}
        <label htmlFor='name'>Name:</label>
        <br></br>
        <input onChange={handleInputChange} className={errors.name && styles.warning} type="text" value={inputs.name} name="name" id="name" placeholder='Name of the game...'/>
        <p className={styles.danger}>{errors.name}</p>

        {/*Para la imagen*/}
        <label htmlFor='image'>Image's URL:</label>
        <br></br>
        <input onChange={handleInputChange} className={errors.image && "warning"} type="text" value={inputs.image} name="image" id="image" placeholder='www...'/>
        <p className={styles.danger}>{errors.image}</p>
        
        {/*Para la descripcion*/}
        <label htmlFor="description">Description:</label>
        <br></br>
        <textarea 
          onChange={handleInputChange} className={errors.description && "warning"} type="text" value={inputs.description} name="description" id="description" placeholder='The game is about...' rows="3" cols="30">
          </textarea>
        <p className={styles.danger}>{errors.description}</p>
        <br></br>

        {/*Para la fecha*/}
        <label htmlFor="release">Release date:</label>
        <br></br>
        <input
          onChange={handleDate}   type="date" value={inputs.releaseDate} name="release" id="release" >
        </input>
        {/*console.log(inputs.releaseDate)*/}
        <p className={styles.danger}>{errors.releaseDate}</p>
        <br></br>
        <label htmlFor="rating">Rating:</label>
        <br></br>
        <input
          onChange={handleInputChange}  type="number" value={inputs.rating} name="rating" id="rating" placeholder='5'>
        </input>
        <p className={styles.danger}>{errors.rating}</p>
        <br></br>

        <label htmlFor="">Genres </label>
        <br></br>
        {//console.log("se imprime desde los generos")
        }
        <div className={styles.generos}>
              <select placeholder="Genre" onChange={handleGenres}>
              {genres.map(genero =>{
                  return <option key={genero.id} value={genero.id}>{genero.name}</option>
                  })}
              </select>
        </div>
        <p className={styles.danger}>{errors.generos}</p>
        <label htmlFor="">Platforms </label>          
        <div className={styles.plataformas}>
        <select placeholder="Plataforma" onChange={handlePlat}>
            {plataformas.map(plat =>{
            return <option key={plat.id} value={plat.name}>{plat.name}</option>
            })}
        </select>
        </div>     

        <button className={styles.enviar} type='submit'>Create game!</button>
      </form>
      <div className={styles.visualizar}>
            <h2>Preview</h2>
            <p>Name: {inputs.name}</p>
            <p>Rating: {inputs.rating}</p>
            <p>Description: </p>
            <p>{inputs.description}</p>
            <p>release date: </p>
            <p>{inputs.releaseDate}</p>
            <p>Genres:</p>
            <p>{aux.sGeneros}</p>
            <p>Platforms:</p>
      </div>
      </div>

      </div>

    </div>
    
  
  )
}
