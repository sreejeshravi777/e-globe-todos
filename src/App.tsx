import React, { Suspense, lazy } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/card.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

const Login = lazy(() => import('./containers/Login'));
const Dashboard = lazy(() => import('./containers/Dashbord'));

const LoadingSpinner = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '100vh',
    fontSize: '1.2rem',
    color: '#666'
  }}>
    Loading...
  </div>
);

function App() {
  const isAuthenticated = true;
  
  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          {/* //<Route path="/" element={<Dashboard />} /> */}
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoute isAuthenticated={isAuthenticated} defaultRoute={''} />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
