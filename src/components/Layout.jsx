// // import React from "react";
// // import { Link, Outlet, useNavigate } from "react-router-dom";
// // import {
// //   Home,
// //   FileText,
// //   PlusCircle,
// //   LayoutDashboard,
// //   User,
// //   LogIn,
// // } from "lucide-react";

// // const Layout = () => {
// //   const navigate = useNavigate();

// //   return (
// //     <div className="min-h-screen flex flex-col">
// //       {/* Header */}
// //       <header className="bg-white shadow">
// //         <div className="container mx-auto px-4 py-4">
// //           <div className="flex justify-between items-center">
// //             <Link to="/" className="flex items-center space-x-2">
// //               <FileText className="h-6 w-6" />
// //               <span className="text-xl font-semibold">Complaint Tracker</span>
// //             </Link>
// //             <button
// //               onClick={() => navigate("/login")}
// //               className="flex items-center space-x-1 px-4 py-2 rounded bg-gray-100 hover:bg-gray-200"
// //             >
// //               <LogIn className="h-4 w-4" />
// //               <span>LogIn</span>
// //             </button>
// //           </div>

// //           {/* Navigation */}
// //           <nav className="mt-4">
// //             <ul className="flex space-x-6">
// //               <li>
// //                 <Link
// //                   to="/"
// //                   className="flex items-center space-x-1 text-gray-600 hover:text-gray-900"
// //                 >
// //                   <Home className="h-4 w-4" />
// //                   <span>Home</span>
// //                 </Link>
// //               </li>
// //               <li>
// //                 <Link
// //                   to="/complaints"
// //                   className="flex items-center space-x-1 text-gray-600 hover:text-gray-900"
// //                 >
// //                   <FileText className="h-4 w-4" />
// //                   <span>List Complaints</span>
// //                 </Link>
// //               </li>
// //               <li>
// //                 <Link
// //                   to="/submit"
// //                   className="flex items-center space-x-1 text-gray-600 hover:text-gray-900"
// //                 >
// //                   <PlusCircle className="h-4 w-4" />
// //                   <span>Submit Complaint</span>
// //                 </Link>
// //               </li>
// //               <li>
// //                 <Link
// //                   to="/dashboard"
// //                   className="flex items-center space-x-1 text-gray-600 hover:text-gray-900"
// //                 >
// //                   <LayoutDashboard className="h-4 w-4" />
// //                   <span>Dashboard</span>
// //                 </Link>
// //               </li>
// //               <li>
// //                 <Link
// //                   to="/profile"
// //                   className="flex items-center space-x-1 text-gray-600 hover:text-gray-900"
// //                 >
// //                   <User className="h-4 w-4" />
// //                   <span>Profile</span>
// //                 </Link>
// //               </li>
// //             </ul>
// //           </nav>
// //         </div>
// //       </header>

// //       {/* Main Content */}
// //       <main className="flex-grow container mx-auto px-4 py-8">
// //         <Outlet /> {/* This renders the child components (pages) */}
// //       </main>

// //       {/* Footer */}
// //       <footer className="bg-gray-100">
// //         <div className="container mx-auto px-4 py-6">
// //           <div className="grid grid-cols-4 gap-8">
// //             <div>
// //               <h3 className="font-semibold mb-2">About Us</h3>
// //               <ul className="space-y-1">
// //                 <li>
// //                   <Link
// //                     to="/about"
// //                     className="text-gray-600 hover:text-gray-900"
// //                   >
// //                     About
// //                   </Link>
// //                 </li>
// //                 <li>
// //                   <Link
// //                     to="/contact"
// //                     className="text-gray-600 hover:text-gray-900"
// //                   >
// //                     Contact
// //                   </Link>
// //                 </li>
// //               </ul>
// //             </div>
// //             <div>
// //               <h3 className="font-semibold mb-2">Legal</h3>
// //               <ul className="space-y-1">
// //                 <li>
// //                   <Link
// //                     to="/privacy"
// //                     className="text-gray-600 hover:text-gray-900"
// //                   >
// //                     Privacy Policy
// //                   </Link>
// //                 </li>
// //                 <li>
// //                   <Link
// //                     to="/terms"
// //                     className="text-gray-600 hover:text-gray-900"
// //                   >
// //                     Terms of Service
// //                   </Link>
// //                 </li>
// //               </ul>
// //             </div>
// //           </div>
// //         </div>
// //       </footer>
// //     </div>
// //   );
// // };

