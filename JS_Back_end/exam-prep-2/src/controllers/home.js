const {Router} = require('express')
const {createToken} = require('../services/jwtService')


const homeRouter = Router()

homeRouter.get('/', async (req, res) => {
    res.render('home')
})

module.exports = {homeRouter}