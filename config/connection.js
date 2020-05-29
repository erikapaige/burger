const mysql = require('mysql2')

// establishes connection params to database
module.exports = mysql.createConnection({
  host: 'localhost',
  // port
  port: 3306,
  //username
  user: 'root',
  // (my/)user password 
  password: 'rootroot1',
  //name of database
  database: 'burgers_db'
})


// create connection w/ new mysql connection
// module.exports = mysql.createConnection('mysql://root:rootroot1@localhost:3306/burgers_db')

// below is connection use once deployed on heroku / JAWS
// module.exports = mysql.createConnection(process.env.JAWSDB_URL || process.env.LOCAL_URL)
