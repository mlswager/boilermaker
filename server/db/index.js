//import/export tables and define associations
const db = require('./database')
const User = require('./models/users')
const Recipe = require('./models/recipes')
const Ingredient = require('./models/ingredients')

Recipe.belongsTo(User)
User.hasMany(Recipe)
Ingredient.belongsTo(Recipe)
Recipe.hasMany(Ingredient)



module.exports = {
    db,
    User,
    Recipe,
    Ingredient,
}
