import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Login'
import Signup from "./Signup";
import Loadingpage from "./Loadingpage";
import HOMEpor from "./HomeC/HOMEpor";

const App = () => {
  
  return (
    <div>
      <Router>
        <Routes>
         <Route path='/'   element={<Loadingpage/>} /> 
         <Route path='/Login' element={<Login/>} />
         <Route path='/Home'   element={<HOMEpor/>} />
         <Route path='/Signup' element={<Signup/>} />
          {/* <Route path='/Booking/:id' element={<Booking/>} /> */}
        </Routes>
      </Router>
   
    
    


    </div>
  )
}

export default App