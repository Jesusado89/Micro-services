const Planet = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { id } = req.params;
  const updatedPlanet = await Planet.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  response(res, 200, updatedPlanet);
};
