const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares");

const router = Router();

router.get("/", controllers.getCharacters);
router.get("/", controllers.getOneCharacter);
router.post("/", middlewares.characterValidation, controllers.createCharacter);
router.put("/", controllers.putCharacter);
router.delete("/", controllers.deleteCharacter);

module.exports = router;
