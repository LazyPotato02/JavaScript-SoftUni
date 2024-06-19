const handlebars = require('express-handlebars')
const express = require("express");
const cookieParser = require("cookie-parser");
const {session} = require("../middlewares/session");


const secret = 'cookie secr3t'
function configExpress(app) {

    app.use(cookieParser(secret))
    // TODO Add session middleware
    app.use(session())

    app.use('/static', express.static('static'));
    app.use(express.urlencoded({extended: true}));

}

module.exports = {configExpress};
