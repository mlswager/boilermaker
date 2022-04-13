//use router to easily identify routes
const router = require('express').Router()

//middleware so everything from the recipes file has a route of /api/recipes
router.use('/recipe',require('./recipe'))

//error handler for routes that don't exist. it creates a new error with status code 404 and passes it to the error handler a level up from here
router.use((req,res,next) => {
    const err = new Error("API route not found")
    err.status = 404
    next(err)
})

module.exports = router