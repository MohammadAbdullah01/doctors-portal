
// import './App.css';

import { Route, Routes } from "react-router-dom";
import Appointment from "./pages/Appointment/Appointment";
import Home from "./pages/Home/Home";
import Login from "./pages/Shared/Login/Login";
import SignUp from "./pages/Shared/Login/SignUp";
import Navbar from "./pages/Shared/Navbar/Navbar";
import RequireAuth from "./pages/Shared/RequireAuth/RequireAuth";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "./pages/Dashboard/Dashboard";
import MyAppointments from "./pages/Dashboard/MyAppointments";
import MyReviews from "./pages/Dashboard/MyReviews";
import MyHistory from "./pages/Dashboard/MyHistory";
import AllUsers from "./pages/Dashboard/AllUsers";
import RequireAdmin from "./pages/Shared/RequireAdmin";

function App() {
  return (
    <div className='max-w-7xl	mx-auto px-10'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='appointment' element={<RequireAuth><Appointment></Appointment></RequireAuth>}></Route>
        <Route path='dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route index element={<MyAppointments></MyAppointments>}></Route>
          <Route path='review' element={<MyReviews></MyReviews>}></Route>
          <Route path='history' element={<MyHistory></MyHistory>}></Route>
          <Route path='users' element={<RequireAdmin><AllUsers></AllUsers></RequireAdmin>}></Route>
        </Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='register' element={<SignUp></SignUp>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
