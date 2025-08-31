const express=require('express');
const Booking=require('./models/bookings');
const router=express.Router();

router.post(`/book/:id`,async(req,res)=>{
    const book= req.body
    console.log(book)
    const userId=req.userId
    console.log(userId)
    try{
        const newBooking=new Booking(book)
        console.log('newBooking',newBooking)
        await newBooking.save()
        
        res.status(200).json({success:true,message:"Room booked successfully"})
        
    }

    catch(err){
        res.status(500).json({success:false,message:err.message})
    }
    }

)

module.exports  = router