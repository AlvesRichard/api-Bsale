const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db");

class BoardingPass extends Model {}

BoardingPass.init(
  {
    boardingPassId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    purchaseId: {
      type: DataTypes.INTEGER,
    },
    passengerId: {
      type: DataTypes.INTEGER,
    },
    seatTypeId: {
      type: DataTypes.INTEGER,
    },
    seatId: {
      type: DataTypes.INTEGER,
    },
    fightId: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: "BoardingPass",
  }
);

module.exports = BoardingPass;
