const db = require("../connection");

const getAllMaps = () => {
  return db.query("SELECT * FROM maps;").then((data) => {
    return data.rows;
  });
};

module.exports = { getAllMaps };
