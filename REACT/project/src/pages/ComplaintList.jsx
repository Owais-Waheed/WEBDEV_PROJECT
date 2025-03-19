import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, MapPin, ThumbsUp } from 'lucide-react';

const ComplaintList = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const complaints = [
    {
      id: 1,
      title: "Pothole on Main Street",
      category: "Roads",
      location: "Downtown",
      status: "Pending",
      votes: 156,
      date: "2024-03-10"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Search and Filters */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-4 md:space-y-0">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search complaints..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          
          <div className="flex space-x-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
            >
              <option value="all">All Categories</option>
              <option value="roads">Roads</option>
              <option value="utilities">Utilities</option>
              <option value="sanitation">Sanitation</option>
            </select>
            
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="resolved">Resolved</option>
            </select>
          </div>
        </div>
      </div>

      {/* Complaints List */}
      <div className="space-y-6">
        {complaints.map(complaint => (
          <div key={complaint.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start">
              <div>
                <Link to={`/complaints/${complaint.id}`} className="text-xl font-semibold text-gray-900 hover:text-blue-600">
                  {complaint.title}
                </Link>
                <div className="flex items-center mt-2 text-gray-600">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{complaint.location}</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button className="inline-flex items-center text-gray-600 hover:text-blue-600">
                  <ThumbsUp className="h-5 w-5 mr-1" />
                  <span>{complaint.votes}</span>
                </button>
                <span className={`px-2 py-1 text-sm font-medium rounded-full ${
                  complaint.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                  complaint.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {complaint.status}
                </span>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
              <span>Reported on {new Date(complaint.date).toLocaleDateString()}</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">{complaint.category}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-8 flex justify-center">
        <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
          <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
            Previous
          </button>
          <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
            1
          </button>
          <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
            2
          </button>
          <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
            3
          </button>
          <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
            Next
          </button>
        </nav>
      </div>
    </div>
  );
};

export default ComplaintList;