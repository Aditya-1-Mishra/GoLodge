import React, { useEffect ,useState, useRef } from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from '../src/HomeC/Navbar';
import MainBlock from './MainBlock';
import SearchPage from '../src/HomeC/SearchPage';
import roomsData from './Data';
import Background_main from './images/Background_main.jpeg';
import Footer from '../src/HomeC/Footer';

const Home = () => {
  const aboutRef = useRef(null);

  const [filters, setFilters] = useState({
    location: '',
    roomType: '',
    accommodation: '',
  });

  const [rooms, setRooms] = useState([]); // fetched from backend

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };
useEffect(() => {
    const fetchRooms = async () => {
      try {
        const query = new URLSearchParams(filters).toString();
        const res = await fetch(`http://localhost:5000/Home?${query}`);
        const data = await res.json();
        setRooms(data);   // update rooms from backend
      } catch (err) {
        console.error("Error fetching rooms:", err);
      }
    };

    fetchRooms();
  }, [filters]);
  return (
    <div
      className="relative flex flex-col  bg-cover overflow-hidden bg-center "
      style={{
        backgroundImage: `url(${Background_main})`,
      }}
    >
      <Navbar aboutRef={aboutRef} />

      <div className="flex flex-1 ">
        <div className="flex-shrink-0  min-h-screen  w-160 p-4">
          
          <SearchPage filters={filters} onFilterChange={handleFilterChange} />
          

        </div>

        <div className="flex-1 overflow-auto p-4">
          <Routes>
            <Route
              path="/Home"
              element={<MainBlock rooms={rooms} aboutref={aboutRef} />}
            />
          </Routes>
        </div>
      </div>
      <div className=' h-full'> 
        <Footer/>
      </div>
      
    </div>
  );
};

export default Home;