// // export default Layout;

// // src/components/Layout.jsx
// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// export default function Layout({ children }) {
//   const navigate = useNavigate();
//   const token = localStorage.getItem('token');

//   function handleLogout() {
//     localStorage.removeItem('token');
//     localStorage.removeItem('user');
//     navigate('/');
//   }

//   return (
//     <div>
//       <nav className="p-4 bg-gray-800 text-white flex justify-between">
//         <Link to="/" className="font-bold">ComplaintTracker</Link>
//         <div className="space-x-4">
//           {token ? (
//             <>
//               <Link to="/submit">Submit</Link>
//               <Link to="/complaints">My Complaints</Link>
//               <Link to="/profile">Profile</Link>
//               <button onClick={handleLogout}>Logout</button>
//             </>
//           ) : (
//             <>
//               <Link to="/login">Login</Link>
//               <Link to="/signup">Sign Up</Link>
//             </>
//           )}
//         </div>
//       </nav>
//       <main className="p-6">{children}</main>
//     </div>
//   );
// }

// src/components/Layout.jsx


// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import {
//   Home,
//   FileText,
//   PlusCircle,
//   LayoutDashboard,
//   User,
//   LogIn,
//   LogOut,
// } from "lucide-react";

// export default function Layout({ children }) {
//   const navigate = useNavigate();
//   const token = localStorage.getItem("token");

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     navigate("/login");
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-50">
//       {/* Header */}
//       <header className="bg-white shadow">
//         <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//           <Link to="/" className="flex items-center space-x-2 text-gray-800">
//             <FileText className="h-6 w-6" />
//             <span className="text-xl font-semibold">Complaint Tracker</span>
//           </Link>

//           {token ? (
//             <button
//               onClick={handleLogout}
//               className="flex items-center space-x-1 px-4 py-2 rounded bg-red-100 hover:bg-red-200 text-red-600"
//             >
//               <LogOut className="h-4 w-4" />
//               <span>Logout</span>
//             </button>
//           ) : (
//             <div className="space-x-2">
//               <Link
//                 to="/login"
//                 className="flex items-center space-x-1 px-4 py-2 rounded bg-gray-100 hover:bg-gray-200 text-gray-700"
//               >
//                 <LogIn className="h-4 w-4" />
//                 <span>Login</span>
//               </Link>
//               <Link
//                 to="/signup"
//                 className="flex items-center space-x-1 px-4 py-2 rounded bg-blue-100 hover:bg-blue-200 text-blue-700"
//               >
//                 <User className="h-4 w-4" />
//                 <span>Sign Up</span>
//               </Link>
//             </div>
//           )}
//         </div>

//         {/* Navigation */}
//         <nav className="bg-gray-50 border-t">
//           <div className="container mx-auto px-4 py-2">
//             <ul className="flex space-x-6 text-gray-600">
//               <li>
//                 <Link
//                   to="/"
//                   className="flex items-center space-x-1 hover:text-blue-600"
//                 >
//                   <Home className="h-4 w-4" />
//                   <span>Home</span>
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/complaints"
//                   className="flex items-center space-x-1 hover:text-blue-600"
//                 >
//                   <FileText className="h-4 w-4" />
//                   <span>List Complaints</span>
//                 </Link>
//               </li>
//               {token && (
//                 <>
//                   <li>
//                     <Link
//                       to="/submit"
//                       className="flex items-center space-x-1 hover:text-blue-600"
//                     >
//                       <PlusCircle className="h-4 w-4" />
//                       <span>Submit</span>
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/dashboard"
//                       className="flex items-center space-x-1 hover:text-blue-600"
//                     >
//                       <LayoutDashboard className="h-4 w-4" />
//                       <span>Dashboard</span>
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/profile"
//                       className="flex items-center space-x-1 hover:text-blue-600"
//                     >
//                       <User className="h-4 w-4" />
//                       <span>Profile</span>
//                     </Link>
//                   </li>
//                 </>
//               )}
//             </ul>
//           </div>
//         </nav>
//       </header>

