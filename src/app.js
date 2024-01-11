import express from 'express'
export const app = express()
import bodyParser from 'body-parser'
import productRouter from './routes/productRoutes.js'
import clientRouter from './routes/clientRoutes.js'

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(productRouter)
app.use(clientRouter)

