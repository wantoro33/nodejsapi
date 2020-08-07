module.exports = (app) => {
  const tindakan = require("../controllers/tindakan.controller");

  app.post("/tindakan", tindakan.create);

  app.get("/tindakan", tindakan.findAll);

  app.get("/tindakan/:idTindakan", tindakan.findOne);

  app.put("/tindakan/:idTindakan", tindakan.update);

  app.delete("/tindakan/:idTindakan", tindakan.delete);

  app.delete("/tindakan", tindakan.deleteAll);
};
