import express from 'express'
const router = express.Router()

router.get('/clients', (request, response) => {
    response.send('Lista de clientes')
})

export default router