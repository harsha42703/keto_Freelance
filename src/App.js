import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Mainpage from './Mainpage';
import { useUser } from './Context/userContext';
import { useNavigate } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';


function App() {
  const {setUser,user} = useUser();
  const navigate = useNavigate();
  useEffect(() => {

    const fetchCurrentUser = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/me', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',// Retrieve token from cookies
          },
          credentials: 'include',
        });
  
        if (response.ok) {
          const userData = await response.json();
          setUser({
            name:userData.user.name,
            email:userData.user.email,
            role:userData.role
          })
          console.log(userData,"this is userData");
        } else {
          console.error("Failed to fetch user data");
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
  
    fetchCurrentUser();
  }, []);

  useEffect(() => {
    if (user?.role) {
      // Role-based redirection logic
      switch (user.role) {
        case 'TEACHER':
          navigate('/teacher-dashboard');
          break;
        case 'STUDENT':
          navigate('/student-dashboard');
          break;
        case 'PARENT':
          navigate('/parent-dashboard');
          break;
        case 'ADMINQ':
          navigate('/admin-dashboard');
          break;
        default:
          console.error('Unknown role');
      }
    }
  }, [user, navigate]);
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<Mainpage />} />
      <Route path="/teacher-dashboar" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
