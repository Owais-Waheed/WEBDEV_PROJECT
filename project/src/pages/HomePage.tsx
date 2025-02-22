import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, ThumbsUp, MapPin } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="text-center py-12 bg-gray-50 rounded-lg">
        <h1 className="text-4xl font-bold mb-4">Report and Track Community Issues</h1>
        <p className="text-xl text-gray-600 mb-6">Help improve your community by reporting problems and tracking their resolution</p>
        <Link
          to="/submit"
          className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
        >
          <AlertTriangle className="h-5 w-5 mr-2" />
          Report an Issue
        </Link>
      </section>

      {/* Trending Issues */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Trending Issues</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-4 border rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <span className="inline-block px-2 py-1 text-sm bg-yellow-100 text-yellow-800 rounded">
                  Roads
                </span>
                <button className="flex items-center text-gray-500 hover:text-blue-600">
                  <ThumbsUp className="h-4 w-4 mr-1" />
                  <span>{50 + i}</span>
                </button>
              </div>
              <h3 className="font-semibold mb-2">Pothole on Main Street</h3>
              <div className="flex items-center text-gray-600 text-sm">
                <MapPin className="h-4 w-4 mr-1" />
                <span>Downtown Area</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Roads', 'Sanitation', 'Utilities', 'Public Safety'].map((category) => (
            <button
              key={category}
              className="p-4 text-center border rounded-lg hover:bg-gray-50"
            >
              {category}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;