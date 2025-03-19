import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, MapPin, Clock, TrendingUp, AlertTriangle } from 'lucide-react';

const HomeLoggedIn = () => {
  const userComplaints = [
    {
      id: 1,
      title: "Broken Street Light",
      status: "In Progress",
      date: "2024-03-10",
      location: "East Side"
    }
  ];

  const notifications = [
    {
      id: 1,
      message: "Your complaint #123 has been updated to 'In Progress'",
      time: "2 hours ago"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Welcome Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Welcome back, John!</h1>
            <p className="text-gray-600 mt-1">Track your complaints and stay updated</p>
          </div>
          <Link
            to="/submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            <AlertTriangle className="h-5 w-5 mr-2" />
            New Complaint
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* My Complaints */}
        <div className="col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">My Complaints</h2>
            <div className="space-y-4">
              {userComplaints.map(complaint => (
                <div key={complaint.id} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                  <Link to={`/complaints/${complaint.id}`} className="block hover:bg-gray-50 rounded-lg p-4 -m-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">{complaint.title}</h3>
                        <div className="mt-1 flex items-center text-sm text-gray-500">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{complaint.location}</span>
                          <Clock className="h-4 w-4 ml-4 mr-1" />
                          <span>{new Date(complaint.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <span className={`px-2 py-1 text-sm font-medium rounded-full ${
                        complaint.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                        complaint.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {complaint.status}
                      </span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">Notifications</h2>
              <Bell className="h-5 w-5 text-gray-400" />
            </div>
            <div className="space-y-4">
              {notifications.map(notification => (
                <div key={notification.id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <p className="text-sm text-gray-700">{notification.message}</p>
                    <span className="text-xs text-gray-500">{notification.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white rounded-lg shadow-md p-6 mt-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Stats</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-600">Total Complaints</p>
                <p className="text-2xl font-bold text-blue-700">12</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-sm text-green-600">Resolved</p>
                <p className="text-2xl font-bold text-green-700">8</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLoggedIn;