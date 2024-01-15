import Client from '../models/Client.js'

const clientModel = new Client()

export const createClient = async (request, response) => {
    const name = request.body.name
    const email = request.body.email
    try {
        const clientCreated = await clientModel.create(name, email)
        response.status(201).json(clientCreated)
        console.log('Cliente criado:', clientCreated)
    } catch (error) {
        response.status(500).send({ message: 'Deu ruim', error: error.message })
    }
}

export const getClients = async (request, response) => {
    try {
        const clientList = await clientModel.getAll()
        response.status(200).json(clientList)

    } catch (error) {
        response.status(500).send({ message: 'Deu ruim ao retornar os Clientes', error: error.message })
    }
}

export const deleteClient = async (request, response) => {
    const id = request.params.id
    try {
        const sqlResult = await clientModel.delete(id)
        producExists(sqlResult, 'Cliente não encontrado, nenhum registro deletado')
        response.status(200).json({ message: 'Cliente deletado', sqlResult })
        console.log('Deletado:', sqlResult);
    } catch (error) {
        response.status(500).send({ message: 'Deu ruim ao deletar o Cliente', error: error.message })
    }
}

export const findById = async (request, response) => {
    const id = request.params.id
    try {
        const sqlResult = await clientModel.findById(id)
        producExists(sqlResult, 'Cliente não encontrado')
        response.status(200).json({ message: 'Cliente encontrado:', sqlResult })
    } catch (error) {
        response.status(500).send({ message: 'Deu ruim ao encontrar o Cliente', error: error.message })
    }
}

export const update = async (request, response) => {
    const id = request.params.id
    const name = request.body.name
    const email = request.body.email
    try {
        const sqlResult = await clientModel.update(id, name, email)
        producExists(sqlResult, 'Cliente não encontrado, nenhum registro atualizado')
        response.status(200).json({ message: 'Registro atualizado:', sqlResult })
    } catch (error) {
        response.status(500).send({ message: 'Deu ruim ao atualizar o Cliente', error: error.message })
    }
}

const producExists = (sqlResult, error) => {
    if (sqlResult.length === 0) {
        throw new Error(error)
    }
}