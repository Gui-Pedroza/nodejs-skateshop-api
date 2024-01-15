import express, { request, response } from 'express'
import * as clientController from '../controllers/clientController.js'
const router = express.Router()

// all 5 CRUD operations
router.get('/', clientController.getClients)
router.post('/', clientController.createClient)
router.delete('/delete/:id', clientController.deleteClient)
router.get('/find/:id', clientController.findById)
router.post('/update/:id', clientController.update)

export default router
