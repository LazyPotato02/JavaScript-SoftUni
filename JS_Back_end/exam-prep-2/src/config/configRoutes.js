const {homeRouter} = require("../controllers/home");

function configRoutes(app){
    app.use(homeRouter)
}

module.exports = {configRoutes}