
"use strict";

const State = require("../models/State");
module.exports = {
  async index(req, res) {
    const states = await new State().fetch();
    res.json(states);
  },

  async store(req, res) {
    const state = new State();
    const s = await state.save(req.body);
    res.json(s);
  },

  async find(req, res) {
    const state = await new State().find(req.params);
    res.json(state);
  },

  async update(req, res) {
    const state = new State();
    const data = {...req.params, ...req.body};
    const s = await state.update(data);
    res.json(s);
  },

  async destroy(req, res) {
    const state = new State();
    const {id} = req.params;
    const s = await state.destroy(id);
    if (s === 0) {
      res.status(404)
          .send({"message": `Not found itm with id ${id}`});
    } else {
      res.status(202)
          .send({"message": `Removed id ${id}`});
    }
  },
};
