
const User = require('../models/user')
const {StatusCodes} = require('http-status-codes')
const register = async (req , res) => {
    const user = await User.create({...req.body})
    res.status(StatusCodes.CREATED).json({user})
    // res.json(req.body)
    // res.send('register user')
}

const login = async (req , res) => {
    res.send('login user')
}

module.exports = {
    register , 
    login,
}


