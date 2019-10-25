
const envionmentConfig = require("./knexfile");
const knex = require("knex");
module.exports = knex(envionmentConfig[process.env.APP_ENV || "development"]);

