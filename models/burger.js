const orm = require('../config/orm.js')

module.exports = {
  getBurgers(cb) {
    orm.getAll('burgers', burgers => cb(burgers))
  },
  addBurger(burger, cb) {
    orm.createOne('burgers', burger, info => cb(info))
  },
  updateBurger(changes, where, cb) {
    orm.updateOne('burgers', changes, where, info => cb(info))
  }
}