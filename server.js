const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello again from express server");
});

app.listen(1910);
