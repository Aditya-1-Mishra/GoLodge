import React, { useState, useEffect } from 'react'; // ✅ Added missing imports
import Navbar from './Navbar';
import { useParams,useNavigate } from 'react-router-dom';

const Booking = () => {
  const Navigate=useNavigate();
  const { id } = useParams();
  const [room, setRoom] = useState(null);


  const [formdetails,setformdetails]=useState({
    name:"",
    mobile:"",
    idtype:"Adhaar",
    idnumber:"",  
    checkin:"",
    checkout:"",
    paymentmode:"Credit Card",
    userId:localStorage.getItem('userId') || "",
    roomId : id
  })

  // for form
  
  const handleForm=(e)=>{
    const {name,value}=e.target;
    setformdetails({
      ...formdetails,
      [name]:value
    })
    console.log(formdetails);
  }

  // form details is to be sent for booking in backend
  const submitForm=async(e)=>{
    e.preventDefault();
    if(!formdetails.name || !formdetails.mobile || !formdetails.idtype || !formdetails.idnumber || !formdetails.checkin || !formdetails.checkout || !formdetails.paymentmode){
      alert("Please fill all the details");
      return;
    }
   try{
    const res=await fetch(`http://localhost:5000/api/Bookings/book/${id}`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(formdetails)
    })
    console.log(localStorage.getItem('userId'));
    alert("Room booked successfully");
        Navigate('/Home');
      
   }
   catch(err){
    console.log(err)
   }
  }

    useEffect(() => {
    const fetchRoom = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/Bookings?roomId=${id}`);
        const data = await res.json();

        const flattenedReviews = data.reviews.flatMap(r => r.reviews);
        setRoom({ ...data.room, reviews: flattenedReviews }); 
      } catch (err) {
        console.error(err);
      }
    };
    fetchRoom();
  }, [id]);

  

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % (room?.reviews?.length || 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [room?.reviews?.length]);

  const currentReview = room?.reviews?.[index];

  return (
    <div className='bg-gradient-to-l from-yellow-400 to-white min-h-screen'>
      {/* Navbar */}
      <div className='fixed top-0 left-0 right-0 z-50'>
        <Navbar />
      </div>

      {/* Main Content */}
      <div className='flex flex-row relative'>

        {/* Images Block */}
        <div className='w-auto h-[540px] grid grid-cols-2 gap-5 mx-4 mt-20'>
          {room?.images?.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={room?.name}
              className="w-[290px] h-[380px] object-cover rounded-md mt-4"
            />
          ))}
        </div>

        {/* Room Info Block */}
        <div className="flex flex-col justify-start w-250 top-105 mx-6 absolute mt-20 ">
          <p className='text-3xl font-bold mb-2'>
            {room?.hotel_name || "No Hotel Name"}
          </p>
          <p className="text-xl font-semibold mb-2">
            {room?.location || "Unknown Location"} | {room?.roomType || "Room"} | {room?.accommodation || "Accommodation"}
          </p>
          <p className='text-lg mb-2'>
            {room?.amenities?.map((amenity, idx) => (
              <span key={idx} className="text-sm text-gray-600 ml-3">
                <u>{amenity?.trim() ? amenity : "Nothing Mentioned"}</u>
              </span>
            ))}
          </p>
          <p className='text-lg mb-2'>
            {room?.description?.trim() ? room.description : "Nothing Mentioned"}
          </p>
        </div>

        {/* Review Block */}
            <div>
              <div className='relative rounded-sm justify-start w-[290px] border h-[160px] mx-6 mt-25 bg-white'>
          {currentReview ? (
            <div className="flex items-center mb-2 p-2">
              <div className="flex flex-col">
                <span className="text-sm font-semibold">{currentReview.user}</span>
                <span className="text-sm text-gray-600">⭐⭐⭐⭐⭐{currentReview.rating}</span>
                <span className="text-sm text-gray-600">{currentReview.comment}</span>
                
              </div>
            </div>
          ) : (
            <p className="text-center text-gray-500 p-2">No reviews available</p>
          )}
        </div>
        <div className='relative border rounded-sm justify-start w-[290px] h-[220px] mx-6 mt-10'>
          <img src="https://newspaperads.ads2publish.com/wp-content/uploads/2018/04/american-tourister-swagpack-buy-n-american-tourister-bag-for-a-chance-to-meet-virat-ad-delhi-times-29-03-2018.png" id="img" className='w-full h-full object-cover'/>
        </div>
            </div>
        

        {/* Booking Form Block */}
        <form className='flex flex-col justify-start border rounded-md w-[360px] px-4 h-[520px] mx-6 mt-20 bg-white'>

          <label className='relative mx-4 my-5 text-lg font-bold'>
            Name:
            <input type="text" className='border rounded-sm w-[200px] h-7 relative left-7 items-center font-normal px-5' name='name' placeholder='Enter your name' onChange={handleForm} required />
          </label>

          <label className='relative mx-4 my-1 text-lg font-bold'>
            Mobile:
          </label>

          <label className="flex items-center gap-2">
            <select className="relative left-8 px-1 h-8 border rounded-sm w-[60px]">
              <option value="91">91</option>
              <option value="36">36</option>
              <option value="0">0</option>
              <option value="ISD">ISD</option>
              <option value="504">504</option>
              <option value="509">509</option>
              <option value="592">592</option>
            </select>
            <input
              type="text"
              className="border rounded-sm w-[200px] h-8 relative left-8 items-center font-normal px-5"
              name='mobile'
              placeholder=""
              onChange={handleForm}
              required
            />
          </label>

          <div className="relative mx-4 my-2">
            <label className="text-lg font-bold block mb-2">
              Identity Type:
            </label>

            <div className="flex items-center gap-2">
              <input
                type="text"
                name='idnumber'
                className="border rounded-sm w-[200px] h-8 px-5 font-normal"
                placeholder="Enter ID number"
                onChange={handleForm}
                required
              />
              <select className="border rounded-sm w-[120px] h-8 px-2 font-normal" name='idtype' onChange={handleForm} required>
                <option value="adhaar">Adhaar</option>
                <option value="passport">Passport</option>
              </select>
            </div>
          </div>


          <span className='relative mx-4 my-2 text-lg font-bold'>
            Select Payment Mode:
          </span>
          <select className='border rounded-sm w-[200px] h-8 relative left-25 items-center font-normal px-6' onChange={handleForm} name='paymentmode' required>
            <option value="Credit Card">Credit Card</option>
            <option value="Debit Card">Debit Card</option>
            <option value="Net Banking">Net Banking</option>
            <option value="UPI">UPI</option>
            <option value="Online Banking">Online Banking</option>
          </select>

          <div className="relative mx-4 my-2">
            <label className="text-lg font-bold block mb-2">
              Check In / Check Out:
            </label>

            <div className="flex items-center gap-4">
              <input
                type="date"
                name ="checkin"
                className="border rounded-sm w-[150px] h-8 px-3 font-normal"
                onChange={handleForm}
                required
              />
              <input
                type="date"
                name='checkout'
                className="border rounded-sm w-[150px] h-8 px-3 font-normal"
                onChange={handleForm}
                required
              />
            </div>
          </div>

          
          <span className='relative left-5 my-4  text-3xl font-bold'>
            Price : ${room?.price || 0} USD
          </span>
          
          <button className='bg-green-400 text-white rounded-md w-[200px] h-8 relative left-18 items-center font-normal px-6 mt-4 cursor-pointer' onClick={submitForm}>
            Confirm & Continue
          </button>
        </form>

      </div>
    </div>
  );
};

export default Booking;
