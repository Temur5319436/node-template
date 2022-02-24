const sequelize = require('./models');

const main = async () => {
  await sequelize.authenticate();
};

main();
