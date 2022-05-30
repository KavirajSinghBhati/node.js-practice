const fs = require("fs");

function makeAFile(name, content) {
  fs.writeFileSync(name, content);
  console.log("File written");
}

module.exports = {
  makeAFile,
};
