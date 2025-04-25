

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AlertTriangle, ThumbsUp, MapPin } from "lucide-react";
// import { getAllComplaints } from "../services/api"; // <-- Make sure this is defined
import api from "../services/api"; // ✅ correct


const HomePage = () => {
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const data = await api.getAllComplaints(); // ✅ correct

        setComplaints(data);
      } catch (error) {
        console.error("Error fetching complaints:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchComplaints();
  }, []);

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="text-center py-12 bg-gray-50 rounded-lg">
        <h1 className="text-4xl font-bold mb-4">
          Report and Track Community Issues
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          Help improve your community by reporting problems and tracking their resolution
        </p>
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
        {loading ? (
          <p>Loading complaints...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complaints.slice(0, 6).map((complaint) => (
              <div key={complaint._id} className="p-4 border rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <span className="inline-block px-2 py-1 text-sm bg-yellow-100 text-yellow-800 rounded">
                    {complaint.category}
                  </span>
                  <button className="flex items-center text-gray-500 hover:text-blue-600">
                    <ThumbsUp className="h-4 w-4 mr-1" />
                    <span>{complaint.votes || 0}</span>
                  </button>
                </div>
                <h3 className="font-semibold mb-2">
                  <Link
                    to={`/complaints/${complaint._id}`}
                    className="hover:underline"
                  >
                    {complaint.title}
                  </Link>
                </h3>
                <div className="flex items-center text-gray-600 text-sm">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{complaint.location}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Categories */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Roads", "Sanitation", "Utilities", "Public Safety"].map(
            (category) => (
              <button
                key={category}
                className="p-4 text-center border rounded-lg hover:bg-gray-50"
              >
                {category}
              </button>
            )
          )}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
