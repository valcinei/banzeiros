"use strict";

const Base = require("./Base");

class Habor extends Base {
  fetch() {
    return this.model.select({
      "id": "habors.id",
      "location": "location",
      "obs": "obs",
      "state_id": "state_id",
      "city": "cities.name",
    })
        .join("cities", function() {
          // eslint-disable-next-line no-invalid-this
          this.on("habors.city_id", "=", "cities.id");
        } );
  }
};

module.exports = Habor;
