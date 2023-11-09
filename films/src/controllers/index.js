const { catchedAsync } = require("../utils");

module.exports = {
  getFilms: catchedAsync(require("./getFilms")),
  getOneFilm: catchedAsync(require("./getOneFilm")),
  createFilm: catchedAsync(require("./createFilm")),
  putFilm: catchedAsync(require("./putFilm")),
  deleteFilm: catchedAsync(require("./deleteFilm")),
};
