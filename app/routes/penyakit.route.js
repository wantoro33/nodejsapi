module.exports = (app) => {
  const penyakit = require("../controllers/penyakit.controller");

  app.post("/penyakit", penyakit.create);

  app.get("/penyakit", penyakit.findAll);

  app.get("/penyakit/:idPenyakit", penyakit.findOne);

  app.put("/penyakit/:idPenyakit", penyakit.update);

  app.delete("/penyakit/:idPenyakit", penyakit.delete);

  app.delete("/penyakit", penyakit.deleteAll);
};
