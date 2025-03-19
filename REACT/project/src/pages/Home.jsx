import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, MapPin, AlertTriangle } from 'lucide-react';

const Home = () => {
  const trendingComplaints = [
    {
      id: 1,
      title: "Pothole on Main Street",
      category: "Roads",
      location: "Downtown",
      votes: 156
    },
    {
      id: 2,
      title: "Irregular Water Supply",
      category: "Utilities",
      location: "North District",
      votes: 89
    },
    {
      id: 3,
      title: "Street Light Malfunction",
      category: "Infrastructure",
      location: "West End",
      votes: 67
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Your Voice Matters
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Report and track community issues in real-time
        </p>
        <Link
          to="/submit"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
        >
          <AlertTriangle className="h-5 w-5 mr-2" />
          Report an Issue
        </Link>
      </div>

      {/* Trending Issues */}
      <div className="mb-16">
        <div className="flex items-center mb-6">
          <TrendingUp className="h-6 w-6 text-blue-600 mr-2" />
          <h2 className="text-2xl font-bold text-gray-900">Trending Issues</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trendingComplaints.map(complaint => (
            <div key={complaint.id} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-2">{complaint.title}</h3>
              <div className="flex items-center text-gray-600 mb-2">
                <MapPin className="h-4 w-4 mr-1" />
                {complaint.location}
              </div>
              <div className="flex justify-between items-center">
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
                  {complaint.category}
                </span>
                <span className="text-gray-600">
                  {complaint.votes} votes
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Roads', 'Utilities', 'Sanitation', 'Infrastructure'].map(category => (
            <div key={category} className="bg-white rounded-lg shadow-md p-6 text-center hover:bg-gray-50 cursor-pointer">
              <h3 className="text-lg font-medium text-gray-900">{category}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;