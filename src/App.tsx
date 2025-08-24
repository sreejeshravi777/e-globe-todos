import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './containers/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/card.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Dashboard from './containers/Dashbord';

function App() {
  const isAuthenticated=true
  return (
    <Router>
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />

      {/* Private Routes */}
      <Route element={<PrivateRoute isAuthenticated={isAuthenticated} defaultRoute={''} />}>
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/profile" element={<UserProfilePage />} /> */}
        {/* Add more private routes here */}
      </Route>

      {/* Catch-all for 404 Not Found */}
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  </Router>
  );
}

export default App;
