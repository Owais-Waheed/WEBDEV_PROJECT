// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Search, Filter, MapPin, ThumbsUp } from 'lucide-react';

// const ComplaintList = () => {
//   const [selectedCategory, setSelectedCategory] = useState('all');
//   const [selectedStatus, setSelectedStatus] = useState('all');

//   const complaints = [
//     {
//       id: 1,
//       title: "Pothole on Main Street",
//       category: "Roads",
//       location: "Downtown",
//       status: "Pending",
//       votes: 156,
//       date: "2024-03-10"
//     }
//   ];

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       {/* Search and Filters */}
//       <div className="mb-8">
//         <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-4 md:space-y-0">
//           <div className="flex-1">
//             <div className="relative">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
//               <input
//                 type="text"
//                 placeholder="Search complaints..."
//                 className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>
//           </div>

//           <div className="flex space-x-4">
//             <select
//               value={selectedCategory}
//               onChange={(e) => setSelectedCategory(e.target.value)}
//               className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
//             >
//               <option value="all">All Categories</option>
//               <option value="roads">Roads</option>
//               <option value="utilities">Utilities</option>
//               <option value="sanitation">Sanitation</option>
//             </select>

//             <select
//               value={selectedStatus}
//               onChange={(e) => setSelectedStatus(e.target.value)}
//               className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
//             >
//               <option value="all">All Status</option>
//               <option value="pending">Pending</option>
//               <option value="in-progress">In Progress</option>
//               <option value="resolved">Resolved</option>
//             </select>
//           </div>
//         </div>
//       </div>

//       {/* Complaints List */}
//       <div className="space-y-6">
//         {complaints.map(complaint => (
//           <div key={complaint.id} className="bg-white rounded-lg shadow-md p-6">
//             <div className="flex justify-between items-start">
//               <div>
//                 <Link to={`/complaints/${complaint.id}`} className="text-xl font-semibold text-gray-900 hover:text-blue-600">
//                   {complaint.title}
//                 </Link>
//                 <div className="flex items-center mt-2 text-gray-600">
//                   <MapPin className="h-4 w-4 mr-1" />
//                   <span>{complaint.location}</span>
//                 </div>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <button className="inline-flex items-center text-gray-600 hover:text-blue-600">
//                   <ThumbsUp className="h-5 w-5 mr-1" />
//                   <span>{complaint.votes}</span>
//                 </button>
//                 <span className={`px-2 py-1 text-sm font-medium rounded-full ${
//                   complaint.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
//                   complaint.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
//                   'bg-green-100 text-green-800'
//                 }`}>
//                   {complaint.status}
//                 </span>
//               </div>
//             </div>
//             <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
//               <span>Reported on {new Date(complaint.date).toLocaleDateString()}</span>
//               <span className="bg-gray-100 px-3 py-1 rounded-full">{complaint.category}</span>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Pagination */}
//       <div className="mt-8 flex justify-center">
//         <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
//           <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
//             Previous
//           </button>
//           <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
//             1
//           </button>
//           <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
//             2
//           </button>
//           <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
//             3
//           </button>
//           <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
//             Next
//           </button>
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default ComplaintList;

import React, { useState } from "react";
import {
  Search,
  Filter,
  MapPin,
  ThumbsUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const mockComplaints = [
  {
    id: 1,
    title: "Large pothole on Main Street",
    category: "Roads",
    location: "Main Street & 5th Avenue",
    status: "Pending",
    votes: 125,
    date: "2024-03-15",
    description: "Deep pothole causing vehicle damage and traffic slowdown",
  },
  {
    id: 2,
    title: "Broken streetlight",
    category: "Utilities",
    location: "Park Road",
    status: "In Progress",
    votes: 45,
    date: "2024-03-14",
    description: "Street light has been out for over a week",
  },
  {
    id: 3,
    title: "Overflowing trash bins",
    category: "Sanitation",
    location: "Central Park",
    status: "Resolved",
    votes: 89,
    date: "2024-03-13",
    description: "Public trash bins need immediate attention",
  },
  {
    id: 4,
    title: "Broken traffic signal",
    category: "Public Safety",
    location: "Oak Street & Main",
    status: "Pending",
    votes: 234,
    date: "2024-03-12",
    description: "Traffic light malfunction causing safety concerns",
  },
  {
    id: 5,
    title: "Water main leak",
    category: "Utilities",
    location: "Elm Street",
    status: "In Progress",
    votes: 67,
    date: "2024-03-11",
    description: "Water leaking onto sidewalk and street",
  },
];

const ListComplaintsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredComplaints = mockComplaints.filter((complaint) => {
    const matchesSearch =
      complaint.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      complaint.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || complaint.category === selectedCategory;
    const matchesStatus =
      selectedStatus === "All" || complaint.status === selectedStatus;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  const totalPages = Math.ceil(filteredComplaints.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedComplaints = filteredComplaints.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      case "In Progress":
        return "bg-blue-100 text-blue-800";
      case "Resolved":
        return "bg-green-100 text-green-800";
      default:
        return "";
    }
  };

  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <div className="bg-white p-4 rounded-lg shadow-sm space-y-4">
        <div className="flex items-center space-x-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search complaints..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="text-gray-400 h-5 w-5" />
            <select
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="All">All Categories</option>
              <option value="Roads">Roads</option>
              <option value="Sanitation">Sanitation</option>
              <option value="Utilities">Utilities</option>
              <option value="Public Safety">Public Safety</option>
            </select>
            <select
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              <option value="All">All Statuses</option>
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Resolved">Resolved</option>
            </select>
          </div>
        </div>
      </div>

      {/* Complaints List */}
      <div className="space-y-4">
        {displayedComplaints.map((complaint) => (
          <div
            key={complaint.id}
            className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span
                    className={`px-2 py-1 rounded-full text-sm font-medium ${getStatusColor(
                      complaint.status
                    )}`}
                  >
                    {complaint.status}
                  </span>
                  <span className="text-sm text-gray-500">
                    {complaint.category}
                  </span>
                </div>
                <h3 className="font-semibold text-lg">{complaint.title}</h3>
                <p className="text-gray-600 text-sm">{complaint.description}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {complaint.location}
                  </div>
                  <div>{complaint.date}</div>
                </div>
              </div>
              <button className="flex items-center space-x-1 px-3 py-1 rounded-lg bg-gray-50 hover:bg-gray-100">
                <ThumbsUp className="h-4 w-4" />
                <span>{complaint.votes}</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-4 py-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:hover:bg-transparent"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <span className="text-sm">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:hover:bg-transparent"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ListComplaintsPage;
