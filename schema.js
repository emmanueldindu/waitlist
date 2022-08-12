const mongoose = require('mongoose')


const WaitSchema = new mongoose.Schema({

    email:{
        type:String,
        required:true,
    }
})


module.exports = mongoose.model('WaitList', WaitSchema)