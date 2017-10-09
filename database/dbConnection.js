const mongoose = require('mongoose');
const connectionString = "mongodb://admin:admin@ds159254.mlab.com:59254/bmpl";

//const database = mongoose.createConnection(connectionString);

const db = mongoose.connect(connectionString);

module.exports = db.connection;