import React from 'react';
import { Calendar, MapPin, Users, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import Background from "../images/Background.jpeg";

const HotelSearchForm = ({ filters, onFilterSubmit }) => {
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onFilterSubmit(filters);  // Pass the updated filters to the parent
  };

  // Function to handle changes in form fields
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    onFilterSubmit({ ...filters, [name]: value });  // Update filters when form fields change
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div style={{ backgroundImage: `url(${Background})` }} className="flex flex-col h-screen bg-cover bg-center">
        <div className="fixed flex flex-row w-110 mx-34 pt-26">
          <div className="flex-1 p-6 bg-white shadow rounded-lg">
            <form onSubmit={handleSubmit}>
              <div className="h-2 bg-green-500 w-full mb-6"></div>
              <div className="mb-6">
                <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">
                  DESTINATION
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                    <MapPin size={20} />
                  </span>
                  <input
                    type="text"
                    id="destination"
                    name="location"
                    value={filters.location}
                    onChange={handleFilterChange}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter Location"
                  />
                </div>
              </div>

              {/* Other form fields like Room Categories, Check In/Out, etc. */}
              {/* Same as your original code with the same structure */}
              {/* Only thing that changes is the 'onChange' handlers to call `handleFilterChange` */}

              <button type="submit" className="ml-auto bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded">
                Search Hotels
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelSearchForm;
