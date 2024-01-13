import express, { request, response } from 'express'
import * as productController from '../controllers/productController.js'
const router = express.Router()

router.get('/', productController.getProducts)
router.post('/', productController.createProduct)
router.delete('/delete/:id', productController.deleteProduct)

export default router
