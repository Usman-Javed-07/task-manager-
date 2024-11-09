const connectDB = require('./db/connect')
const product = require('./models/product')

const jsonProduct = require('./product.json')

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        console.log('success !!!');
        
    } catch (error) {
     console.log(error);
        
    }
}
start()