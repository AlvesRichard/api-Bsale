const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db");

class Purchase extends Model {}

Purchase.init(
  {
    purchaseId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    purchaseDate: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: "Purchase",
  }
);

module.exports = Purchase;
