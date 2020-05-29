// bring in orm from orm file
const orm = require('../config/orm.js')

// queries using burgers
module.exports = {
  getBurgers(cb) {
    orm.getAll('burgers', burgers => cb(burgers))
  },
  addBurger(burger, cb) {
    orm.createOne('burgers', burger, info => cb(info))
  },
  updateBurger(changes, where, cb) {
    orm.updateOne('burgers', changes, where, info => cb(info))
  },
  deleteBurger(where, cb) {
    orm.deleteOne('burgers', where, info => cb(info))
  }
}