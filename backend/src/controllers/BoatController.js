
"use strict";

const Boat = require("../models/Boat");
module.exports = {
  async index(req, res) {
    const boats = await new Boat().fetch();
    res.json(boats);
  },

  async store(req, res) {
    const boat = new Boat();
    const b = await boat.save(req.body);
    res.json(b);
  },

  async find(req, res) {
    const boat = await new Boat().find(req.params);
    res.json(boat);
  },

  async update(req, res) {
    const boat = new Boat();
    const data = {...req.params, ...req.body};
    const b = await boat.update(data);
    res.json(b);
  },

  async destroy(req, res) {
    const boat = new Boat();
    const {id} = req.params;
    const b = await boat.destroy(id);
    if (b === 0) {
      res.status(404)
          .send({"message": `Not found itm with id ${id}`});
    } else {
      res.status(202)
          .send({"message": `Removed id ${id}`});
    }
  },
};
