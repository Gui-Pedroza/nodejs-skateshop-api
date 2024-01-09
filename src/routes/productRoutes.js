import express from 'express'
const router = express.Router()

router.get('/products', (request, response) => {
    response.send('Lista de produtos')
})

export default router
