import express, { request, response } from 'express'
import * as productController from '../controllers/productController.js'
const router = express.Router()

// list all products
router.get('/products', productController.getProducts)

router.post('/products', productController.createProduct)

export default router
