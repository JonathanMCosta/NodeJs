const Sequelize = require("sequelize");

const connection = new Sequelize("suaBaseDeDados", "seuUsuario", "suaSenha", {
  host: "seuIP",
  dialect: "mysql",
  timezone: "-03:00",
});

module.exports = connection;
