const { Schema } = require("mongoose");

const planetSchema = new Schema({
  _id: String,
  name: String,
  rotation_period: String,
  orbital_period: String,
  diameter: String,
  climate: String,
  gravity: String,
  terrain: String,
  surface_water: String,
  residents: [{ type: String, ref: "Character" }],
  films: [{ type: String, ref: "Film" }],
});

planetSchema.statics.list = async function () {
  return await this.find()
    .populate("residents", ["_id", "name"])
    .populate("films", ["_id", "title"]);
};

planetSchema.statics.get = async function (id) {
  return await this.findById(id)
    .populate("residents", ["_id", "name"])
    .populate("films", ["_id", "title"]);
};

planetSchema.statics.insert = async function (planet) {
  return await this.create(planet);
};

planetSchema.statics.update = async function (id, planet) {
  return await this.findByIdAndUpdate(id, planet, { new: true });
};

planetSchema.statics.remove = async function (id) {
  return await this.findByIdAndDelete(id);
};

planetSchema.statics.findByCharacter = async function (characterId) {
  return await this.find({ characters: characterId });
};

planetSchema.statics.findByFilm = async function (filmId) {
  return await this.find({ films: filmId });
};


module.exports = planetSchema;
