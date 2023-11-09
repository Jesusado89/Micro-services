const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares");

const router = Router();

router.get("/", controllers.getPlanets);
router.get("/", controllers.getOnePlanet);
router.post("/", middlewares.planetValidation, controllers.createPlanet);
router.put("/", controllers.putPlanet);
router.delete("/", controllers.deletePlanet);

module.exports = router;
