const { catchedAsync } = require("../utils");

module.exports = {
  getCharacters: catchedAsync(require("./getCharacters")),
  getOneCharacter: catchedAsync(require("./getOneCharacter")),
  createCharacter: catchedAsync(require("./createCharacter")),
  putCharacter: catchedAsync(require("./putCharacter")),
  deleteCharacter: catchedAsync(require("./deleteCharacter")),
};
