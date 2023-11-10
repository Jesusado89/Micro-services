const axios = require("axios");
const characters = require("./characters.json");

module.exports = {
  list: async () => {
    const results = await axios.get("http://database:8004/Character");
    return results.data;
  },

  create: async () => {
    throw Error("There is a mistake when creating the character");
  },
};
