const {Router} = require('express')

const homeRouter = Router()

homeRouter.get('/', async (req, res) => {
    const minerals = []


    res.render('home', {minerals})
})

module.exports = {
    homeRouter,
}