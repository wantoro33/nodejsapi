const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const whiteList = [
  "*",
  // "http://127.0.0.1:3001",
  // "http://localhost:3000",
  // "http://localhost:3001",
  // "https://localhost:3000",
  // "https://127.0.0.1:3000",
];

const cosrOption = {
  origin: function (origin, callback) {
    if (whiteList.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS."));
    }
  },
};

// app.use(cors(cosrOption));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "sukses memparsing data." });
});

require("./app/routes/penyakit.route")(app);
require("./app/routes/tindakan.route")(app);
app.listen(3001, () => {
  console.log("server berjalan di port 3001");
});
