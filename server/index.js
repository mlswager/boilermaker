//npm instal --save express **
const express = require('express')
const app = express()
//npm install --save morgan **logging middleware
const morgan = require('morgan')
app.use(morgan('dev'))

// static middleware **request static assets from the public folder (index.html) - connects your back and front-end?
const path = require ('path')
app.use(express.static(path.join(__dirname, '../public')))

//npm install --save body-parser
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

// matches all requests to /api
app.use('/api', require('./api')); 

//everything that is not a defined api route goes to the index.html file (the front-end)(because it's a single page application) -- this is also where you can hangle invalid vs valid routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public'))
})

//the error handler. when things get nexted they end up here
app.use((err,req,res,next)=>{
    console.log(err)
    console.log(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error') // ask about err.message
})

module.exports = app