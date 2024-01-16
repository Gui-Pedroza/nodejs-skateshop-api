import { sql } from '../config/db.js'
import { v4 as uuidv4 } from 'uuid'
class Purchase {
    constructor(id, product_id, client_id, quantity) {
        this.id = id
        this.product_id = product_id
        this.client_id = client_id
        this.quantity = quantity
    }

    async getProductsByClient(client_id) {
        const sqlResult = await sql`SELECT
        client.name as client_name,
        product.name as product_name,    
        purchase.quantity
    FROM purchase
    JOIN product ON purchase.product_id = product.id
    JOIN client ON purchase.client_id = client.id
    WHERE purchase.client_id = ${client_id};
    `    
    return sqlResult
    }
}

export default Purchase