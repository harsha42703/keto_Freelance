import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import BottomNavbar from './Components/BottomNavbar';
import Results from './Pages/Results';
import Dashboard from './Pages/Dashboard';
import Exams from './Pages/Exams';
import Feedback from './Pages/Feedback';
import DisplayData from './Components/Displaydata';

const Mainpage = () => {
  return (
    <div className="overflow-x-hidden bg-black sm:bg-black md:bg-cyan-400 lg:bg-cyan-400 w-[100vh] w-[100vw] flex flex-col items-start">
      <div className=' flex fixed bg-cyan-950 justify-between items-center w-full z-20'>
      <div className='w-full'>
        <Sidebar />
      </div>
      <div>
        
        
<form class="flex only-mobile items-center">   
    {/* <label for="simple-search" class="sr-only">Search</label> */}
    {/* <div class="relative w-[75%]">
        <div class="absolute inset-y-0 start-0 flex items-center  pointer-events-none">
        </div>
        <input type="text" id="simple-search" class="bg-gray-50 border border-cyan-100 text-gray-800 placeholder:text-gray-500 text-sm rounded-full block w-full p-2.5 " placeholder="Search" />
    </div> */}
    <button class="p-3 ms-2 text-sm mr-4 font-medium text-black bg-white rounded-full border border-cyan-100 hover:bg-cyan-300">
        <svg class="w-10 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span class="sr-only">Search</span>
    </button>
</form>

      </div>
      </div>
      <div className='sm:pl-[20%] md:pl-[20%] lg:pl-[20%] w-[100vw]'>
        <Routes>
          <Route index path=''  element={<Dashboard />} />
          <Route path='Results' element={<Results />} />
          <Route path='feedback' element={<Feedback />} />
          <Route path='displaydata' element={<DisplayData />} />
          <Route path='Exams' element={<Exams />} />
        </Routes>
       <Outlet/>
      </div>
      <div className='w-full z-1'>
        <BottomNavbar />
      </div>
    </div>
  )
}

export default Mainpage