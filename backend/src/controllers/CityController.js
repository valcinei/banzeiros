
"use strict";

const City = require("../models/City");
module.exports = {
  async index(req, res) {
    if (!!req.query && req.query.name) {
      const {name} = req.query;
      const city = new City();
      const c = await city.query(["name", "ilike", `%${name}%`]);
      res.json(c);
      return;
    }
    const citites = await new City().fetch();
    res.json(citites);
  },

  async store(req, res) {
    const city = new City();
    const c = await city.save(req.body);
    res.json(c);
  },

  async find(req, res) {
    const city = await new City().find(req.params);
    res.json(city);
  },

  async update(req, res) {
    const city = new City();
    const data = {...req.params, ...req.body};
    const c = await city.update(data);
    res.json(c);
  },

  async destroy(req, res) {
    const city = new City();
    const {id} = req.params;
    const c = await city.destroy(id);
    if (c === 0) {
      res.status(404)
          .send({"message": `Not found itm with id ${id}`});
    } else {
      res.status(202)
          .send({"message": `Removed id ${id}`});
    }
  },
};
