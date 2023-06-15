const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db");

class Flights extends Model {}

Flights.init(
  {
    flightId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    takeoffDateTime: {
      type: DataTypes.INTEGER,
    },
    takeoffAirport: {
      type: DataTypes.STRING,
      max: 255,
    },
    landingDateTime: {
      type: DataTypes.INTEGER,
    },
    landingAirport: {
      type: DataTypes.STRING,
      max: 255,
    },
    airplaneId: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: "Flight",
  }
);

module.exports = Flights;
