const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const {getVideogames} = require("../controllers/getVideogames");
const {getVideogameById} = require("../controllers/getVideogameById");
const {postVideogame} = require("../controllers/postVideogame");
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/videogames", getVideogames);
router.get("/videogame/:id", getVideogameById);
//aqui va la busqueda por query
router.post("/videogames", postVideogame);
//router.get("/genres", getGenres);



module.exports = router;
