const server = require("./src/server");

// const { Character, Film } = require("./src/database");
//
// Character.list().then((res) => console.log(res));

server.listen(8004, () => {
  console.log("Database service on PORT 8004");
});
