const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

app.use("/", express.static(path.resolve(__dirname, "public")));
app.use(bodyParser.json());

app.post("/data", (req, res) => {
  console.log(req.body);
  res.json({ status: "ok" }); // shown in browser console
});

app.listen(1910);
