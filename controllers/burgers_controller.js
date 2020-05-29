const router = require('express').Router()
const { Burger } = require('../models')

// GET all movies
router.get('/movies', (req, res) => Movie
  .getMovies(movies => res.json(movies)))

// POST one movie
router.post('/movies', (req, res) => Movie
  .addMovie(req.body, info => res.json(info)))

// PUT one movie
router.put('/movies/:id', (req, res) => Movie
  .updateMovie(req.body, { id: req.params.id }, info => res.json(info)))

module.exports = router
