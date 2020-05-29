// require('dotenv').config()
const express = require('express')
const { join } = require('path')
const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// middlewear for handelbars
// changed handlebars to .hbs to be used for extension for handelbar files
app.engine('.hbs', require('express-handlebars')({ extname: '.hbs' }))
app.set('view engine', '.hbs')

app.use(require('./controllers/index.js'))

app.listen(process.env.PORT, () => console.log('http://localhost:3000'))