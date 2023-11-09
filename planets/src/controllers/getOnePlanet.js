const Planet = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { id } = req.params;
  const planet = await Planet.findById(id);
  response(res, 200, planet);
};
