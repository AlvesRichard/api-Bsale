const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db");

class Airplanes extends Model {}

Airplanes.init(
  {
    airplaneId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      max: 255,
    },
  },
  {
    sequelize,
    modelName: "Airplane",
  }
);

module.exports = Airplanes;
