const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db");

class Seats extends Model {}

Seats.init(
  {
    seatId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    seatColumn: {
      type: DataTypes.STRING,
      max: 2,
    },
    seatRow: {
      type: DataTypes.INTEGER,
    },
    seatTypeId: {
      type: DataTypes.INTEGER,
    },
    airplaneId: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: "Seat",
  }
);

module.exports = Seats;
