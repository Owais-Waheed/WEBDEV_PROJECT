// import React from "react";
// import {
//   BarChart3,
//   AlertTriangle,
//   CheckCircle,
//   Clock,
//   Activity,
//   Filter,
//   ChevronRight,
//   MapPin,
//   ThumbsUp,
// } from "lucide-react";

// // Mock data for demonstration
// const stats = [
//   {
//     label: "Total Complaints",
//     value: "24",
//     icon: AlertTriangle,
//     color: "bg-blue-50 text-blue-600",
//   },
//   {
//     label: "Resolved",
//     value: "16",
//     icon: CheckCircle,
//     color: "bg-green-50 text-green-600",
//   },
//   {
//     label: "In Progress",
//     value: "5",
//     icon: Clock,
//     color: "bg-yellow-50 text-yellow-600",
//   },
//   {
//     label: "Pending",
//     value: "3",
//     icon: Activity,
//     color: "bg-red-50 text-red-600",
//   },
// ];

// const recentComplaints = [
//   {
//     id: 1,
//     title: "Broken streetlight on Oak Avenue",
//     status: "In Progress",
//     category: "Utilities",
//     location: "Oak Avenue & 5th Street",
//     votes: 45,
//     date: "2024-03-15",
//   },
//   {
//     id: 2,
//     title: "Pothole needs repair",
//     status: "Pending",
//     category: "Roads",
//     location: "Main Street",
//     votes: 32,
//     date: "2024-03-14",
//   },
//   {
//     id: 3,
//     title: "Garbage collection delayed",
//     status: "Resolved",
//     category: "Sanitation",
//     location: "Pine Street",
//     votes: 28,
//     date: "2024-03-13",
//   },
// ];

// const getStatusColor = (status) => {
//   switch (status) {
//     case "Pending":
//       return "bg-yellow-100 text-yellow-800";
//     case "In Progress":
//       return "bg-blue-100 text-blue-800";
//     case "Resolved":
//       return "bg-green-100 text-green-800";
//     default:
//       return "bg-gray-100 text-gray-800";
//   }
// };

// const DashboardPage = () => {
//   return (
//     <div className="space-y-6">
//       {/* Welcome Section */}
//       <div className="flex justify-between items-center">
//         <div>
//           <h1 className="text-2xl font-bold">Dashboard</h1>
//           <p className="text-gray-600">Welcome back, John Doe</p>
//         </div>
//         <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
//           <Filter className="h-4 w-4 mr-2" />
//           Filter View
//         </button>
//       </div>

//       {/* Statistics Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//         {stats.map((stat) => {
//           const Icon = stat.icon;
//           return (
//             <div key={stat.label} className="bg-white p-6 rounded-lg shadow-sm">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-gray-500 text-sm">{stat.label}</p>
//                   <p className="text-2xl font-semibold mt-1">{stat.value}</p>
//                 </div>
//                 <div className={`p-3 rounded-full ${stat.color}`}>
//                   <Icon className="h-6 w-6" />
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* Charts Section */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         {/* Complaints Over Time */}
//         <div className="bg-white p-6 rounded-lg shadow-sm">
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="text-lg font-semibold">Complaints Over Time</h2>
//             <BarChart3 className="h-5 w-5 text-gray-400" />
//           </div>
//           <div className="h-64 flex items-center justify-center border-2 border-dashed border-gray-200 rounded-lg">
//             <p className="text-gray-500">Chart will be implemented here</p>
//           </div>
//         </div>

//         {/* Category Distribution */}
//         <div className="bg-white p-6 rounded-lg shadow-sm">
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="text-lg font-semibold">Category Distribution</h2>
//             <BarChart3 className="h-5 w-5 text-gray-400" />
//           </div>
//           <div className="h-64 flex items-center justify-center border-2 border-dashed border-gray-200 rounded-lg">
//             <p className="text-gray-500">Chart will be implemented here</p>
//           </div>
//         </div>
//       </div>

