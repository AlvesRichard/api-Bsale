const express = require("express");
const router = express.Router();
const passengersController = require("../../controllers/passengersController");

router.get("/flights/:id/passengers", passengersController.getPassengers);

module.exports = router;
