// This file is not to be modified. Please ignore this.
// We will understand all of this later in the course.
// DO NOT MODIFY THIS FILE

const express = require("express");
const path = require("path");
const threesum = require("./script");

// Parse JSON bodies (as sent by API clients)
const bodyParser = require("body-parser");

const app = express();

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/main.html"));
});

app.post("/threesum", (req, res) => {
  const { arr, target } = req.body;
  const ans = threesum(arr, target);
  res.send({ message: ans });
});

module.exports = app;
