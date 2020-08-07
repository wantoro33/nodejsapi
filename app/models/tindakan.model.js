const sql = require("./db");

const Tindakan = function (tindakan) {
  this.namaTindakan = tindakan.NAMATINDAKAN;
  this.hapus = tindakan.HAPUS;
};

Tindakan.create = (newTindakan, result) => {
  sql.query("insert into mastertindakan set ?", newTindakan, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("membuat master Tindakan: ", {
      id: res.insertedId,
      ...newTindakan,
    });
    result(null, { id: res.insertedId, ...newTindakan });
  });
};

Tindakan.findById = (idTindakan, result) => {
  sql.query(
    `select * from mastertindakan where id_tindakan = ${idTindakan}`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.length) {
        console.log("menemukan data Tindakan: ", res[0]);
        result(null, res[0]);
        return;
      }

      result({ kind: "tidak ditemukan" }, null);
    }
  );
};

Tindakan.getAll = (result) => {
  sql.query("select * from mastertindakan", (err, res) => {
    if (err) {
      console.log("error", err);
      result(null, err);
      return;
    }

    console.log("data Tindakan: ", res);
    result(null, res);
  });
};

Tindakan.updateById = (id, tindakan, result) => {
  sql.query(
    "update mastertindakan set namatindakan=?, hapus=? where id_tindakan = ?",
    [tindakan.namaTindakan, tindakan.hapus, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        result({ kind: "tidak ditemukan." }, null);
        return;
      }

      console.log("update data Tindakan: ", { id: id, ...tindakan });
      result(null, { id: id, ...tindakan });
    }
  );
};

Tindakan.remove = (id, result) => {
  sql.query(
    "delete from mastertindakan where id_tindakan = ?",
    id,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        result({ kind: "tidak ditemukan." }, null);
        return;
      }

      console.log("menghapus data Tindakan dengan id: ", id);
      result(null, res);
    }
  );
};

Tindakan.removeAll = (result) => {
  sql.query("delete from matertindakan", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows}`, res);
    result(null, res);
  });
};

module.exports = Tindakan;
