import Product from '../models/Product.js'

const productModel = new Product()

export const createProduct = (request, response) => {
    const name = request.body.name
    const value = request.body.value
    try {
        const productCreated = productModel.create(name, value)
        response.status(201).json(productCreated)
    } catch (error) {
        response.status(500).send({ message: 'Deu ruim', error: error })
    }
}

export const getProducts = (request, response) => {
    try {
        response.status(200).json(productModel.getProducts())
    } catch (error) {
        response.status(500).send({ message: 'Deu ruim', error: error })
    }
}