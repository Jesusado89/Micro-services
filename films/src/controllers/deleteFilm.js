const Film = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { id } = req.params;
  await Film.findByIdAndDelete(id);
  response(res, 200, { message: "Film deleted successfully" });
};
