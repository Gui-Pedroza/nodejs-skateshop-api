import Purchase from '../models/Purchase.js'

const purchase = new Purchase()

export const getOrders = async (request, response) => {
    const id = request.params.id
    try {        
        const order = await purchase.getProductsByClient(id)
        response.status(200).json({response: 'Produtos por cliente:', order: order})
    } catch (error) {
        response.status(500).send({ message: 'Deu ruim ao encontrar o Cliente', error: error.message })
    }
}