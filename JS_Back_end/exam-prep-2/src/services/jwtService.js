const jwt = require('jsonwebtoken')

// TODO use identity name from exam description
const secret = 'secretKey'

function createToken(userData) {
    const payload = {
        email: userData.email,
        username: userData.username,
        _id: userData._id
    };
    const token = jwt.sign(payload, secret, {
        expiresIn: '1d'
    })
    return token

}

function verifyToken(token) {
    const data = jwt.verify(token, secret)

    return data
}


module.exports = {
    createToken,
    verifyToken
}