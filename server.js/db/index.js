//creating the connection to the database
const Sequelize = require('sequelize')
const db = new Sequelize(process.env.DATABASE_URL ||'postgres://localhost:5432/boliermaker',{
    logging:false
})
//the DATABASE_URL is so when we deploy it connects to the Heroku database


//import/export tables and define associations
const User = require('./users')
const Recipe = require('./recipes')
const Ingredient = require('./ingredients')

Recipe.belongsTo(User)
User.hasMany(Recipe)
Recipe.hasMany(Ingredient)
Ingredient.belongsTo(Recipe)

module.exports = {
    db,
    User,
    Recipe,
    Ingredients,
}
