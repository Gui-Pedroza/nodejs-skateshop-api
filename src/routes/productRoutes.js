import express, { request, response } from 'express'
import * as productController from '../controllers/productController.js'
const router = express.Router()

// all 5 CRUD operations
router.get('/', productController.getProducts)
router.post('/', productController.createProduct)
router.delete('/delete/:id', productController.deleteProduct)
router.get('/find/:id', productController.findById)
router.post('/update/:id', productController.update)

export default router
