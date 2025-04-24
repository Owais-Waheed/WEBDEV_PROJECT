// // import React from "react";
// // import { Link } from "react-router-dom";
// // import { AlertTriangle, ThumbsUp, MapPin } from "lucide-react";

// // const HomePage = () => {
// //   return (
// //     <div className="space-y-8">
// //       {/* Hero Section */}
// //       <section className="text-center py-12 bg-gray-50 rounded-lg">
// //         <h1 className="text-4xl font-bold mb-4">
// //           Report and Track Community Issues
// //         </h1>
// //         <p className="text-xl text-gray-600 mb-6">
// //           Help improve your community by reporting problems and tracking their
// //           resolution
// //         </p>
// //         <Link
// //           to="/submit"
// //           className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
// //         >
// //           <AlertTriangle className="h-5 w-5 mr-2" />
// //           Report an Issue
// //         </Link>
// //       </section>

// //       {/* Trending Issues */}
// //       <section>
// //         <h2 className="text-2xl font-semibold mb-4">Trending Issues</h2>
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //           {[1, 2, 3].map((i) => (
// //             <div key={i} className="p-4 border rounded-lg">
// //               <div className="flex justify-between items-start mb-2">
// //                 <span className="inline-block px-2 py-1 text-sm bg-yellow-100 text-yellow-800 rounded">
// //                   Roads
// //                 </span>
// //                 <button className="flex items-center text-gray-500 hover:text-blue-600">
// //                   <ThumbsUp className="h-4 w-4 mr-1" />
// //                   <span>{50 + i}</span>
// //                 </button>
// //               </div>
// //               <h3 className="font-semibold mb-2">Pothole on Main Street</h3>
// //               <div className="flex items-center text-gray-600 text-sm">
// //                 <MapPin className="h-4 w-4 mr-1" />
// //                 <span>Downtown Area</span>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </section>

// //       {/* Categories */}
// //       <section>
// //         <h2 className="text-2xl font-semibold mb-4">Browse by Category</h2>
// //         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
// //           {["Roads", "Sanitation", "Utilities", "Public Safety"].map(
// //             (category) => (
// //               <button
// //                 key={category}
// //                 className="p-4 text-center border rounded-lg hover:bg-gray-50"
// //               >
// //                 {category}
// //               </button>
// //             )
// //           )}
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // export default HomePage;

// import React from "react";
// import { Link } from "react-router-dom";
// import { AlertTriangle, ThumbsUp, MapPin } from "lucide-react";

// // Mock complaints for demonstration purposes
// const mockComplaints = [
//   {
//     id: 1,
//     title: "Pothole on Main Street",
//     category: "Roads",
//     location: "Downtown Area",
//     votes: 125,
//     description: "Large pothole causing traffic delays and potential vehicle damage.",
//   },
//   {
//     id: 2,
//     title: "Broken streetlight on Elm Street",
//     category: "Utilities",
//     location: "Elm Street",
//     votes: 45,
//     description: "Streetlight malfunction causing safety concerns.",
//   },
//   {
//     id: 3,
//     title: "Overflowing trash bins near Central Park",
//     category: "Sanitation",
//     location: "Central Park",
//     votes: 89,
//     description: "Trash bins need to be emptied regularly to avoid overflow.",
//   },
// ];

// const HomePage = () => {
//   return (
//     <div className="space-y-8">
//       {/* Hero Section */}
//       <section className="text-center py-12 bg-gray-50 rounded-lg">
//         <h1 className="text-4xl font-bold mb-4">
//           Report and Track Community Issues
//         </h1>
//         <p className="text-xl text-gray-600 mb-6">
//           Help improve your community by reporting problems and tracking their
//           resolution
//         </p>
//         <Link
//           to="/submit"
//           className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
//         >
//           <AlertTriangle className="h-5 w-5 mr-2" />
//           Report an Issue
//         </Link>
//       </section>

