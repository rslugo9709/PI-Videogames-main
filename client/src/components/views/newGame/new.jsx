import React from 'react'
import { useState } from 'react';
import styles from './new.module.css'



export function validate( inputs ){
  let errors = {};
  if (!inputs.name.length) {
    errors.name = 'Se requiere un nombre';
  }
  if (!inputs.image.length) {
    errors.image = 'A valid URL is required';
  }
  if (!inputs.rating.length) {
    errors.rating = 'A valid rating is required';
  }else if(inputs.rating <0){
    errors.rating = 'Rating cannot be less than 0';
  }else if(inputs.rating >5  ){
    errors.rating = 'Rating cannot be more than 5';
  }

  if(!inputs.releaseDate.length){
    errors.releaseDate = "There must be a valid date"
  }
  if (!inputs.description.length) {
    errors.description = 'A valid description is required!';
  }

  return errors;

}
export default function Add ({genres, plataformas}) {

  //console.log("se imprime desde adicionar las plataformas")
  //console.log(plataformas)
  //seteamos el hook para el input
  const [inputs, setInputs] = useState({
    
    name:"",
    image: "",
    description:"",
    
    rating: 0,
    plataformas: [],
    generos: []
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

  return (
    <div className={styles.origin}>
      <div className={styles.container}>
      <h1>Create a new game</h1>
      <p>Please fill out this form with the required information</p>
      <div className={styles.formContainer}>
      <form onSubmit={handleSubmit} action=''className={styles.formulario}>


        <label htmlFor='name'>Name:</label>
        <br></br>
        <input onChange={handleInputChange} className={errors.name && styles.warning} type="text" value={inputs.name} name="name" id="name" placeholder='Name of the game...'/>
        <p className={styles.danger}>{errors.name}</p>

        <label htmlFor='image'>Image's URL:</label>
        <br></br>
        <input onChange={handleInputChange} className={errors.image && "warning"} type="text" value={inputs.image} name="image" id="image" placeholder='www...'/>
        <p className={styles.danger}>{errors.image}</p>

        <label htmlFor="description">Description:</label>
        <br></br>
        <textarea 
          onChange={handleInputChange} className={errors.description && "warning"} type="text" value={inputs.description} name="description" id="description" placeholder='The game is about...' rows="3" cols="30">
          </textarea>
        <p className={styles.danger}>{errors.description}</p>
        <br></br>
        <label htmlFor="release">Release date:</label>
        <br></br>
        <input
          onChange={handleInputChange}  type="date" value={inputs.releaseDate} name="release" id="release" >
        </input>
        {console.log(inputs.releaseDate)}
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
              <select placeholder="Genre" onChange={handleInputChange}>
              <option value="all">All genres</option>
              {genres.map(genero =>{
                  return <option key={genero.id} value={genero.name}>{genero.name}</option>
                  })}
              </select>
        </div>
        <label htmlFor="">Platforms </label>          
        <div className={styles.plataformas}>
        <select placeholder="Plataforma" onChange={handleInputChange}>
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
      </div>
      </div>

      </div>

    </div>
    
  
  )
}
