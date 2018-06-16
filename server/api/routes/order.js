const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Order = require('../models/order')

router.get('/', (req, res, next) => {
	Order.find().exec()
		.then(result => {
			res.status(200).json(result)
		})
		.catch(err => {
			res.status(500).json({
				error : err
			})
		})
})

router.post('/', (req, res, next) => {
	const order = new Order({
		quantity: req.body.quantity,
		product : req.body.productId
	})

	order.save()
		.then(result => {
			console.log(result)
			res.status(201).json(result)
		})
		.catch(err => {
			console.log(err)
			res.status(500).json({
				error : err
			})
		})
})

module.exports = router