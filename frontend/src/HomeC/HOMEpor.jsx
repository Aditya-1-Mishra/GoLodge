import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import Background_main from '../images/Background_main.jpeg';
import Navbar from './Navbar';

const HOMEpor = () => {
  const [rooms, setRooms] = useState([]); // fetched from backend
  const [Filters, setFilters] = useState({
    location: '',
    roomType: '',
    accommodation: '',
  });

  // Pagination states
  const [currIndex, setCurrIndex] = useState(0);
  const itemsPerPage = 4;

  const handleFilterChange = (e) => {
    setFilters((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSearch = async () => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/rooms/search?location=${Filters.location}&roomType=${Filters.roomType}&accommodation=${Filters.accommodation}`,
        { method: 'GET' }
      );
      const data = await res.json();
      console.log("data is recieved", data);
      if (data.rooms) {
        setRooms(data.rooms);
        setCurrIndex(0); // reset pagination on new search
      } else {
        setRooms([]);
        setCurrIndex(0);
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Slice visible rooms
  const visibleRooms = rooms.slice(currIndex, currIndex + itemsPerPage);

  const nextSlide = () => {
    if (currIndex + itemsPerPage < rooms.length) {
      setCurrIndex(currIndex + itemsPerPage);
    }
  };

  const prevSlide = () => {
    if (currIndex > 0) {
      setCurrIndex(currIndex - itemsPerPage);
    }
  };

  return (
    <div
      className="relative flex flex-col bg-cover overflow-hidden bg-center min-h-screen"
      style={{
        backgroundImage: `url(${Background_main})`,
        backgroundSize: 'cover',
      }}
    >
      <div>
        <Navbar />
      </div>

      <div className="relative top-[100px] left-[120px] bg-white w-[330px] h-[500px] rounded-xl shadow-xl p-6">
        <label htmlFor="locationInput" className="absolute top-6 left-8 text-lg text-black">
          DESTINATION
        </label>
        <input
          id="locationInput"
          name="location"
          onChange={handleFilterChange}
          className="absolute top-12 left-8 border border-gray-400 rounded-sm w-64 text-center text-black bg-white"
          type="text"
          placeholder="Destination"
        />

        <label htmlFor="RoomCategories" className="absolute top-24 left-8 text-lg text-black">
          ROOM CATEGORIES
        </label>
        <select
          name="roomType"
          id="RoomCategories"
          onChange={handleFilterChange}
          className="absolute top-30 left-8 mt-1 w-64 rounded-sm border border-gray-400 text-black bg-white text-center"
        >
          <option value="">All</option>
          <option value="Luxury Room">Luxury Room</option>
          <option value="Deluxe Room">Deluxe Room</option>
          <option value="Standard Room">Standard Room</option>
          <option value="Executive Suite">Executive Suite</option>
          <option value="Presidential Suite">Presidential Suite</option>
          <option value="Superior Room">Superior Room</option>
          <option value="Economy Room">Economy Room</option>
        </select>

        <label htmlFor="Accomodationtype" className="absolute top-44 left-8 text-lg text-black">
          ACCOMMODATION TYPE
        </label>
        <select
          name="accommodation"
          id="Accomodationtype"
          onChange={handleFilterChange}
          className="absolute top-50 left-8 mt-1 w-64 rounded-sm border border-gray-400 text-black bg-white text-center"
        >
          <option value="">All</option>
          <option value="Single">Single</option>
          <option value="Double">Double</option>
          <option value="Twin">Twin</option>
          <option value="Studio">Studio</option>
          <option value="Apartment">Apartment</option>
          <option value="Resort Villa">Resort Villa</option>
          <option value="Bungalow">Bungalow</option>
        </select>

        <label htmlFor="checkIn" className="absolute top-64 left-8 text-lg text-black">
          CHECK IN
        </label>
        <input
          id="checkIn"
          type="date"
          className="absolute top-70 left-8 mt-1 w-64 rounded-sm border border-gray-400 text-black bg-white text-center"
        />

        <label htmlFor="checkOut" className="absolute top-84 left-8 text-lg text-black">
          CHECK OUT
        </label>
        <input
          id="checkOut"
          type="date"
          className="absolute top-90 left-8 mt-1 w-64 rounded-sm border border-gray-400 text-black bg-white text-center"
        />

        <button
          onClick={handleSearch}
          className="absolute top-105 left-32 bg-cyan-700 text-white px-6 py-2 rounded-md hover:bg-cyan-600"
        >
          Search
        </button>
      </div>

      <div className="absolute top-[70px] left-[600px] p-4 grid grid-cols-2 gap-5 w-2/4">
        {visibleRooms.length > 0 ? (
          visibleRooms.map((room) => (
            <div
              key={room._id}
              className="p-4 rounded shadow-md bg-white cursor-pointer hover:shadow-xl transition-shadow shadow-black duration-500"
            >
              <Link to={`/Booking/${room._id}`}>
                <img
                  src={room.images?.[0] || "/fallback.jpg"}
                  alt={room.name}
                  className="w-full h-40 object-cover rounded-md"
                />
                <h3 className="mt-2 text-lg font-semibold">{room.name}</h3>
                <p className="text-sm text-gray-600">
                  {room.roomType} | {room.accommodation} | {room.location}
                </p>
              </Link>
            </div>
          ))
        ) : (
          <p className="text-lg text-white absolute right-90 top-52">No rooms available.</p>
        )}
      </div>

      {/* Pagination Controls */}
      {rooms.length > itemsPerPage && (
        <div className="absolute bottom-12 right-100 transform -translate-x-1/2 flex gap-4">
          <button
            onClick={prevSlide}
            disabled={currIndex === 0}
            className="bg-gray-500 text-white p-2 rounded hover:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Prev
          </button>

          <input
            type="text"
            className="bg-white border rounded-sm w-12 text-center text-black"
            readOnly
            value={`${currIndex / itemsPerPage + 1} `}
          />

          <button
            onClick={nextSlide}
            disabled={currIndex + itemsPerPage >= rooms.length}
            className="bg-gray-500 text-white p-2 rounded hover:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default HOMEpor;
