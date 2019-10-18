
"use strict";
const {validationResult} = require("express-validator/check");

const Habor = require("../models/Habor");
module.exports = {
  async index(req, res) {
    const habors = await new Habor().fetch();
    res.json(habors);
  },

  async store(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(422).json({errors: errors.array()});
      return;
    }

    try {
      const habor = new Habor();
      const h = await habor.save(req.body);
      res.json(h);
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
      const habor = new Habor();
      const data = {...req.params, ...req.body};
      const h = await habor.update(data);

      if (h == 0) {
        res.status(404).json({message: `Not found itm with id ${id}`});
        return;
      }

      res.json(h);
    } catch (error) {
      res.status(500).json({message: `${error}`});
    }
  },

  async find(req, res) {
    const habor = await new Habor().find(req.params);
    res.json(habor);
  },

  async destroy(req, res) {
    const habor = new Habor();
    const {id} = req.params;
    const h = await habor.destroy(id);
    if (h === 0) {
      res.status(404)
          .send({"message": `Not found itm with id ${id}`});
    } else {
      res.status(202)
          .send({"message": `Removed id ${id}`});
    }
  },
};
