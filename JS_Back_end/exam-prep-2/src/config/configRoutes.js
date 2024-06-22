const {homeRouter} = require("../controllers/home");
const {catalogRouter} = require("../controllers/catalog");
const {userRouter} = require("../controllers/user");

function configRoutes(app){
    app.use(homeRouter)
    app.use(catalogRouter)
    app.use(userRouter)
}

module.exports = {configRoutes}