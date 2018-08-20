const dotenv = require('dotenv').config();

module.exports = 
{
  "development": {
    "username": "root",
    "password": "root1234",
    "database": "burgers2_db",
    "host": "127.0.0.1",
    "port": 3306,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": "root1234",
    "database": "database_test",
    "host": "127.0.0.1",
    "port": 3306,
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.HEROKU_USERNAME,
    "password": process.env.HEROKU_PASSWORD,
    "database": process.env.HEROKU_DATABASE,
    "host": process.env.HEROKU_HOST,
    "port": process.env.HEROKU_PORT,
    "dialect": "mysql"
  }
}