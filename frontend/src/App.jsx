import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Login'
import Signup from "./Signup";
import Loadingpage from "./Loadingpage";
import HOMEpor from "./HomeC/HOMEpor";
import Booking from "./HomeC/Booking";
import ContactUS from "./ContactUS";
import Profile from "./HomeC/Profile";
import ProtectedRoute from "./ProtectedRoute";

const App = () => {
  
  return (
    <div>
      <Router>
        <Routes>
         <Route path='/'   element={<Loadingpage/>} /> 
         <Route path='/Login' element={<Login/>} />
         <Route path='/Signup' element={<Signup/>} />
         <Route path='/Home' element={<ProtectedRoute><HOMEpor/></ProtectedRoute>} />
          <Route path='/Booking/:id' element={<ProtectedRoute><Booking/></ProtectedRoute>} />
          <Route path='/Profile' element={<ProtectedRoute><Profile/></ProtectedRoute>} />
          <Route path='/ContactUS' element={<ContactUS/>} />
          <Route path="*" element={<h1>404 Page Not Found</h1>} />
        </Routes>
      </Router>
   
    
    


    </div>
  )
}

export default App