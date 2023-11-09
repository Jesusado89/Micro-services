const { Schema } = require("mongoose");

const characterShema = new Schema({
  _id: String,
  name: String,
  height: String,
  mass: String,
  hair_color: String,
  skin_color: String,
  eye_color: String,
  birth_year: Date,
  gender: String,
  homeworld: { type: String, ref: "Planet" },
  films: [{ type: String, ref: "Film" }],
});

characterShema.statics.list = async function () {
  return await this.find()
    .populate("homeworld", ["_id", "name"])
    .populate("films", ["_id", "title"]);
};

characterShema.statics.get = async function (id) {
  return await this.findById(id)
    .populate("homeworld", ["_id", "name"])
    .populate("films"["_id", "title"]);
};

characterShema.statics.insert = async function (character) {
  return await this.create(character);
};

characterShema.statics.update = async function (id, character) {
  return await this.findByIdAndUpdate(id, character, { new: true });
};

characterShema.statics.remove = async function (id) {
  return await this.findByIdAndDelete(id);
};

characterShema.statics.findByFilm = async function (filmId) {
  return await this.find({ films: filmId });
};

characterShema.statics.findByHomeworld = async function (homeworldId) {
  return await this.find({ homeworld: homeworldId });
};


module.exports = characterShema;
