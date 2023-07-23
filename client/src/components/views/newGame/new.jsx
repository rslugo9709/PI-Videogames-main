import React from 'react'
import { useState } from 'react';
import styles from './new.module.css'

// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export function validate( inputs ){
  let errors = {};
  if (!inputs.name.length) {
    errors.name = 'Se requiere un nombre';
  }
  if (!inputs.image.length) {
    errors.image = 'A valid URL is required';
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
    rating: 0

  })

  //seteamos el hook para el error
  const [errors, setErrors] = useState({
    
    name:"",
    image: "",
    description:"",
    rating: 0

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
        description:""
      }
      )

      setErrors({
        name:"",
        image: "",
        description:""
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
        <input onChange={handleInputChange} className={errors.name && styles.warning} type="text" value={inputs.name} name="name" id="name" placeholder='Name of the game...'/>
        <p className={styles.danger}>{errors.name}</p>

        <label htmlFor='image'>Image's URL:</label>
        <input onChange={handleInputChange} className={errors.image && "warning"} type="text" value={inputs.image} name="image" id="image" placeholder='www...'/>
        <p className='danger'>{errors.image}</p>

        <label htmlFor="description">Description:</label>
        <textarea 
          onChange={handleInputChange} className={errors.description && "warning"} type="text" value={inputs.description} name="description" id="description" placeholder='The game is about...' rows="3" cols="30">
          </textarea>
        <p className='danger'>{errors.description}</p>

        <br></br>
        <br></br>
        <label htmlFor="release">Release date:</label>
        <input
          onChange={handleInputChange}  type="date" value={inputs.release} name="release" id="release" >
        </input>
        <br></br>
        <br></br>
        <label htmlFor="rating">Rating:</label>
        <input
          onChange={handleInputChange}  type="number" value={inputs.rating} name="rating" id="rating" placeholder='5'>
        </input>
        <br></br>

        <label htmlFor="">Genres </label>
        <br></br>
        {//console.log("se imprime desde los generos")
        }
        <div className={styles.generos}>
        {genres.map(genero =>{
            //console.log(genero.name)
            return (
              <div key={`${genero.name}c`}>
              <input type="checkbox" name={genero.id} key={genero.id} value={genero.name} onChange={handleInputChange} />
              <label key={`${genero.name}l` }>{genero.name}</label>
              </div>
              )
        
                        })}
        </div>

        <div className={styles.plataformas}>
        <select placeholder="Plataforma" onChange={handleInputChange}>
            {plataformas.map(plat =>{
            return <option key={plat.id} value={plat.name}>{plat.name}</option>
            })}
        </select>
        </div>     

        <button className={styles.enviar} type='submit'>Create game!</button>
      </form>
      </div>
      </div>
    </div>
    
  
  )
}
