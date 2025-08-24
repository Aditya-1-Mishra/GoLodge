import React, { useState, useEffect } from 'react'; // ✅ Added missing imports
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';
import roomsData from '../../notnecessary/Data';

const Booking = () => {
  const { id } = useParams();
  const room = roomsData.find(r => r.id === Number(id));

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % (room?.reviews?.length || 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [room?.reviews?.length]);

  const currentReview = room?.reviews?.[index];

  return (
    <div>
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
        <div className="flex flex-col justify-start w-250 top-105 mx-6 absolute mt-20">
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
              <div className='relative rounded-sm justify-start w-[290px] border h-[160px] mx-6 mt-25'>
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
          <img src="https://newspaperads.ads2publish.com/wp-content/uploads/2018/04/american-tourister-swagpack-buy-n-american-tourister-bag-for-a-chance-to-meet-virat-ad-delhi-times-29-03-2018.png" id="img" className='w-full h-full object-contain'/>
        </div>
            </div>
        

        {/* Booking Form Block */}
        <div className='flex flex-col justify-start border rounded-md w-[350px] px-4 h-[440px] mx-6 mt-20'>

          <span className='relative mx-4 my-5 text-lg font-bold'>
            Name:
            <input type="text" className='border rounded-sm w-[200px] h-8 relative left-7 items-center font-normal px-5' placeholder='Enter your name' required />
          </span>

          <span className='relative mx-4 my-0 text-lg font-bold'>
            Email:
            <input type="text" className='border rounded-sm w-[200px] h-8 relative left-8 items-center font-normal px-5' placeholder='Enter your email' />
          </span>

          <span className='relative mx-4 my-2 text-lg font-bold'>
            Mobile:
          </span>

          <div className="flex items-center gap-2">
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
              placeholder=""
            />
          </div>

          <span className='relative mx-4 my-2 text-lg font-bold'>
            Passport id:
          </span>
          <input type="text" className='border rounded-sm w-[200px] h-8 relative left-25 items-center font-normal px-5' placeholder='' />

          <span className='relative mx-4 my-2 text-lg font-bold'>
            Select Payment Mode:
          </span>
          <select className='border rounded-sm w-[200px] h-8 relative left-25 items-center font-normal px-6'>
            <option value="Credit Card">Credit Card</option>
            <option value="Debit Card">Debit Card</option>
            <option value="Net Banking">Net Banking</option>
            <option value="UPI">UPI</option>
            <option value="Online Banking">Online Banking</option>
          </select>

          <div className='flex flex-row justify-start'>
            <input type='checkbox' className='relative mx-4 mt-2' />
            <span className='relative text-md'>I agree to the terms and conditions</span>
          </div>

          <button className='bg-green-400 text-white rounded-md w-[200px] h-8 relative left-18 items-center font-normal px-6 mt-4 cursor-pointer'>
            Confirm & Continue
          </button>
          <span className='relative top-30 left-20 mx-4 my-2 text-3xl font-bold'>
            Price : ${room.price}  USD
          </span>
        </div>

      </div>
    </div>
  );
};

export default Booking;
