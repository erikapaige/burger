// bring in express router
const router = require('express').Router()

// list of files with routes in controllers folder
router.use('/api', require('./burgers_controller.js'))
router.use(require('./viewRoutes.js'))

// exporting this file to server.js
module.exports = router