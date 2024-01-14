import { sql } from '../config/db.js'
import { v4 as uuidv4 } from 'uuid'

class Product {
    constructor(id, name, value) {
        this.id = id;
        this.name = name;
        this.value = value;
    }

    async create(name, value) {
        const id = uuidv4()
        const whateverIsComingFromSQL = await sql`
        insert into product (id, name, value) values (${id}, ${name}, ${value}) returning name, value
        `
        const { name: sqlName, value: sqlValue} = whateverIsComingFromSQL[0]        
        const productCreated = new Product(id, sqlName, sqlValue)        
        return productCreated
    }

    async getAll() {
        const products = await sql`select * from product`        
        return products
    }

    async delete(id) {
        const sqlResult = await sql`delete from product where id = ${id} returning *`
        return sqlResult
    }

    async findById(id) {
        const sqlResult = await sql`select * from product where id = ${id}`
        console.log(sqlResult)
        return sqlResult
    }
}

export default Product
