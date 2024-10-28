// LoginComponent.jsx
import React, { useState } from 'react';
import './LoginComponent.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student'); // Default role as 'student'

  const handleLogin = (e) => {
    e.preventDefault();
    console.log({ email, password, role });
    // Add login functionality here
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2>Login</h2>

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
        />

        <label>Role</label>
        <select value={role} onChange={(e) => setRole(e.target.value)} required>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="admin">Admin</option>
          <option value="parent">Parent</option>
        </select>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
