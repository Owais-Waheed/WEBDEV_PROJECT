import React from "react";
import { Link, Outlet } from "react-router-dom";
import {
  Home,
  FileText,
  PlusCircle,
  LayoutDashboard,
  User,
  LogIn,
} from "lucide-react";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2">
              <FileText className="h-6 w-6" />
              <span className="text-xl font-semibold">Complaint Tracker</span>
            </Link>
            <button className="flex items-center space-x-1 px-4 py-2 rounded bg-gray-100">
              <LogIn className="h-4 w-4" />
              <span>Logout</span>
            </button>
          </div>

          {/* Navigation */}
          <nav className="mt-4">
            <ul className="flex space-x-6">
              <li>
                <Link
                  to="/"
                  className="flex items-center space-x-1 text-gray-600 hover:text-gray-900"
                >
                  <Home className="h-4 w-4" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/complaints"
                  className="flex items-center space-x-1 text-gray-600 hover:text-gray-900"
                >
                  <FileText className="h-4 w-4" />
                  <span>List Complaints</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/submit"
                  className="flex items-center space-x-1 text-gray-600 hover:text-gray-900"
                >
                  <PlusCircle className="h-4 w-4" />
                  <span>Submit Complaint</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard"
                  className="flex items-center space-x-1 text-gray-600 hover:text-gray-900"
                >
                  <LayoutDashboard className="h-4 w-4" />
                  <span>Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/profile"
                  className="flex items-center space-x-1 text-gray-600 hover:text-gray-900"
                >
                  <User className="h-4 w-4" />
                  <span>Profile</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet /> {/* This renders the child components (pages) */}
      </main>

      {/* Footer */}
      <footer className="bg-gray-100">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-2">About Us</h3>
              <ul className="space-y-1">
                <li>
                  <Link
                    to="/about"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Legal</h3>
              <ul className="space-y-1">
                <li>
                  <Link
                    to="/privacy"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
