const express = require('express');
const {configDatabase} = require("./config/configDatabase");
const {configExpress} = require("./config/configExpress");
const {configHandlebars} = require("./config/configHandlebars");
const {configRoutes} = require("./config/configRoutes");
const api = require('../src/services/volcanoServices')
const {login, register} = require("./services/userService");

start()

async function start() {
    const app = express();

    await configDatabase()
    configHandlebars(app)
    configExpress(app)
    configRoutes(app)

    app.listen(3000, () => {
        console.log('Server started on port 3000  http://localhost:3000')
    });
}


async function test(){
    try{
        const result = await api.create({
            name: 'ZZSZSDVZ',
            location: 'gwa',
            elevation: 130,
            lastEruption: 2200,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRezkhZEGyU-SbkR5X1RGxo8OxQFLfKonocyg&s',
            typeVolcano: 'Subglacial',
            description: 'awgf',
        },'6676dbaca45d10cdc26e05fa')
        console.log(result)
        // const result = await register('peter@abv.bg','Peter','asd123')
    }catch (e){
        console.log('Caught error')
        console.error(e.message)
    }
}