const Tindakan = require("../models/tindakan.model");

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "konten tidak boleh kosong!",
    });
  }

  const tindakan = new Tindakan({
    namaTindakan: req.body.NAMATINDAKAN,
    hapus: req.body.HAPUS,
  });

  Tindakan.create(tindakan, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "terjadi kesalahan",
      });
    else res.send(data);
  });
};

exports.findAll = (req, res) => {
  Tindakan.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "terjadi kesalahan",
      });
    else res.send(data);
  });
};

exports.findOne = (req, res) => {
  Tindakan.findById(req.params.idTindakan, (err, data) => {
    if (err) {
      if (err.kind === "tidak ditemukan") {
        res.status(404).send({
          message: `tidak menemukan data tindakan dengan id = ${req.params.idTindakan}`,
        });
      } else {
        res.status(500).send({
          message:
            "kesalahan mendapatkan data tindakan dengan id " +
            req.params.idTindakan,
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

  Tindakan.updateById(
    req.params.idTindakan,
    new Tindakan(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "tidak ditemukan.") {
          res.status(404).send({
            message: `tidak menemukan data tindakan dengan id ${idTindakan}.`,
          });
        } else {
          res.status(500).send({
            message:
              "kesalaha update data tindakan dengan id " +
              req.params.idTindakan,
          });
        }
      } else res.send(data);
    }
  );
};

exports.delete = (req, res) => {
  Tindakan.remove(req.params.idTindakan, (err, data) => {
    if (err) {
      if (err.kind === "tidak ditemukan.") {
        res.status(404).send({
          message: `tidak menemukan data tindakan dengan id ${idTindakan}.`,
        });
      } else {
        res.status(500).send({
          message:
            "tidak dapat menghapus data tindakan dengan id " +
            req.params.idTindakan,
        });
      }
    } else res.send(data);
  });
};

exports.deleteAll = (req, res) => {
  Tindakan.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "terjadi kesalahan dalam menghapus data.",
      });
    else res.send({ message: "semua data tindakan sudah dihapus." });
  });
};
