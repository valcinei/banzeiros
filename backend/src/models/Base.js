"use strict";

const pluralize = require("pluralize");
const db = require("../db");

class Base {
  /** This Set table name pluralize. */
  constructor() {
    this.pk = "id";
    this.tableName = pluralize(this.constructor.name.toLocaleLowerCase());
    this.model = db(this.getName());
  }

  async save(data) {
    return await this.model.insert(data).returning("*");
  }

  async update(data) {
    return await this.model
        .where(this.pk, data.id)
        .update(data).returning("*");
  }

  async find(query) {
    return await this.model.where(query).first("*");
  }

  async fetch() {
    return await this.model.returning("*");
  }

  async query(query) {
    return await this.model.where(...query);
  }

  async destroy(id) {
    return await this.model
        .where(this.pk, id)
        .del();
  }

  /** Returns Plurilize table name
   * @return {string} */
  getName() {
    return this.tableName;
  }
}

module.exports = Base;
