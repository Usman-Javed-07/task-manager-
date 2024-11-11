
const jwt = require('jsonwebtoken'); 
const {BadRequestError,} = require('../errors')

const login = async (req, res) => {
    const {username, password} = req.body

    // mongo 
    // joi
    // check in the controller

    if(!username || !password) {
        throw new  BadRequestError ('Please Provide email and password')
    }
    // just for demo, normally provide by 
    const id = new Date().getDate()

    // try to keep payload small better 

    const token = jwt.sign({id , username},process.env.JWT_SECRET,{expiresIn: '30d'})
    res.status(200).json({msg: 'user crated', token})
    // console.log(username , password);
    
    // res.send('Fake login / Register / Signup Route')
}



const dashboard = async (req , res) => {

    console.log(req.user);
    
// const authHeader = req.headers.authorization;
// if(!authHeader || !authHeader.startsWith('Bearer')){
//     throw new CustomAPIError('No Token Provided' , 401)
// }

// const token = authHeader.split(' ') [1]

// try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET)
//     console.log(decoded);
    
// } catch (error) {
//     throw new CustomAPIError ('No authorization to access this route', 401)
// }

//     // console.log(req.headers);
    
    const luckyNumber = Math.floor(Math.random()* 100)
    res.status(200).json ({msg: ` Hello ,${req.user.username} `, secret: `Here is your authorized data , your lucy number is ${luckyNumber}`})
}

module.exports = {
    login , dashboard
}