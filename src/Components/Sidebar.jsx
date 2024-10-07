import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import dp from '../Assets/dp.png';
import { PiExamFill } from "react-icons/pi";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { HiAcademicCap } from "react-icons/hi2";
import { MdEmojiEvents, MdFeedback, MdWork } from "react-icons/md";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <div>
     <div className='flex z-50 justify-start items-center py-8 sm:py-0 md:py-0 lg:py-0'>
        <button 
          onClick={toggleSidebar} 
          aria-controls="default-sidebar" 
          type="button" 
          className="inline-flex items-center px-2 py-1 ms-3 text-sm text-black bg-gray-200 border border-cyan-200 rounded-full sm:hidden hover:bg-gray-100 fixed">
           <h3 className='text-xl mx-1 font-bold border bg-gray-100 pb-1 pt-2 px-4 rounded-full w-[100px]' style={{ fontFamily: "Grandstander" }}>
          <span className='text-cyan-700'>K</span>eto<span className='text-cyan-700'>.</span>
          </h3>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
          </svg>
        </button>
      </div>


      <aside 
        ref={sidebarRef}
        id="default-sidebar" 
        className={`fixed top-0 bottom-0 left-0 z-40 w-64 shadow-lg rounded-br-2xl rounded-tr-2xl transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0`} 
        aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-auto border-r border-cyan-500 shadow shadow-xl shadow-cyan-900 rounded-br-2xl rounded-tr-2xl bg-cyan-50">
          <ul className="space-y-2 font-medium">
            <li className=" mb-6 shadow-lg h-auto bg-cyan-950 rounded-2xl">
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-2xl hover:bg-cyan-900 bg-cyan-800" onClick={closeSidebar}>
                <div className="relative flex items-center">
                  <img src={dp} alt="Profile" className="w-20 h-20 rounded-full object-cover" />
                  <button className="absolute bottom-0 right-0 bg-cyan-200 text-white rounded-full p-1 hover:bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="black">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15.232 5.232l3.536 3.536M9 11l3 3-6 6H3v-3l6-6z" />
                    </svg>
                  </button>
                </div>
                <div className="flex items-start justify-start flex-col pl-4">
                  <span className="text-lg text-blue-100 text-left">Hello,</span>
                  <span className="text-lg text-white text-left">Raja Ram</span>
                </div>
              </a>
              <div className="flex items-start justify-start flex-col pl-4 py-4">
                  <span className="text-sm text-gray-200 text-left">Grade : A++</span>
                  <span className="text-sm text-gray-200 text-left">Reg no : 234567008</span>
                </div>
            </li>

            <li>
              <NavLink
                to="/"
                className={({ isActive }) => isActive ? "flex items-center p-2 text-gray-900 rounded-2xl bg-cyan-200" : "flex items-center p-2 text-gray-900 rounded-2xl hover:bg-cyan-100 group"}
                onClick={closeSidebar}
              >
                <TbLayoutDashboardFilled className="h-[20px] w-[20px]" />
                <span className="ms-3">Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Exams"
                className={({ isActive }) => isActive ? "flex items-center p-2 text-gray-900 rounded-2xl bg-cyan-200" : "flex items-center p-2 text-gray-900 rounded-2xl hover:bg-cyan-100 group"}
                onClick={closeSidebar}
              >
                <HiAcademicCap className='w-[20px] h-[20px]'/>
                <span className="flex-1 ms-3 whitespace-nowrap">Exams</span>
                <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-black bg-white border border-cyan-900 rounded-full">Pro</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Results"
                className={({ isActive }) => isActive ? "flex items-center p-2 text-gray-900 rounded-2xl bg-cyan-200" : "flex items-center p-2 text-gray-900 rounded-2xl hover:bg-cyan-100 group"}
                onClick={closeSidebar}
              >
                <PiExamFill className='w-[20px] h-[20px]'/>
                <span className="flex-1 ms-3 whitespace-nowrap">Results</span>
                <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-white border border-cyan-900 rounded-full">3</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/feedback"
                className={({ isActive }) => isActive ? "flex items-center p-2 text-gray-900 rounded-2xl bg-cyan-200" : "flex items-center p-2 text-gray-900 rounded-2xl hover:bg-cyan-100 group"}
                onClick={closeSidebar}
              >
                <MdFeedback className='w-[20px] h-[20px]'/>
                <span className="flex-1 ms-3 whitespace-nowrap">Feedback</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
