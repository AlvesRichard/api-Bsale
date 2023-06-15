const passengersService = require("../services/passengersService");
const getPassengers = (req, res) => {
  const allPassengers = passengersService.getPassengers();
  res.send(allPassengers);
};

module.exports = { getPassengers };
