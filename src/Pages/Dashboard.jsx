import React from 'react';

const Dashboard = ({ userRole }) => {
  return (
    <div className="dashboard">
      <h1>Welcome to the Dashboard</h1>
      {userRole === 'TEACHER' && <TeacherDashboard />}
      {userRole === 'STUDENT' && <StudentDashboard />}
      {userRole === 'ADMIN' && <AdminDashboard />}
      {userRole === 'PARENT' && <ParentDashboard />}
    </div>
  );
};

const TeacherDashboard = () => (
  <div>
    <h2>Teacher Dashboard</h2>
    {/* Teacher-specific content */}
  </div>
);

const StudentDashboard = () => (
  <div>
    <h2>Student Dashboard</h2>
    {/* Student-specific content */}
  </div>
);

const AdminDashboard = () => (
  <div>
    <h2>Admin Dashboard</h2>
    {/* Admin-specific content */}
  </div>
);

const ParentDashboard = () => (
  <div>
    <h2>Parent Dashboard</h2>
    {/* Parent-specific content */}
  </div>
);

export default Dashboard;
