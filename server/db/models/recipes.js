const Sequelize = require('sequelize')
const db = require('../database')

const Recipe = db.define('recipe',{
    recipename:{
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        },
    },
})

module.exports = Recipe