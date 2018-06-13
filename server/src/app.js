const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const productRoutes = require('./../api/routes/products.js')

mongoose.connect('mongodb://localhost:27017/mongodb').then(
    () => {
        console.log('Connect MongoDB successfully')
    },
    err => {
        console.log(`Connect faild, error : ${err}`)
    }
)

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/products', productRoutes)

app.use((req, res, next) => {
    const error = new Error('Not found')
    error.status = 404
    next(error)
})

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
        error: {
            message: error.message
        }
    })
})

module.exports = app