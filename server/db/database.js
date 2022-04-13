const Sequelize = require('sequelize')

const db = new Sequelize(process.env.DATABASE_URL ||'postgres://localhost:5432/boilermaker',{
  logging: false
})
//the DATABASE_URL is so when we deploy it connects to the Heroku database

module.exports = db