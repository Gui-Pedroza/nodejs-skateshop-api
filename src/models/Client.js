import { sql } from '../config/db.js'
import { v4 as uuidv4 } from 'uuid'

class Client {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    async create(name, email) {
        const id = uuidv4()
        const whateverIsComingFromSQL = await sql`
        insert into client (id, name, email) values (${id}, ${name}, ${email}) returning name, email
        `
        const { name: sqlName, email: sqlEmail} = whateverIsComingFromSQL[0]        
        const clientCreated = new Client(id, sqlName, sqlEmail)        
        return clientCreated
    }

    async getAll() {
        const clients = await sql`select * from client`        
        return clients
    }

    async delete(id) {
        const sqlResult = await sql`delete from client where id = ${id} returning *`
        return sqlResult
    }

    async findById(id) {
        const sqlResult = await sql`select * from client where id = ${id}`
        console.log(sqlResult)
        return sqlResult
    }

    async update(id, name, email) {
        let sqlResult
        if (name) {
            sqlResult = await sql`update client set name = ${name} where id = ${id} returning *`
        }
        if (email) {
            sqlResult = await sql`update client set email = ${email} where id = ${id} returning *`
        }
        console.log(sqlResult);
        return sqlResult
    }

}

export default Client
