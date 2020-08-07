const Penyakit = require("../models/penyakit.model");

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "konten tidak boleh kosong!",
    });
  }

  const penyakit = new Penyakit({
    kodePenyakit: req.body.KODEPENYAKIT,
    namaPenyakit: req.body.NAMAPENYAKIT,
    aktif: req.body.AKTIF,
  });

  Penyakit.create(penyakit, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "terjadi kesalahan",
      });
    else res.send(data);
  });
};

exports.findAll = (req, res) => {
  Penyakit.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "terjadi kesalahan",
      });
    else res.send(data);
  });
};

exports.findOne = (req, res) => {
  Penyakit.findById(req.params.idPenyakit, (err, data) => {
    if (err) {
      if (err.kind === "tidak ditemukan") {
        res.status(404).send({
          message: `tidak menemukan data penyakit dengan id = ${req.params.idPenyakit}`,
        });
      } else {
        res.status(500).send({
          message:
            "kesalahan mendapatkan data penyakit dengan id " +
            req.params.idPenyakit,
        });
      }
    } else res.send(data);
  });
};

exports.update = (req, res) => {
  if (!req.body) {
    req.status(400).send({
      message: "konten tidak boleh kosong.",
    });
  }

  Penyakit.updateById(
    req.params.idPenyakit,
    new Penyakit(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "tidak ditemukan.") {
          res.status(404).send({
            message: `tidak menemukan data penyakit dengan id ${idPenyakit}.`,
          });
        } else {
          res.status(500).send({
            message:
              "kesalaha update data penyakit dengan id " +
              req.params.idPenyakit,
          });
        }
      } else res.send(data);
    }
  );
};

exports.delete = (req, res) => {
  Penyakit.remove(req.params.idPenyakit, (err, data) => {
    if (err) {
      if (err.kind === "tidak ditemukan.") {
        res.status(404).send({
          message: `tidak menemukan data penyakit dengan id ${idPenyakit}.`,
        });
      } else {
        res.status(500).send({
          message:
            "tidak dapat menghapus data penyakit dengan id " +
            req.params.idPenyakit,
        });
      }
    } else res.send(data);
  });
};

exports.deleteAll = (req, res) => {
  Penyakit.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "terjadi kesalahan dalam menghapus data.",
      });
    else res.send({ message: "semua data penyakit sudah dihapus." });
  });
};
