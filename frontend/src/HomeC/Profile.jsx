import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import def from '../images/def.svg'

const Profile = () => { 

  const id = localStorage.getItem('userId');
  const [details, setDetails] = useState(null); // state to store user details
  const [bookdetails,setbookdetails]=useState([]);

  const bookTable=async()=>{
    try{
      const res =await fetch(`http://localhost:5000/api/BookingTable/${id}`,{
        method:'GET'
      })
      const data =await res.json()
      console.log(data)
      setbookdetails(data)
    }
    catch(err){

    }
  }
  useEffect(()=>{
    bookTable();
  },[])

  const getDetails = async () => {
    try {
      const res = await fetch(`http://localhost:5000/Profile/${id}`, {
        method: "GET",
      });
      const data = await res.json();
      data.first_name=data.first_name.charAt(0).toUpperCase()+data.first_name.slice(1);
      data.last_name=data.last_name.charAt(0).toUpperCase()+data.last_name.slice(1);
      setDetails(data);  // save fetched data into state
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <div className='w-full flex flex-col h-screen bg-gradient-to-l from-yellow-400 to-white relative'>
      <div>
        <Navbar />
      </div>

      {/* image block */}
      <div className="absolute left-18 top-22 w-58 h-58 bg-white border-black border-2 shadow-2xl rounded-full">
        <img 
          src={def} 
          alt='profile' 
          className='w-full h-full rounded-full'
        />
      </div>

      {/* details block */}
      <div>
        <h1 className='absolute left-25 top-90 text-3xl text-black font-bold'>
          {details?.first_name} {details?.last_name}
        </h1>
        <h2 className='absolute left-25 top-100 text-xl text-black font-semibold'>
          {details?.email}
        </h2>
      </div>

        {/* bookings block/table */}
      <div className='absolute top-40  w-270 left-100  border-black border-2 rounded-lg p-4 shadow-2xl text-center'>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y-2 divide-gray-200">
            <thead className="ltr:text-left rtl:text-right">
              <tr className="*:font-medium *:text-gray-900">
                <th className="px-3 py-2 whitespace-nowrap">Name</th>
                <th className="px-3 py-2 whitespace-nowrap">Phone Number</th>
                <th className="px-3 py-2 whitespace-nowrap">Check in:</th>
                <th className="px-3 py-2 whitespace-nowrap">Check out:</th>
                <th className="px-3 py-2 whitespace-nowrap">Booking Status</th>
                <th className="px-3 py-2 whitespace-nowrap">Booked on:</th>
                <th className="px-3 py-2 whitespace-nowrap">Room Type</th>
                <th className="px-3 py-2 whitespace-nowrap">Hotel name</th>
                <th className="px-3 py-2 whitespace-nowrap">Location</th>
                <th className="px-3 py-2 whitespace-nowrap">Amount</th>
                <th className="px-3 py-2 whitespace-nowrap">Identity Type</th>
                <th className="px-3 py-2 whitespace-nowrap">ID Number</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
                 {bookdetails.length > 0 ? (
                bookdetails.map((booking) => (
                  <tr key={booking._id}>
                    <td className="px-3 py-2">{booking.name}</td>
                    <td className="px-3 py-2">{booking.mobile}</td>
                    <td className="px-3 py-2">{new Date(booking.checkin).toLocaleDateString()}</td>
                    <td className="px-3 py-2">{new Date(booking.checkout).toLocaleDateString()}</td>
                    <td className="px-3 py-2">{booking.bookingstatus}</td>
                    <td className="px-3 py-2">{new Date(booking.createdAt).toLocaleDateString()}</td>
                    <td className="px-3 py-2">{booking.roomDetails?.roomType}</td>
                    <td className="px-3 py-2">{booking.roomDetails?.hotel_name}</td>
                    <td className="px-3 py-2">{booking.roomDetails?.location}</td>
                    <td className="px-3 py-2">
                      {booking.roomDetails?.price} {booking.roomDetails?.currency}
                    </td>
                    <td className="px-3 py-2">{booking.idtype}</td>
                    <td className="px-3 py-2">{booking.idnumber}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="12" className="px-3 py-4 text-gray-500">
                    No bookings found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
      </div>
    </div>
  )
}

export default Profile
