const Character = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { id } = req.params;
  const character = await Character.findById(id);
  response(res, 200, character);
};
