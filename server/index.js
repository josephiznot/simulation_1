require("dotenv").config();
const axios = require("axios");
const { json } = require("body-parser");
const cors = require("cors");
const express = require("express");
const app = express();
const PORT = 3001;
const controller = require("./controller.js");
const massive = require("massive");

app.use(json());
app.use(cors());

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
  })
  .catch(console.log);

app.get("/api/inventory", controller.gitter);
app.post("/api/product", controller.poster);

app.listen(PORT, () => {
  console.log(`i am listening at port ${PORT}`);
});
