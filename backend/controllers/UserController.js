const User = require('../Models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const jwtSecrect = process.env.JWT_SECRET ;

// Generation Token
const generateToken = (id) => {
    return jwt.sign({id}, jwtSecrect, {
        expiresIn: "7d",
    })
}

//Register user and sign in

const register = async(req, res) => {
    res.send('Registro')
}

module.exports = {
    register
}
