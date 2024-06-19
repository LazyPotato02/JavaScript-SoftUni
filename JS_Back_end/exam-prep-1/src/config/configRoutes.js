// TODO import routes

const {homeRouter} = require("../controllers/home");

function configRoutes(app){
//     TODO register routers
    app.use(homeRouter)
}

module.exports = {configRoutes}