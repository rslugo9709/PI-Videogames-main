const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Videogame', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    description:{
      type: DataTypes.TEXT,
      allowNull: false
    },
    platforms:{
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
      
    },
    image:{
      type: DataTypes.STRING,
      allowNull: false
    },
    releaseDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    rating:{
      type: DataTypes.FLOAT,
      allowNull: false
    },
    created:{
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }


  },{ timestamps: false });
};

//la api key 
//b410baa0ae3c4c59b33fccfd5740b042