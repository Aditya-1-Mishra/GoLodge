const mongoose=require('mongoose');


const bookingSchema=new mongoose.Schema({
    userId:{type: mongoose.Schema.Types.ObjectId,ref:'users',required:true},
    roomId:{type: mongoose.Schema.Types.ObjectId,ref:'rooms',required:true},
    name:{type:String,required:true},// here the name pointing the person on whose name the booking is done
    mobile:{type:Number,required:true},
    checkin:{type:Date,required:true},
    checkout:{type:Date,required:true},
    bookingstatus:{type:String ,enum:['booked','cancelled'],default:'booked'},
    idnumber:{type:String,required:true},
    idtype:{type:String,required:true},
    createdAt:{type:Date,default:Date.now}
})

module.exports=mongoose.model('Booking',bookingSchema);