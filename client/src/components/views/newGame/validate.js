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
    if(!inputs.generos.length){
        errors.generos = "You should add at least 1 genre"
    }
    return errors;
  
  }