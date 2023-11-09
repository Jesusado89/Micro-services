const Character = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { id } = req.params;
  const updatedCharacter = await Character.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  response(res, 200, updatedCharacter);
};
