require("dotenv").config();
const express = require("express");
const morgan = require("morgan");

const v1Route = require("./v1/routes/passengers");
const db = require("./db");

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/", v1Route);

const PORT = process.env.PORT || 3001;

db.sync({ force: false })
  .then(() => {
    app.listen(PORT, () => console.log(`server listenning on port ${PORT}`));
  })
  .catch((err) => {
    console.error(err);
  });
