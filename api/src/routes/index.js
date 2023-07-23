const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const {getVideogames} = require("../controllers/getVideogames");
const {getVideogameById} = require("../controllers/getVideogameById");
const {postVideogame} = require("../controllers/postVideogame");
const {getGenres} = require("../controllers/getGenres");
const {getVideoGameByName} = require("../controllers/getVideogameByName")
const {getPlat} = require("../controllers/getPlatforms");
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/videogames/", getVideogames);
router.get("/videogame/:id", getVideogameById);
router.get("/videogames/name/", getVideoGameByName);
router.post("/videogames", postVideogame);
router.get("/genres", getGenres);
router.get("/platforms", getPlat);


module.exports = router;