//       {/* Recent Complaints */}
//       <div className="bg-white rounded-lg shadow-sm">
//         <div className="p-6 border-b">
//           <div className="flex items-center justify-between">
//             <h2 className="text-lg font-semibold">Recent Complaints</h2>
//             <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center">
//               View All
//               <ChevronRight className="h-4 w-4 ml-1" />
//             </button>
//           </div>
//         </div>
//         <div className="divide-y">
//           {recentComplaints.map((complaint) => (
//             <div key={complaint.id} className="p-6 hover:bg-gray-50">
//               <div className="flex justify-between items-start">
//                 <div className="space-y-2">
//                   <div className="flex items-center space-x-2">
//                     <span
//                       className={`px-2 py-1 rounded-full text-sm font-medium ${getStatusColor(
//                         complaint.status
//                       )}`}
//                     >
//                       {complaint.status}
//                     </span>
//                     <span className="text-sm text-gray-500">
//                       {complaint.category}
//                     </span>
//                   </div>
//                   <h3 className="font-medium">{complaint.title}</h3>
//                   <div className="flex items-center space-x-4 text-sm text-gray-500">
//                     <div className="flex items-center">
//                       <MapPin className="h-4 w-4 mr-1" />
//                       {complaint.location}
//                     </div>
//                     <div>{complaint.date}</div>
//                   </div>
//                 </div>
//                 <button className="flex items-center space-x-1 px-3 py-1 rounded-lg bg-gray-50 hover:bg-gray-100">
//                   <ThumbsUp className="h-4 w-4" />
//                   <span>{complaint.votes}</span>
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardPage;
import React, { useEffect, useState } from "react";
import {
  BarChart3,
  AlertTriangle,
  CheckCircle,
  Clock,
  Activity,
  Filter,
  ChevronRight,
  MapPin,
  ThumbsUp,
} from "lucide-react";
import api from "../services/api";

const stats = [
  {
    label: "Total Complaints",
    key: "total",
    icon: AlertTriangle,
    color: "bg-blue-50 text-blue-600",
  },
  {
    label: "Resolved",
    key: "resolved",
    icon: CheckCircle,
    color: "bg-green-50 text-green-600",
  },
  {
    label: "In Progress",
    key: "inProgress",
    icon: Clock,
    color: "bg-yellow-50 text-yellow-600",
  },
  {
    label: "Pending",
    key: "pending",
    icon: Activity,
    color: "bg-red-50 text-red-600",
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case "Pending":
      return "bg-yellow-100 text-yellow-800";
    case "In Progress":
      return "bg-blue-100 text-blue-800";
    case "Resolved":
      return "bg-green-100 text-green-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const DashboardPage = () => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const fetchMyComplaints = async () => {
      const data = await api.getMyComplaints();
      setComplaints(data || []);
    };

    fetchMyComplaints();
  }, []);

  const calculateStats = () => {
    const total = complaints.length;
    const resolved = complaints.filter((c) => c.status === "Resolved").length;
    const inProgress = complaints.filter((c) => c.status === "In Progress").length;
    const pending = complaints.filter((c) => c.status === "Pending").length;

    return { total, resolved, inProgress, pending };
  };

  const counts = calculateStats();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-gray-600">Welcome back!</p>
        </div>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <Filter className="h-4 w-4 mr-2" />
          Filter View
        </button>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">{stat.label}</p>
                  <p className="text-2xl font-semibold mt-1">
                    {counts[stat.key]}
                  </p>
                </div>
                <div className={`p-3 rounded-full ${stat.color}`}>
                  <Icon className="h-6 w-6" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Complaints Over Time</h2>
            <BarChart3 className="h-5 w-5 text-gray-400" />
          </div>
          <div className="h-64 flex items-center justify-center border-2 border-dashed border-gray-200 rounded-lg">
            <p className="text-gray-500">Chart will be implemented here</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Category Distribution</h2>
            <BarChart3 className="h-5 w-5 text-gray-400" />
          </div>
          <div className="h-64 flex items-center justify-center border-2 border-dashed border-gray-200 rounded-lg">
            <p className="text-gray-500">Chart will be implemented here</p>
          </div>
        </div>
      </div>

      {/* Recent Complaints */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6 border-b">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">My Complaints</h2>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center">
              View All
              <ChevronRight className="h-4 w-4 ml-1" />
            </button>
          </div>
        </div>
        <div className="divide-y">
          {complaints.length > 0 ? (
            complaints.map((complaint) => (
              <div key={complaint._id} className="p-6 hover:bg-gray-50">
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
                    <h3 className="font-medium">{complaint.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {complaint.location}
                      </div>
                      <div>{new Date(complaint.createdAt).toLocaleDateString()}</div>
                    </div>
                  </div>
                  <button className="flex items-center space-x-1 px-3 py-1 rounded-lg bg-gray-50 hover:bg-gray-100">
                    <ThumbsUp className="h-4 w-4" />
                    <span>{complaint.votes}</span>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="p-6 text-gray-500">No complaints submitted yet.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;