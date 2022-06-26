// express intro

// const express = require("express");

// const app = express();

// app.get("/", (req, res) => {
//   res.send("Hello again from express server");
// });

// app.get("/random-stub", (req, res) => {
//   res.send("Hello from the stub url");
// });

// app.post("/random-stub", (req, res) => {
//   res.send("This must not be visible");
// });

// // to access this post from console
// /* await fetch("/random-stub", {method: "POST"}).then(res => res.text())
// 'This must not be visible' */

// app.listen(1910);

// send files to html

// const express = require("express");
// const path = require("path");

// const app = express();

// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "public/index.html"));
// });

// app.listen(1910);

// serve multiple static files together from a folder

const express = require("express");
const path = require("path");

const app = express();

app.use("/static", express.static(path.resolve(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("Welcome to home url");
});

app.listen(1910);
