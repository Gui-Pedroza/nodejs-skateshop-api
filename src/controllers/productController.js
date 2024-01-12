import Product from '../models/Product.js'

const productModel = new Product()

export const createProduct = async (request, response) => {
    const name = request.body.name
    const value = request.body.value
    try {
        const productCreated = await productModel.create(name, value)        
        response.status(201).json(productCreated)
    } catch (error) {
        response.status(500).send({ message: 'Deu ruim', error: error })
    }
}

export const getProducts = async (request, response) => {
    try {
        const productList = await productModel.getAll()
        response.status(200).json(productList)

    } catch (error) {
        response.status(500).send({ message: 'Deu ruim ao retornar os produtos', error: error })
    }
}