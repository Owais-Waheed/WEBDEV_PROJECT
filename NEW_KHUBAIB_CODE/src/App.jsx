// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/Home';
import HomeLoggedIn from './pages/HomeLoggedIn';
import Signup from './pages/Signup';
import Login from './pages/Login';
import SubmitComplaint from './pages/SubmitComplaint';
import ComplaintList from './pages/ComplaintList';
import ComplaintDetail from './pages/ComplaintDetail';
import ProfilePage from './pages/ProfilePage';

function PrivateRoute({ children }) {
  return localStorage.getItem('token')
    ? children
    : <Navigate to="/login" replace />;
}

export default function App() {
  const isAuth = !!localStorage.getItem('token');

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={ isAuth ? <HomeLoggedIn/> : <Home/> }/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login"  element={<Login/>}/>
          
          {/* Protected */}
          <Route 
            path="/submit" 
            element={
              <PrivateRoute>
                <SubmitComplaint/>
              </PrivateRoute>
            }
          />
          <Route 
            path="/complaints" 
            element={
              <PrivateRoute>
                <ComplaintList/>
              </PrivateRoute>
            }
          />
          <Route 
            path="/complaint/:id" 
            element={
              <PrivateRoute>
                <ComplaintDetail/>
              </PrivateRoute>
            }
          />
          <Route 
            path="/profile" 
            element={
              <PrivateRoute>
                <ProfilePage/>
              </PrivateRoute>
            }
          />
          <Route path="/complaints/:id" element={<ComplaintDetail />} />

          {/* catch-all */}
          <Route path="*" element={<Navigate to="/" replace/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}