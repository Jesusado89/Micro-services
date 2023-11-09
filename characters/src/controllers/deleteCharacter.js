const Character = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { id } = req.params;
  await Character.findByIdAndDelete(id);
  response(res, 200, { message: "Character deleted successfully" });
};
