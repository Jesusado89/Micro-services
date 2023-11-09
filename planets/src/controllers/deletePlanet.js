const Planet = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { id } = req.params;
  await Planet.findByIdAndDelete(id);
  response(res, 200, { message: "Planet deleted successfully" });
};
