const mongoose = require('mongoose');

const userDSchema = new mongoose.Schema({
    userId:{ type: mongoose.Schema.Types.ObjectId,ref:'users' ,required: true},
    phone_no: { type: Number, required: true},
    address: { type: String, required: true},
    identityType:{type:String,enum:['Aadhar Card','Passport'],required:true},
    idnumber:{type: String, required: true},
    fileurl:{type: String, required: true}
})

module.exports = mongoose.model('UserD', userDSchema);