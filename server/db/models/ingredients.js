const Sequelize = require('sequelize')
const db = require('../database')

const Ingredient = db.define('ingredient',{
    ingredientname:{
        type: Sequelize.STRING,
    },
    ingredientammount:{
        type: Sequelize.INTEGER
    }
})

module.exports = Ingredient