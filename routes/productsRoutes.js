const express = require('express')
const router = express.Router()
const AuthController = require('../controllers/AuthController')
const ProductsController = require('../controllers/ProductsController')
const checkAuth = require('../helpers/auth').checkAuth

router.post('/insert', checkAuth, ProductsController.addProductsPost)
router.get('/', ProductsController.showProducts)
router.get('/register', checkAuth, ProductsController.registerUser)
router.get('/add', checkAuth, ProductsController.addProducts)
router.get('/seeproducts/:id', checkAuth, ProductsController.seeProducts)
router.post('/remove/:id', checkAuth, ProductsController.removeProducts)
router.get('/buy', checkAuth, ProductsController.buyProducts)
router.post('/addcart', checkAuth, ProductsController.addProductscart)
router.post('/removeBuy', checkAuth, ProductsController.removeBuy)
router.get('/finish', checkAuth, ProductsController.finish)
router.post('/finish', checkAuth, ProductsController.finishPost)
module.exports = router;