//       {/* Main Content (renders your App.jsx children) */}
//       <main className="flex-grow container mx-auto px-4 py-8">{children}</main>

//       {/* Footer */}
//       <footer className="bg-gray-100 mt-auto">
//         <div className="container mx-auto px-4 py-6 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm">
//           <div>
//             <h3 className="font-semibold mb-2">About Us</h3>
//             <ul className="space-y-1">
//               <li>
//                 <Link to="/about" className="hover:text-blue-600 text-gray-600">
//                   About
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/contact"
//                   className="hover:text-blue-600 text-gray-600"
//                 >
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="font-semibold mb-2">Legal</h3>
//             <ul className="space-y-1">
//               <li>
//                 <Link
//                   to="/privacy"
//                   className="hover:text-blue-600 text-gray-600"
//                 >
//                   Privacy Policy
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/terms" className="hover:text-blue-600 text-gray-600">
//                   Terms of Service
//                 </Link>
//               </li>
//             </ul>
//           </div>
//           <div className="col-span-2 sm:col-span-1">
//             <h3 className="font-semibold mb-2">Feedback</h3>
//             <p className="text-gray-600">
//               We value your suggestions to improve the app!
//             </p>
//           </div>
//           <div className="col-span-2 sm:col-span-4 text-center text-gray-500 mt-4">
//             &copy; {new Date().getFullYear()} Complaint Tracker. All rights
//             reserved.
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }


// import React from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import {
//   Home,
//   FileText,
//   PlusCircle,
//   LayoutDashboard,
//   User,
//   LogIn,
//   LogOut,
// } from "lucide-react";

// export default function Layout({ children }) {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const token = localStorage.getItem("token");

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     navigate("/login");
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-50">
//       {/* Header */}
//       <header className="bg-white shadow">
//         <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//           <Link to="/" className="flex items-center space-x-2 text-gray-800">
//             <FileText className="h-6 w-6" />
//             <span className="text-xl font-semibold">Complaint Tracker</span>
//           </Link>

//           {token ? (
//             <button
//               onClick={handleLogout}
//               className="flex items-center space-x-1 px-4 py-2 rounded bg-red-100 hover:bg-red-200 text-red-600"
//             >
//               <LogOut className="h-4 w-4" />
//               <span>Logout</span>
//             </button>
//           ) : (
//             <div className="space-x-2">
//               <Link
//                 to="/login"
//                 className="flex items-center space-x-1 px-4 py-2 rounded bg-gray-100 hover:bg-gray-200 text-gray-700"
//               >
//                 <LogIn className="h-4 w-4" />
//                 <span>Login</span>
//               </Link>
//               <Link
//                 to="/signup"
//                 className="flex items-center space-x-1 px-4 py-2 rounded bg-blue-100 hover:bg-blue-200 text-blue-700"
//               >
//                 <User className="h-4 w-4" />
//                 <span>Sign Up</span>
//               </Link>
//             </div>
//           )}
//         </div>

//         {/* Navigation */}
//         <nav className="bg-gray-50 border-t">
//           <div className="container mx-auto px-4 py-2">
//             <ul className="flex space-x-6 text-gray-600">
//               <li>
//                 <Link
//                   to="/"
//                   className="flex items-center space-x-1 hover:text-blue-600"
//                 >
//                   <Home className="h-4 w-4" />
//                   <span>Home</span>
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/complaints"
//                   className="flex items-center space-x-1 hover:text-blue-600"
//                 >
//                   <FileText className="h-4 w-4" />
//                   <span>List Complaints</span>
//                 </Link>
//               </li>
//               {token && (
//                 <>
//                   <li>
//                     <Link
//                       to="/submit"
//                       className="flex items-center space-x-1 hover:text-blue-600"
//                     >
//                       <PlusCircle className="h-4 w-4" />
//                       <span>Submit</span>
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/dashboard"
//                       className="flex items-center space-x-1 hover:text-blue-600"
//                     >
//                       <LayoutDashboard className="h-4 w-4" />
//                       <span>Dashboard</span>
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/profile"
//                       className="flex items-center space-x-1 hover:text-blue-600"
//                     >
//                       <User className="h-4 w-4" />
//                       <span>Profile</span>
//                     </Link>
//                   </li>
//                 </>
//               )}
//             </ul>
//           </div>
//         </nav>
//       </header>

