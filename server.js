import express from 'express'
const app = express()

const port = process.env.PORT || 3030

app.listen(port, () => { console.log('I am running at port 3030') })

export default app