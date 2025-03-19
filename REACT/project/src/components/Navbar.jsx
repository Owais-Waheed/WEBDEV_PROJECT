import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, LogIn, Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <AlertCircle className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">ComplaintTracker</span>
            </Link>
          </div>
          
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link to="/complaints" className="text-gray-700 hover:text-blue-600">
              Browse Complaints
            </Link>
            <Link to="/submit" className="text-gray-700 hover:text-blue-600">
              Submit Complaint
            </Link>
            <Link to="/dashboard" className="text-gray-700 hover:text-blue-600">
              Dashboard
            </Link>
            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
              <LogIn className="h-4 w-4 mr-2" />
              Login
            </button>
          </div>
          
          <div className="sm:hidden flex items-center">
            <button className="p-2">
              <Menu className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;