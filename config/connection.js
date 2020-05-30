// bring in npm package mysql2
const mysql = require('mysql2')

// connection w/ new mysql connection,
// module.exports = mysql.createConnection('mysql://root:rootroot1@localhost:3306/burgers_db')

// below is connection use once deployed on heroku / JAWS
const db = mysql.createConnection(process.env.JAWSDB_URL || process.env.LOCAL_URL)

module.exports = db