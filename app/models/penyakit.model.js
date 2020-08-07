const sql = require("./db");

const Penyakit = function (penyakit) {
  this.kodePenyakit = penyakit.KODEPENYAKIT;
  this.namaPenyakit = penyakit.NAMAPENYAKIT;
  this.aktif = penyakit.AKTIF;
};

Penyakit.create = (newPenyakit, result) => {
  sql.query("insert into masterpenyakit set ?", newPenyakit, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("membuat master penyakit: ", {
      id: res.insertedId,
      ...newPenyakit,
    });
    result(null, { id: res.insertedId, ...newPenyakit });
  });
};

Penyakit.findById = (idPenyakit, result) => {
  sql.query(
    `select * from masterpenyakit where id_penyakit = ${idPenyakit}`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.length) {
        console.log("menemukan data penyakit: ", res[0]);
        result(null, res[0]);
        return;
      }

      result({ kind: "tidak ditemukan" }, null);
    }
  );
};

Penyakit.getAll = (result) => {
  sql.query("select * from masterpenyakit", (err, res) => {
    if (err) {
      console.log("error", err);
      result(null, err);
      return;
    }

    console.log("data penyakit: ", res);
    result(null, res);
  });
};

Penyakit.updateById = (id, penyakit, result) => {
  sql.query(
    "update masterpenyakit set kodepenyakit=?, namapenyakit=?, aktif=? where id_penyakit = ?",
    [penyakit.kodePenyakit, penyakit.namaPenyakit, penyakit.aktif, id],
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

      console.log("update data penyakit: ", { id: id, ...penyakit });
      result(null, { id: id, ...penyakit });
    }
  );
};

Penyakit.remove = (id, result) => {
  sql.query(
    "delete from masterpenyakit where id_penyakit = ?",
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

      console.log("menghapus data penyakit dengan id: ", id);
      result(null, res);
    }
  );
};

Penyakit.removeAll = (result) => {
  sql.query("delete from materpenyakit", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows}`, res);
    result(null, res);
  });
};

module.exports = Penyakit;
