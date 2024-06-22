const mongoose = require('mongoose')


require('../models/User')
require('../models/Volcano')


async function configDatabase() {
    const connectionString = 'mongodb://10.70.71.110:27017/magma-haven';

    await mongoose.connect(connectionString);

    console.log('Database connected');



}

module.exports = {
    configDatabase
};