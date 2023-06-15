const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db");

class Passengers extends Model {}

Passengers.init(
  {
    passengerId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    dni: {
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
      max: 255,
    },
    age: {
      type: DataTypes.INTEGER,
    },
    country: {
      type: DataTypes.STRING,
      max: 255,
    },
  },
  {
    sequelize,
    modelName: "Passenger",
  }
);

module.exports = Passengers;
