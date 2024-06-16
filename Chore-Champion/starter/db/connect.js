const mongoose = require('mongoose')

const connectDB = (url) => {
    return mongoose.connect(url,{
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
        useUnifiedTopology: true, 
    })
}

module.exports = connectDB;