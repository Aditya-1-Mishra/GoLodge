const mongoose = require('mongoose');

const userschema= new mongoose.Schema({
    first_name: {
        type: String,
        required:true
    },
    last_name: {
        type:String,
        required:true,
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true  
    }
});

module.exports =mongoose.model('User', userschema);
// This exports the User model based on the userschema defined above.