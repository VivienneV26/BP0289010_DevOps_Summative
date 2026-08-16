const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/health", (req, res) => {
  res.json({
    status: "UP"
  });
});

if (require.main === module) {
  app.listen(3000, () => {
    console.log("Listening on port 3000");
  });
}

module.exports = app;
