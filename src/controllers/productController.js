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
        producExists(sqlResult, 'Produto não encontrado, nenhum registro deletado')
        response.status(200).json({ message: 'Produto deletado', sqlResult })
        console.log('Deletado:', sqlResult);
    } catch (error) {
        response.status(500).send({ message: 'Deu ruim ao deletar o produto', error: error.message })
    }
}

export const findById = async (request, response) => {
    const id = request.params.id
    try {
        const sqlResult = await productModel.findById(id)
        producExists(sqlResult, 'Produto não encontrado')
        response.status(200).json({ message: 'Produto encontrado:', sqlResult })
    } catch (error) {
        response.status(500).send({ message: 'Deu ruim ao encontrar o produto', error: error.message })
    }
}

export const update = async (request, response) => {
    const id = request.params.id
    const name = request.body.name
    const value = request.body.value
    try {
        const sqlResult = await productModel.update(id, name, value)
        producExists(sqlResult, 'Produto não encontrado, nenhum registro atualizado')
        response.status(200).json({ message: 'Registro atualizado:', sqlResult })
    } catch (error) {
        response.status(500).send({ message: 'Deu ruim ao atualizar o produto', error: error.message })
    }
}

const producExists = (sqlResult, error) => {
    if (sqlResult.length === 0) {
        throw new Error(error)
    }
}