const {check} = require("express-validator");

module.exports = {
  update() {
    return [
      check("id").exists(),
      check("name").exists(),
      check("location").exists(),
      check("city_id").exists(),
    ];
  },
  create() {
    return [
      check("name").exists(),
      check("location").exists(),
      check("city_id").exists(),
    ];
  },
};
