import express, { request, response } from 'express'
import * as purchasetController from '../controllers/purchaseController.js'
const router = express.Router()

router.get('/:id', purchasetController.getOrders)

export default router