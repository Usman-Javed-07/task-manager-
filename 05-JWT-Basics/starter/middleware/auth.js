const jwt = require('jsonwebtoken')
const {UnauthenticatedError}= require('../errors')

const authenticationMiddleware = async (req , res, next) => {
    const authHeader = req.headers.authorization;
if(!authHeader || !authHeader.startsWith('Bearer')){
    throw new CustomAPIError('No Token Provided')
}

const token = authHeader.split(' ') [1]

try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const {id , username} = decoded
    req.user = {id , username}
    next()
} catch (error) {
    throw new  UnauthenticatedError('No authorization to access this route', 401)
}

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const luckyNumber = Math.floor(Math.random()* 100)
        res.status(200).json ({msg: ` Hello ,${decoded.username}`, secret: `Here is your authorized data , your lucy number is ${luckyNumber}`})
    
    } catch (error) {
        throw new CustomAPIError ('No authorization to access this route', 401)
    }
}
module.exports = authenticationMiddleware