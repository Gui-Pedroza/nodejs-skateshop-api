import { sql } from '../config/db.js'
import { v4 as uuidv4} from 'uuid'

class Product {
    constructor(id, name, value) {
        this.id = id;
        this.name = name;        
        this.value = value;
    }

    async create(name, value) {
        const id = uuidv4()
        const product = await sql`insert into product (id, name, value) values (${id}, ${name}, ${value}) returning name, value`
        const productCreated = new Product(id, ...product)
        console.log('Produto criado:', productCreated)
        return productCreated
    }

    async getAll() {
        const products = await sql`select * from product`
        return products
    }
}

export default Product
