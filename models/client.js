const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Clients", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    username: {
      type: DataTypes.STRING,
    },
    chatId: {
      type: DataTypes.INTEGER,
    },
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    fullName: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    age: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    gender: {
      allowNull: true,
      type: DataTypes.ENUM(["Erkak", "Ayol"]),
    },
    address: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    phoneNumber: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  });

  return () => { };
};
