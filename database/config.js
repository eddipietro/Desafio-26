module.exports={
    client:'mysql',
    connection:{
        host:process.env.SQL_HOST||'localhost',
        user:process.env.SQL_USER||'root',
        password:process.env.SQL_PASSWORD||'',
        database:process.env.SQL_DATABASE||'apicommerce'
    },
    
}

const mongoose = require('mongoose');
const { getMongoConfig } = require('../session/session.config');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/ecommerce';




const mongooseConnect = () => {
    mongoose.set("strictQuery", false);
    mongoose.connect(MONGO_URI, getMongoConfig()).then(() => {
        console.info('MONGOOSE CONNECTION OK');
    }).catch(err => {
        console.error(err);
        process.exit();
    })    
}

module.exports = mongooseConnect;