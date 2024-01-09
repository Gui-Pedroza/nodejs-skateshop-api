import express from 'express'
export const app = express()
import productRouter from './routes/productRoutes.js'
import clientRouter from './routes/clientRoutes.js'

app.use(productRouter)
app.use(clientRouter)

