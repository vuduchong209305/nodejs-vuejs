const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.json({
        message : 'Method GET'
    })
})

router.post('/', (req, res, next) => {
    res.json({
        message : 'Method POST'
    })
})

router.get('/:productID', (req, res, next) => {
    const id = req.params.productID
    if(id === 'special') {
        res.json({
            message: 'You discovered the spacial productID',
            id : id
        })
    } else {
        res.json({
            message: 'You passed an ID'
        })
    }
})

router.delete('/:productID', (req, res, next) => {
    res.json({
        message : 'Method DELETE'
    })
})

module.exports = router