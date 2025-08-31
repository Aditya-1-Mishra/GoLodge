import React from 'react'
import loginIMG from '/src/images/loginIMG.jpeg';
import loginIMGBG from '/src/images/loginIMGBG.jpeg'
import { data, Link } from "react-router-dom";
import {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = () => {

  const [email,setemail]=useState("");
  const [password,setpassword]=useState("");
  const Navigate = useNavigate();

  const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const authenticate = await axios.post(
      'http://localhost:5000/Login',
      { email, password },
      { withCredentials: true }
    );

    if (authenticate.data.token) {
      localStorage.setItem('userId', authenticate.data.userId);
      localStorage.setItem('authToken',authenticate.data.token)
      console.log(authenticate.data);
          console.log(localStorage.getItem('userId'))
      alert(authenticate.data.message || "Login successful");
      Navigate('/Home'); // ✅ lowercase navigate
    } else {
      alert("Login failed. Please try again.");
    }

  } catch (err) {
    console.error(err.response?.data?.error || err.message);
    alert(err.response?.data?.error || "Login failed. Please check your credentials and try again.");
  }
};


  return (
    <div>
        
           

<div className="relative flex flex-wrap h-screen items-center overflow-hidden"
style={{
    backgroundImage:`url(${loginIMGBG})`,
    backgroundPosition:'center',
    backgroundSize:'cover',
    backgroundRepeat:'no-repeat'
}}>
  <div className="absolute w-full max-w-md left-35 px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8  lg:py-24 border-3  border-black rounded-lg shadow-black shadow-lg">
    <div className="mx-auto max-w-lg text-center">
      <h1 className="text-2xl font-bold sm:text-3xl bg-amber-100 rounded-md">"Access Your Stays – Log In to GoLodge"</h1>

      <p className="mt-4 text-white">
      Secure Access. Smooth Bookings.
      </p>
    </div>

    <form  className="mx-auto mt-8 mb-0 max-w-md space-y-4" onSubmit={handleLogin}>
      <div>
        <label htmlFor="email" className="sr-only">Email</label>

        <div className="relative">
          <input
            type="email"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 bg-white text-sm shadow-xs"
            placeholder="Enter email"
            value={email}
            onChange={(e)=>setemail(e.target.value)}
          />

          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
          </span>
        </div>
      </div>

      <div>
        <label htmlFor="password" className="sr-only">Password</label>

        <div className="relative">
          <input
            type="password"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 bg-white text-sm shadow-xs"
            placeholder="Enter password"
            value={password}
            onChange={(e=>setpassword(e.target.value))}
          />

          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm text-white">
          No account?
          <Link className='underline' to='/Signup'>SignUp</Link>
        </p>

       
         
         <button
          type="submit"
          className="inline-block rounded-lg bg-blue-500 px-5 py-3 hover:bg-blue-400 text-sm font-medium text-white cursor-pointer"
        >Sign in
        </button>
        
        
      </div>
    </form>
  </div>

  <div className="absolute right-20 top-17 h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
    <img
      alt="Hotel"
      src={loginIMG}
      className=" top-18 h-[580px] w-[580px] object-cover rounded-lg shadow-black shadow-2xl"
    />
  </div>
</div>


    </div>
  )
}

export default Login