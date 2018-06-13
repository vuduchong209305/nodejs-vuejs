const express = require('express')
const router = express.Router()

const Product = require('./../models/product')

router.get('/', (req, res, next) => {
    Product.find()
        .exec()
        .then(result => {
            console.log(result)
            if(result.length > 0) {
                res.status(200).json(result)
            } else {
                res.status(404).json({
                    message : 'Not found'
                })
            }
        })
})

router.post('/', (req, res, next) => {
    const product = new Product({
        name : req.body.name,
        price : req.body.price
    })
    product.save()
        .then(result => {
            console.log(result)
            res.json({
                message : 'Product was created',
                result : result
            })
        })
        .catch(err => {
            console.log(err)
            res.json({
                error: err
            })
        })
    
})

router.get('/:productID', (req, res, next) => {
    const id = req.params.productID
    Product.findById(id).exec()
        .then(result => {
            console.log(result)
            res.json(result)
        })
        .catch(err => {
            console.log(err)
            res.json({
                error: err
            })
        })

})

router.patch('/:productID', (req, res, next) => {
    const id = req.params.productID
    const updateOps = {}
    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value
    }
    Product.update({ _id : id }, { $set: updateOps })
        .exec()
        .then(result => {
            console.log(result)
            res.status(200).json(result)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                error: err
            })
        })
})

router.delete('/:productID', (req, res, next) => {
    const id = req.params.productID
    Product.remove({ _id : id })
        .exec()
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                error: err
            })
        })
})

module.exports = router