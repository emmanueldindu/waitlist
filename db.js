const mongoose = require('mongoose');

const connect_url = 'mongodb+srv://emma:chimnadindu@learndev.4sdsu.mongodb.net/register?retryWrites=true&w=majority'


const connectDB = (url) => {
    return mongoose.connect(connect_url)
}


module.exports = connectDB