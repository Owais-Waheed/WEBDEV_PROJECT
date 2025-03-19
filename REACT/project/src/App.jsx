// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import ComplaintList from './pages/ComplaintList';
// import ComplaintDetail from './pages/ComplaintDetail';
// import SubmitComplaint from './pages/SubmitComplaint';
// import HomeLoggedIn from './pages/HomeLoggedIn';
// import ProfilePage from './pages/ProfilePage';

// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen flex flex-col bg-gray-50">
//         <Navbar />
//         <main className="flex-grow">
//           <Routes>
            // <Route path="/" element={<Home />} />
            // <Route path="/complaints" element={<ComplaintList />} />
            // <Route path="/complaints/:id" element={<ComplaintDetail />} />
            // <Route path="/submit" element={<SubmitComplaint />} />
            // <Route path="/dashboard" element={<HomeLoggedIn />} />
            // <Route path="profile" element={<ProfilePage />} />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';  // Import the Layout component
import Home from './pages/Home';
import ComplaintList from './pages/ComplaintList';
import ComplaintDetail from './pages/ComplaintDetail';
import SubmitComplaint from './pages/SubmitComplaint';
import HomeLoggedIn from './pages/HomeLoggedIn';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Wrap all routes inside the Layout component */}
        <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
            <Route path="/complaints" element={<ComplaintList />} />
            <Route path="/complaints/:id" element={<ComplaintDetail />} />
            <Route path="/submit" element={<SubmitComplaint />} />
            <Route path="/dashboard" element={<HomeLoggedIn />} />
            <Route path="profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
