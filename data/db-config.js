const knex = require("knex");

const knexconfig = require("../knexfile.js");
const db = knex(knexConfig.development);

module.exports = db;
