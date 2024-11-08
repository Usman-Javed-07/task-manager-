require('dotenv').config()
//   const connectDB = require('./03-task-manager/starter/db/connect')
  const connectDB = require('./03-task-manager/starter/db/connect')


const express = require('express')
const app = express()
const tasks = require('./03-task-manager/starter/routes/tasks')

// const tasks = require('./routes/tasks')


// middleware
app.use(express.static('./public'))
app.use(express.json())


// routes 

// app.get('/hello', (req , res)=> {
//     res.send('Task Manager App')
// })

app.use('/api/v1/tasks', tasks)


const port = 3000

const start = async ()=> {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port , console.log(`server is listening on port ${port}`))
    } catch (error) {
        console.log(error);
        
    }
}
start()