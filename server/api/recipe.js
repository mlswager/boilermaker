const router = require('express').Router()
const {Recipe} = require('../db')

router.get('/', async (req, res, next) => {
    try {
        let recipes = await Recipe.findAll()
        res.send(recipes)
    }
    catch (error){
        next(error)
    }
})

module.exports = router
