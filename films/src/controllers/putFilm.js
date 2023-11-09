const Film = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { id } = req.params;
  const updatedFilm = await Film.findByIdAndUpdate(id, req.body, { new: true });
  response(res, 200, updatedFilm);
};
