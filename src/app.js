import express from 'express'
export const app = express()
import bodyParser from 'body-parser'
import productRouter from './routes/productRoutes.js'
import clientRouter from './routes/clientRoutes.js'
import purchaseRouter from './routes/purchaseRoutes.js'

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/products', productRouter)
app.use('/clients', clientRouter)
app.use('/orders', purchaseRouter)

