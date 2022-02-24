require("dotenv").config();
const sequelize = require("./models");
const server = require("./app/server");

const { PORT, HOST } = process.env;

server.listen(PORT, HOST, async () => {
  await sequelize.authenticate();
});