//       {/* Main Content */}
//       <main className="flex-grow container mx-auto px-4 py-8">
//         {children}
//       </main>

//       {/* Footer */}
//       <footer className="bg-gray-100 mt-auto">
//         <div className="container mx-auto px-4 py-6 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm">
//           <div>
//             <h3 className="font-semibold mb-2">About Us</h3>
//             <ul className="space-y-1">
//               <li>
//                 <Link to="/about" className="hover:text-blue-600 text-gray-600">
//                   About
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/contact" className="hover:text-blue-600 text-gray-600">
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="font-semibold mb-2">Legal</h3>
//             <ul className="space-y-1">
//               <li>
//                 <Link to="/privacy" className="hover:text-blue-600 text-gray-600">
//                   Privacy Policy
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/terms" className="hover:text-blue-600 text-gray-600">
//                   Terms of Service
//                 </Link>
//               </li>
//             </ul>
//           </div>
//           <div className="col-span-2 sm:col-span-1">
//             <h3 className="font-semibold mb-2">Feedback</h3>
//             <p className="text-gray-600">
//               We value your suggestions to improve the app!
//             </p>
//           </div>
//           <div className="col-span-2 sm:col-span-4 text-center text-gray-500 mt-4">
//             &copy; {new Date().getFullYear()} Complaint Tracker. All rights reserved.
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Home,
  FileText,
  PlusCircle,
  User,
  LogIn,
  LogOut,
} from "lucide-react";

export default function Layout({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 text-gray-800">
            <FileText className="h-6 w-6" />
            <span className="text-xl font-semibold">Complaint Tracker</span>
          </Link>

          {token ? (
            <button
              onClick={handleLogout}
              className="flex items-center space-x-1 px-4 py-2 rounded bg-red-100 hover:bg-red-200 text-red-600"
            >
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </button>
          ) : (
            <div className="space-x-2">
              <Link
                to="/login"
                className="flex items-center space-x-1 px-4 py-2 rounded bg-gray-100 hover:bg-gray-200 text-gray-700"
              >
                <LogIn className="h-4 w-4" />
                <span>Login</span>
              </Link>
              <Link
                to="/signup"
                className="flex items-center space-x-1 px-4 py-2 rounded bg-blue-100 hover:bg-blue-200 text-blue-700"
              >
                <User className="h-4 w-4" />
                <span>Sign Up</span>
              </Link>
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="bg-gray-50 border-t">
          <div className="container mx-auto px-4 py-2">
            <ul className="flex space-x-6 text-gray-600">
              <li>
                <Link
                  to="/"
                  className="flex items-center space-x-1 hover:text-blue-600"
                >
                  <Home className="h-4 w-4" />
                  <span>{token ? "Dashboard" : "Home"}</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/complaints"
                  className="flex items-center space-x-1 hover:text-blue-600"
                >
                  <FileText className="h-4 w-4" />
                  <span>List Complaints</span>
                </Link>
              </li>
              {token && (
                <>
                  <li>
                    <Link
                      to="/submit"
                      className="flex items-center space-x-1 hover:text-blue-600"
                    >
                      <PlusCircle className="h-4 w-4" />
                      <span>Submit</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/profile"
                      className="flex items-center space-x-1 hover:text-blue-600"
                    >
                      <User className="h-4 w-4" />
                      <span>Profile</span>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 mt-auto">
        <div className="container mx-auto px-4 py-6 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm">
          <div>
            <h3 className="font-semibold mb-2">About Us</h3>
            <ul className="space-y-1">
              <li>
                <Link to="/about" className="hover:text-blue-600 text-gray-600">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-600 text-gray-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Legal</h3>
            <ul className="space-y-1">
              <li>
                <Link to="/privacy" className="hover:text-blue-600 text-gray-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-blue-600 text-gray-600">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <h3 className="font-semibold mb-2">Feedback</h3>
            <p className="text-gray-600">
              We value your suggestions to improve the app!
            </p>
          </div>
          <div className="col-span-2 sm:col-span-4 text-center text-gray-500 mt-4">
            &copy; {new Date().getFullYear()} Complaint Tracker. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
