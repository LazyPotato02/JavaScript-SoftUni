// TODO import routes

const {homeRouter} = require("../controllers/home");
const {userRouter} = require("../controllers/user");
const {stoneRouter} = require("../controllers/stone");

function configRoutes(app){
//     TODO register routers
    app.use(homeRouter)
    app.use(userRouter)
    app.use(stoneRouter)
}

module.exports = {configRoutes}