const mongoose = require('mongoose')



const connectionString =  'mongodb+srv://<db_username>:<db_password>@nodeexpressproject.m6qqp.mongodb.net/?retryWrites=true&w=majority&appName=NodeExpressProject'

mongoose.connect(connectionString)
.then(() => console.log('connected to db ...'))
.catch((err)=> console.log(err))