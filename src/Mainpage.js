import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import BottomNavbar from './Components/BottomNavbar';
import Results from './Pages/Results';
import Dashboard from './Pages/Dashboard';
import Exams from './Pages/Exams';
import Feedback from './Pages/Feedback';
import DisplayData from './Components/Displaydata';
import { useUser } from './Context/userContext'; // assuming useUser provides user data

const Mainpage = () => {
  const { user } = useUser(); // Retrieve user data including role

  return (
    <div className="overflow-x-hidden bg-black sm:bg-black md:bg-cyan-400 lg:bg-cyan-400 w-[100vh] w-[100vw] flex flex-col items-start">
      <div className='flex fixed bg-cyan-950 justify-between items-center w-full z-20'>
        <div className='w-full'>
          <Sidebar userRole={user?.role}/>
        </div>
      </div>
      
      <div className='sm:pl-[20%] md:pl-[20%] lg:pl-[20%] w-[100vw]'>
        <Routes>
          <Route
            index
            path=""
            element={<Dashboard userRole={user?.role} />} 
          />
          <Route path="Results" element={<Results />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="displaydata" element={<DisplayData />} />
          <Route path="Exams" element={<Exams />} />
        </Routes>
        <Outlet />
      </div>
      
      <div className='w-full z-1'>
        <BottomNavbar />
      </div>
    </div>
  );
};

export default Mainpage;
