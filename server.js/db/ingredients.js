const Sequelize = require('sequelize')
const db = require('./index')

const Ingredient = db.define('user',{
    ingredientname:{
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        },
    },
    ingredientammount:{
        type: Sequelize.NUMBER,
        allowNull: false,
        validate: {
            notEmpty: true
        },
    }
})

module.exports = Ingredients