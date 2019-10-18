
"use strict";
const {validationResult} = require("express-validator/check");

const Voyage = require("../models/Voyage");
module.exports = {
  async index(req, res) {
    const voyages = await new Voyage().fetch();
    res.json(voyages);
  },

  async store(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(422).json({errors: errors.array()});
      return;
    }

    try {
      const voyage = new Voyage();
      const v = await voyage.save(req.body);
      res.json(v);
    } catch (error) {
      res.status(500).json({message: `${error}`});
    }
  },

  async update(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(422).json({errors: errors.array()});
      return;
    }
    try {
      const voyage = new Voyage();
      const data = {...req.params, ...req.body};
      const v = await voyage.update(data);

      if (v == 0) {
        res.status(404).json({message: `Not found itm with id ${id}`});
        return;
      }

      res.json(v);
    } catch (error) {
      res.status(500).json({message: `${error}`});
    }
  },

  async find(req, res) {
    const voyage = await new Voyage().find(req.params);
    res.json(voyage);
  },

  async destroy(req, res) {
    const voyage = new Voyage();
    const {id} = req.params;
    const v = await voyage.destroy(id);
    if (v === 0) {
      res.status(404)
          .send({"message": `Not found itm with id ${id}`});
    } else {
      res.status(202)
          .send({"message": `Removed id ${id}`});
    }
  },
};
