const Sequelize = require('sequelize')
const db = require('./index')

const Recipe = db.define('user',{
    recipename:{
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        },
    },
})

module.exports = Recipes