//       {/* Trending Issues */}
//       <section>
//         <h2 className="text-2xl font-semibold mb-4">Trending Issues</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {mockComplaints.map((complaint) => (
//             <div key={complaint.id} className="p-4 border rounded-lg">
//               <div className="flex justify-between items-start mb-2">
//                 <span className="inline-block px-2 py-1 text-sm bg-yellow-100 text-yellow-800 rounded">
//                   {complaint.category}
//                 </span>
//                 <button className="flex items-center text-gray-500 hover:text-blue-600">
//                   <ThumbsUp className="h-4 w-4 mr-1" />
//                   <span>{complaint.votes}</span>
//                 </button>
//               </div>
//               <h3 className="font-semibold mb-2">
//                 {/* Link to the complaint detail page */}
//                 <Link
//                   to={`/complaints/${complaint.id}`}
//                   className="font-semibold mb-2 hover:underline"
//                 >
//                   {complaint.title}
//                 </Link>
//               </h3>
//               <div className="flex items-center text-gray-600 text-sm">
//                 <MapPin className="h-4 w-4 mr-1" />
//                 <span>{complaint.location}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Categories */}
//       <section>
//         <h2 className="text-2xl font-semibold mb-4">Browse by Category</h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//           {["Roads", "Sanitation", "Utilities", "Public Safety"].map(
//             (category) => (
//               <button
//                 key={category}
//                 className="p-4 text-center border rounded-lg hover:bg-gray-50"
//               >
//                 {category}
//               </button>
//             )
//           )}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default HomePage;

import React from "react";
import { Link } from "react-router-dom";
import { AlertTriangle, ThumbsUp, MapPin } from "lucide-react";

// Mock complaints for demonstration purposes
const mockComplaints = [
  {
    id: 1,
    title: "Pothole on Main Street",
    category: "Roads",
    location: "Downtown Area",
    votes: 125,
    description:
      "Large pothole causing traffic delays and potential vehicle damage.",
  },
  {
    id: 2,
    title: "Broken streetlight on Elm Street",
    category: "Utilities",
    location: "Elm Street",
    votes: 45,
    description: "Streetlight malfunction causing safety concerns.",
  },
  {
    id: 3,
    title: "Overflowing trash bins near Central Park",
    category: "Sanitation",
    location: "Central Park",
    votes: 89,
    description: "Trash bins need to be emptied regularly to avoid overflow.",
  },
];

const HomePage = () => {
  return (
    <div className="space-y-6 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
      {/* Hero Section - Made responsive with padding adjustments */}
      <section className="text-center py-8 md:py-12 bg-gray-50 rounded-lg">
        <h1 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 px-2">
          Report and Track Community Issues
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-4 md:mb-6 px-4">
          Help improve your community by reporting problems and tracking their
          resolution
        </p>
        <Link
          to="/submit"
          className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 text-sm md:text-base"
        >
          <AlertTriangle className="h-4 w-4 md:h-5 md:w-5 mr-2" />
          Report an Issue
        </Link>
      </section>

      {/* Trending Issues - Responsive grid with different columns based on screen size */}
      <section>
        <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
          Trending Issues
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {mockComplaints.map((complaint) => (
            <div key={complaint.id} className="p-3 md:p-4 border rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <span className="inline-block px-2 py-1 text-xs md:text-sm bg-yellow-100 text-yellow-800 rounded">
                  {complaint.category}
                </span>
                <button className="flex items-center text-gray-500 hover:text-blue-600">
                  <ThumbsUp className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                  <span className="text-sm">{complaint.votes}</span>
                </button>
              </div>
              <h3 className="font-semibold text-base md:text-lg mb-1 md:mb-2">
                {/* Link to the complaint detail page */}
                <Link
                  to={`/complaints/${complaint.id}`}
                  className="font-semibold hover:underline"
                >
                  {complaint.title}
                </Link>
              </h3>
              <div className="flex items-center text-gray-600 text-xs md:text-sm">
                <MapPin className="h-3 w-3 md:h-4 md:w-4 mr-1 flex-shrink-0" />
                <span className="truncate">{complaint.location}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories - Responsive grid that adjusts columns on different screens */}
      <section>
        <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
          Browse by Category
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {["Roads", "Sanitation", "Utilities", "Public Safety"].map(
            (category) => (
              <button
                key={category}
                className="p-3 md:p-4 text-center border rounded-lg hover:bg-gray-50 text-sm md:text-base"
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
