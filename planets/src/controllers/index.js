const { catchedAsync } = require("../utils");

module.exports = {
  getPlanets: catchedAsync(require("./getPlanets")),
  getOnePlanet: catchedAsync(require("./getOnePlanet")),
  createPlanet: catchedAsync(require("./createPlanet")),
  putPlanet: catchedAsync(require("./putPlanet")),
  deletePlanet: catchedAsync(require("./deletePlanet")),
};
