const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares");

const router = Router();

router.get("/", controllers.getFilms);
router.get("/", controllers.getOneFilm);
router.post("/", middlewares.filmValidation, controllers.createFilm);
router.put("/", controllers.putFilm);
router.delete("/", controllers.deleteFilm);

module.exports = router;
