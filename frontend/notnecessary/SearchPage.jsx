import React, { useEffect,useState } from "react";
import Background from "../images/Background.jpeg";
import reviews from '../reviewdata';

const SearchPage = ({ filters, onFilterChange }) => {
  const [localFilters, setLocalFilters] = useState({
    roomType: "",
    accommodation: "",
    location: "New York",
  });

  const handleFilterChange = (e) => {
    setLocalFilters((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSearch = () => {
    onFilterChange(localFilters); 
  };

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);

  const currentReview = reviews[index];


  return (
    <>
      
      <div className="relative top-18 left-30 bg-white w-[330px] h-[540px] rounded-xl shadow-xl">
      <label htmlFor="locationInput" className="absolute top-6 left-8 text-lg text-black">
        DESTINATION
      </label>
      <input
        id="locationInput"
        name="location"
        onChange={handleFilterChange}
        className="absolute top-12 left-8 border border-gray-400 rounded-sm w-64 text-center text-black bg-white"
        type="text"
        placeholder="New York"
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
        

        {/* <div className="absolute top-190 w-[250px] left-3.5 font-serif text-lg font-medium text-black">
          
        
        <div className="transition-opacity duration-700 ease-in-out w-54 h-auto mx-auto my-6">

      <div className="bg-white shadow-md rounded-xl left-10 p-4 border border-gray-200">
        <h3 className="text-xl font-semibold">{currentReview.name}</h3>
        <p className="text-yellow-500">⭐ {currentReview.rating}</p>
        <p className="text-gray-700">{currentReview.comment}</p>
        <small className="text-gray-500">{currentReview.date}</small>
      </div>
    </div>


        </div> */}
      </div>
    </>
  );
};

export default SearchPage;
