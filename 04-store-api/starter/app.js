
require('dotenv').config()

const express = require('express')
const app = express()

const connectDB = require('./db/connect')

const notFoundMiddleware =  require('./middleware/not-found')
const errorMiddleware =  require('./middleware/error-handler')

// middleware 

app.use (express.json())

// routes 

app.get('/', (req , res)=> {
    res.send ('<h1> Store APi</h1> <a href = "/api/v1/products">products route </a>')
} )


app.use(notFoundMiddleware)
app.use(errorMiddleware)

const port = process.env.Port || 3000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port , console.log(` server is listing on port ${port} ....`)
        )
    } catch (error) {
        console.log(error);
        
    }
}
start()