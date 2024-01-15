import { sql } from '../config/db.js'
import { v4 as uuidv4 } from 'uuid'
class Purchase {
    constructor(id, product_id, client_id, quantity) {
        this.id = id
        this.product_id = product_id
        this.client_id = client_id
        this.quantity = quantity
    }

    getProductsByClient(client_id) {
        const sqlResult = await sql``
    }
}