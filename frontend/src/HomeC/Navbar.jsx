import React from 'react'
import logo from '../images/logo.jpg'
import def from '../images/def.svg'
import { useState } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Navbar = ({aboutRef}) => {

  const Navigate=useNavigate()

  const scrollToAboutUs = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLogout = async () => {
  try {
    await axios.get("http://localhost:5000/logout", { withCredentials: true });
    localStorage.removeItem("authToken");
    localStorage.removeItem("userId");
    Navigate("/Login");
  } catch (err) {
    console.error("Logout failed:", err);
  }
};

  
    const [drp,setdrp]= useState(false);
    const [drp1,setdrp1]=useState(false);
    const toggledrp =()=>
    {
        setdrp(!drp);
    };

    const toggledrp2=()=>
      {
          setdrp1(!drp1);
      };

      
      // setting usestate clear will help you to use in future...

  return (
    <div >
        <header className="bg-white border-1 border-gray-500 shadow-md fixed w-full z-50" >
  <div className="mx-auto flex h-12 items-center gap-7 px-4 sm:px-6 lg:px-8"
        >
    
      <img src={logo} className='w-20 h-12 object-contain  rounded-md'/>
    

    
    
    <nav className="flex space-x-6">
        <Link to='/Home' className='mx-4 hover:bg-amber-200 cursor-pointer' style={{fontFamily:"Dancing Script, cursive",fontSize:'24px'}}>Home</Link>
        <a to='/Home/aboutus' className='mx-4 hover:bg-amber-200 cursor-pointer' style={{fontFamily:"Dancing Script, cursive",fontSize:'24px'}} onClick={scrollToAboutUs} >About us</a> 
        <Link to='/ContactUS' className='mx-4 hover:bg-amber-200 cursor-pointer' style={{fontFamily:"Dancing Script, cursive",fontSize:'24px'}}>Contact us</Link>
         
        <a className='mx-4 hover:bg-amber-200 cursor-pointer' style={{fontFamily:"Dancing Script, cursive",fontSize:'24px'}}>Offers</a> 

        {/* <a className='mx-4 hover:bg-amber-200 cursor-pointer' style={{fontFamily:"Dancing Script, cursive",fontSize:'24px'}}>Trending</a> */}
        
        
      <div className="relative">
          <div className='mx-4 hover:bg-amber-200 cursor-pointer ' style={{fontFamily:"Dancing Script, cursive",fontSize:'24px'}} onClick={toggledrp2}>
                  GetAwayDeals <span className='ml-2 text-base'>{drp1?"▲" : "▼"}</span> 
                  {drp1 && (
                    <div className="absolute w-38 text-xl left-1 top-10 bg-white border-2 rounded-md shadow-md "style={{zIndex:10}}>
                    <ul className="py-2">
                      <li className="px-4 py-2 bg-white hover:bg-gray-100 cursor-pointer relative"style={{zIndex:10}}>SaveTripDeals</li>
                      <li className="px-4 py-2 bg-white hover:bg-gray-100 cursor-pointer relative"style={{zIndex:10}}>Elite Escapes</li>
                      <li className="px-4 py-2 bg-white hover:bg-gray-100 cursor-pointer relative"style={{zIndex:10}}>HolidaySaver</li>
                      <li className="px-4 py-2 bg-white hover:bg-gray-100 cursor-pointer relative"style={{zIndex:10}}>TravelWise</li>
                      
                    </ul>
                  </div>
                  )}
           </div>
      </div>
      </nav> 
          
        <div >
          <div className='text-purple-600 ' style={{
              fontFamily:"Dancing Script, cursive",
              fontSize:'38px'
            }}> Hotels!
            </div>
        </div>

      <div>
        <img onClick={toggledrp} src={def} className='cursor-pointer 'style={{ position: "absolute", right: 12, top:8, height:35}}/>
        {drp && (
        <div className="absolute right-1 mt-2 w-22 top-11 border-2 bg-white rounded-md shadow-md" style={{zIndex:10}}>
          <ul className="py-2" >
            <li className="px-4 py-2 bg-white hover:bg-gray-100 cursor-pointer relative" style={{zIndex:10}}>Settings</li>
            <Link to='/Profile'><li className="px-4 py-2 bg-white hover:bg-gray-100 cursor-pointer relative" style={{zIndex:10}}>Profile</li></Link>
            <li className="px-4 py-2 bg-white hover:bg-gray-100 cursor-pointer relative" onClick={handleLogout} style={{zIndex:10}}>Logout</li>
          </ul>
        </div>
      )}
    </div>        
    
    </div>
</header>
    </div>
  )
}

export default Navbar

// Why This Works?
// useNavigate() → Used to programmatically navigate to the login page (/).
// localStorage.removeItem("token") → Clears the stored authentication token (if using JWT or session-based login).
// navigate("/") → Redirects the user to the login page after logout.


// 🔥 Now, when you click "Logout":

// ✅ The user session clears.
// ✅ The page redirects to / (Login Page).
// ✅ Works correctly without <Link> inside the Logout function.