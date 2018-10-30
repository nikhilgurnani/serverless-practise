const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
let isConnected;

module.exports = connectToDatabase = () => {
    if (isConnected) {
    console.log('=> using existing database connection');
    return Promise.resolve();
    }

    console.log('=> using new database connection');
    let mongoURI = process.env.MONGO_DB_URL;
    return mongoose.connect(mongoURI, options=null)
    .then(db => { 
        isConnected = db.connections[0].readyState;
    });
};