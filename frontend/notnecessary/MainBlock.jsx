import React, { useState } from 'react';
import Background_main from '../images/Background_main.jpeg';
import { Link } from 'react-router-dom';
import Booking from '../src/HomeC/Booking';
import GoLodge from '../images/GoLodge.jpg';

const MainBlock = ({rooms}) => {
  const [currIndex,setcurrIndex]=useState(0);
  const itemsperpage=4;

  const visiblerooms=rooms.slice(currIndex,currIndex+itemsperpage);

  const nextSlide=()=>{
    if(currIndex + itemsperpage<rooms.length){
      setcurrIndex(currIndex+itemsperpage)
      settext(text+1)
    }
      
  };

  const prevSlide = () => {
    if (currIndex - itemsperpage >= 0) {
      setcurrIndex(currIndex - itemsperpage);
      settext(text-1)
    }
  };
  const [text,settext]=useState(1);

  const bookingID=(e)=>{
    const roomId = e.target.alt;
    console.log('Room ID:', roomId);
  } 

  return (

    <div className='p-6 flex-1 min-h-screen flex flex-col'style={{
      // background:`url(${Background_main})`,
      // backgroundPosition:'bottom',
      // backgroundRepeat:'no-repeat',
      // backgroundSize:'cover',
      // zIndex:1,
      // position:'relative',
      // minHeight:'100vh'
    }} >
    <div className="p-6 relative w-auto h-screen">
    {/* ---------------------------------------------------------------------------------------------------------------------------------------- */}
      {/* Room Listings */}
      
      <div className=" absolute p-4 grid grid-cols-2 top-12 gap-5 w-4/4">   
      {visiblerooms.length > 0 ? (
        visiblerooms.map((room) => (
          <div key={room._id} className="p-4  rounded shadow-md bg-white cursor-pointer hover:shadow-xl transition-shadow shadow-black duration-500">
           
           <Link to={`/Booking/${room._id}`}> 
           <img src={room.images[0]} alt={room.name} className="w-full h-40 object-cover rounded-md"  />
            <h3 className="mt-2 text-lg font-semibold">{room.name}</h3>
            <p className="text-sm text-gray-600">{room.roomType} | {room.accommodation} | {room.location}</p>
            </Link>

          </div>
        ))
      ) : (
        <p className="text-lg text-gray-600">No rooms available.</p>
      )}
    </div>

    <div className="absolute bottom-16 right-55 transform -translate-x-1/2 flex gap-4">
    <button
            onClick={prevSlide}
            disabled={currIndex === 0}
            className="bg-gray-500 text-white p-2 rounded hover:bg-gray-400 cursor-pointer"
          >
            Prev
          </button>
          <input type='text'className='bg-white border rounded-sm w-8 text-center text-black' readOnly='true' placeholder={text}/>
          <button
            onClick={nextSlide}
            disabled={currIndex + itemsperpage >= rooms.length}
            className="bg-gray-500 text-white p-2 rounded hover:bg-gray-400 cursor-pointer"
          >
            Next
          </button>
        </div>

             
        
    </div>
    
        
      
    {/* <div ref={aboutref} id="about-us" className=" mt-16 p-6 bg-gray-100 rounded-lg shadow-black shadow-lg">
        <h2 className="text-2xl font-bold text-purple-600 text-center">About Us</h2>
        <p className="text-gray-700 mt-4">
        
            🌟 Welcome to GoLodge – Your Perfect Stay, Your Way! 🌟
           <br/>
            At GoLodge, we believe that every journey deserves a comfortable, stylish, and hassle-free stay. Whether you're a business traveler, an adventure seeker, or simply looking for a relaxing getaway, we’ve got the perfect space for you.
          <br/>
            🏨 Why Choose GoLodge?
            <br/>
            ✔ Handpicked Stays – From cozy lodges to luxury suites, we bring you the best.
            <br/>
            ✔ Seamless Booking – A smooth, hassle-free experience at your fingertips.
            <br/>
            ✔ Personalized Comfort – Your stay, tailored to your needs.
            <br/>
            ✔ Trusted & Secure – Verified listings, transparent pricing, and no hidden fees.
            <br/>
            <br/>
            At GoLodge, we don’t just offer places to stay—we create experiences. So, whether it’s a quick stopover or an extended retreat, your perfect stay starts here!
            <br/>
            ✨ Book with GoLodge today & make every stay a memorable one! ✨
        </p>
      </div>  */}
    </div>
    
  );
};

export default MainBlock;