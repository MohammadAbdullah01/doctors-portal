
// import './App.css';

import { Route, Routes } from "react-router-dom";
import Appointment from "./pages/Appointment/Appointment";
import Home from "./pages/Home/Home";
import Login from "./pages/Shared/Login/Login";
import SignUp from "./pages/Shared/Login/SignUp";
import Navbar from "./pages/Shared/Navbar/Navbar";
import RequireAuth from "./pages/Shared/RequireAuth/RequireAuth";

function App() {
  return (
    <div className='max-w-7xl	mx-auto px-10'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/appointment' element={<RequireAuth><Appointment></Appointment></RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
