import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ListComplaintsPage from './pages/ListComplaintsPage';
import SubmitComplaintPage from './pages/SubmitComplaintPage';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="complaints" element={<ListComplaintsPage />} />
          <Route path="submit" element={<SubmitComplaintPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="profile" element={<ProfilePage />} />
          {/* Other routes will be added here */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;