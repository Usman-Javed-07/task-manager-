const express = require('express')
const router = express.Router()

const {
    getAllProuductsStatic,
    getAllProducts,
} = require('../controllers/product')

router.route ('/').get(getAllProducts)
router.route ('/static').get(getAllProuductsStatic)

module.exports = router