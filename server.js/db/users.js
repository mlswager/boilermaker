const Sequelize = require('sequelize')
const db = require('./index')

const User = db.define('user',{
    username:{
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    password: {
         type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty:true
        }
    }
})

module.exports = Users