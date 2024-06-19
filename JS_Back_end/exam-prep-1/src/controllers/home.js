const {Router} = require('express')
const {getRecent, getAll} = require("../services/stones");

const homeRouter = Router()

homeRouter.get('/', async (req, res) => {
    const stones = await getRecent()


    res.render('home', {stones})
})
homeRouter.get('/catalog', async (req, res) => {
    const stones = await getAll()


    res.render('catalog', {stones})
})
module.exports = {
    homeRouter,
}