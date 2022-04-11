//npm instal --save express **
const express = require('express')
const app = express()
//npm install --save morgan **logging middleware
const morgan = require('morgan')
app.use(morgan('dev'))

// static middleware **request static assets from the public folder (index.html)
const path = require ('path')
app.use(express.static(path.join(__dirname, '../public')))

//npm install --save body-parser
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.userInfo(bodyParser.urlencoded({extended:true}))