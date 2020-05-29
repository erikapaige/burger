const router = require('express').Router()
const { Burger } = require('../models')

// GET all burgers
router.get('/burgers', (req, res) => Burger
  .getBurgers(burgers => res.json(burgers)))

// POST one burger
router.post('/burgers', (req, res) => Burger
  .addBurger(req.body, info => res.json(info)))

// PUT one burger
router.put('/burgers/:id', (req, res) => Burger
  .updateBurger(req.body, { id: req.params.id }, info => res.json(info)))

// DELETE burger
router.delete('/burgers/:id', (req, res) => Burger
  .deleteBurger({ id: req.params.id }, info => res.json(info)))

module.exports = router
