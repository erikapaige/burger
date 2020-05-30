require('dotenv').config()
const express = require('express')
// bring in path for express static middlewear
const { join } = require('path')

const app = express()

//express middlewear
app.use(express.static(join(__dirname, '/public/')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// middlewear for handelbars
// changed handlebars to .hbs to be used for extension for handelbar files
app.engine('.hbs', require('express-handlebars')({ extname: '.hbs' }))
app.set('view engine', '.hbs')

// brings in the routes from controllers folder
app.use(require('./controllers/index.js'))

//listening on a port
app.listen(process.env.PORT || 3000, () => console.log('http://localhost:3000'))