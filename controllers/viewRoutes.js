// bringing in routes from handlebars
const router = require('express').Router()
// bring in model, so have access to data
const { Burger } = require('../models')

router.get('/', (req, res) => {
  //res.render to make sure localhost working
  res.render('index')
  //instead of rendering, get data then have it render
  Burger.getBurgers(burgers =>{
    //render index hbs, pass it an object (burger data)
    res.render('index', { burgers })
  })
})

// export file to index.js in controllers folder
module.exports = router