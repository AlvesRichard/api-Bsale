const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db");

class SeatTypes extends Model {}

SeatTypes.init(
  {
    seatTypeId: {
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
    modelName: "SeatType",
  }
);

module.exports = SeatTypes;
