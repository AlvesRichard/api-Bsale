const Airplanes = require("./Airplanes");
const BoardingPass = require("./BoardingPass");
const Flights = require("./Flights");
const Passengers = require("./Passengers");
const Purchase = require("./Purchase");
const Seats = require("./Seats");
const SeatTypes = require("./SeatTypes");

BoardingPass.hasMany(Purchase, { foreignKey: "purchaseId" });
Purchase.belongsTo(BoardingPass);

BoardingPass.hasMany(SeatTypes, { foreignKey: "seatTypesId" });
SeatTypes.belongsTo(BoardingPass);

BoardingPass.hasMany(Passengers, { foreignKey: "passengersId" });
Passengers.belongsTo(BoardingPass);

BoardingPass.hasMany(Flights, { foreignKey: "flightsId" });
Flights.belongsTo(BoardingPass);

BoardingPass.hasMany(Seats, { foreignKey: "seatsId" });
Seats.belongsTo(BoardingPass);

Seats.hasMany(SeatTypes, { foreignKey: "seatTypesId" });
SeatTypes.belongsTo(Seats);

Seats.hasMany(Airplanes, { foreignKey: "airplanesId" });
Airplanes.belongsTo(Seats);

Flights.hasMany(Airplanes, { foreignKey: "airplanesId" });
Airplanes.belongsTo(Flights);

module.exports = {
  Airplanes,
  BoardingPass,
  Flights,
  Passengers,
  Purchase,
  Seats,
  SeatTypes,
};
