const {check} = require("express-validator");

module.exports = {
  update() {
    return [
      check("id").exists(),
      check("description").exists(),
      check("duration").exists(),
      check("departure_weekday").exists(),
      check("arrival_weekday").exists(),
      check("arrival_hour").exists(),
      check("departure_hour").exists(),
      check("departure_habor_id").exists(),
      check("arrival_habor_id").exists(),
      check("boat_id").exists(),
    ];
  },
  create() {
    return [
      check("description").exists(),
      check("duration").exists(),
      check("departure_weekday").exists(),
      check("arrival_weekday").exists(),
      check("arrival_hour").exists(),
      check("departure_hour").exists(),
      check("departure_habor_id").exists(),
      check("arrival_habor_id").exists(),
      check("boat_id").exists(),
    ];
  },
};
