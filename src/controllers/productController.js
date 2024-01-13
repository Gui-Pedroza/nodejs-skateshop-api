import Product from '../models/Product.js'

const productModel = new Product()

export const createProduct = async (request, response) => {
    const name = request.body.name
    const value = request.body.value
    try {
        const productCreated = await productModel.create(name, value)
        response.status(201).json(productCreated)
        console.log('Produto criado:', productCreated)
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

export const deleteProduct = async (request, response) => {
    const id = request.params.id
    try {
        const sqlResult = await productModel.delete(id)
        if (sqlResult.length === 0) {
            throw new Error('Produto não encontrado, nenhum registro deletado')
        } 
        response.status(200).json({ message: 'Produto deletado', sqlResult })
        console.log('Deletado:', sqlResult);
    } catch (error) {
        response.status(500).send({ message: 'Deu ruim ao deletar o produto', error: error.message })
    }
}