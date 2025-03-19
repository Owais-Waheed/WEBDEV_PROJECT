// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { MapPin, Calendar, MessageSquare, ThumbsUp, Image as ImageIcon } from 'lucide-react';

// const ComplaintDetail = () => {
//   const { id } = useParams();

//   const complaint = {
//     id: 1,
//     title: "Pothole on Main Street",
//     description: "Large pothole causing traffic delays and potential vehicle damage. Located near the intersection with Oak Avenue.",
//     category: "Roads",
//     location: "Downtown",
//     status: "In Progress",
//     votes: 156,
//     date: "2024-03-10",
//     images: ["https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&q=80&w=800"],
//     comments: [
//       {
//         id: 1,
//         user: "John Doe",
//         content: "This needs immediate attention. I've seen multiple cars damaged.",
//         date: "2024-03-11"
//       }
//     ]
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       <div className="bg-white rounded-lg shadow-md">
//         {/* Header */}
//         <div className="p-6 border-b border-gray-200">
//           <div className="flex justify-between items-start">
//             <div>
//               <h1 className="text-2xl font-bold text-gray-900">{complaint.title}</h1>
//               <div className="mt-2 flex items-center space-x-4 text-gray-600">
//                 <div className="flex items-center">
//                   <MapPin className="h-4 w-4 mr-1" />
//                   <span>{complaint.location}</span>
//                 </div>
//                 <div className="flex items-center">
//                   <Calendar className="h-4 w-4 mr-1" />
//                   <span>{new Date(complaint.date).toLocaleDateString()}</span>
//                 </div>
//               </div>
//             </div>
//             <div className="flex items-center space-x-4">
//               <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
//                 <ThumbsUp className="h-4 w-4 mr-2" />
//                 Upvote ({complaint.votes})
//               </button>
//               <span className={`px-3 py-1 text-sm font-medium rounded-full ${
//                 complaint.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
//                 complaint.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
//                 'bg-green-100 text-green-800'
//               }`}>
//                 {complaint.status}
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Content */}
//         <div className="p-6">
//           <div className="prose max-w-none">
//             <p className="text-gray-700">{complaint.description}</p>
//           </div>

//           {/* Images */}
//           <div className="mt-6">
//             <h2 className="text-lg font-semibold text-gray-900 mb-4">
//               <ImageIcon className="h-5 w-5 inline mr-2" />
//               Attached Images
//             </h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               {complaint.images.map((image, index) => (
//                 <img
//                   key={index}
//                   src={image}
//                   alt={`Complaint image ${index + 1}`}
//                   className="rounded-lg object-cover w-full h-64"
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Comments */}
//           <div className="mt-8">
//             <h2 className="text-lg font-semibold text-gray-900 mb-4">
//               <MessageSquare className="h-5 w-5 inline mr-2" />
//               Comments
//             </h2>
            
//             {/* Comment Form */}
//             <div className="mb-6">
//               <textarea
//                 rows={3}
//                 placeholder="Add a comment..."
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//               />
//               <div className="mt-2">
//                 <button className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
//                   Post Comment
//                 </button>
//               </div>
//             </div>

//             {/* Comments List */}
//             <div className="space-y-4">
//               {complaint.comments.map(comment => (
//                 <div key={comment.id} className="bg-gray-50 rounded-lg p-4">
//                   <div className="flex justify-between items-start">
//                     <span className="font-medium text-gray-900">{comment.user}</span>
//                     <span className="text-sm text-gray-500">
//                       {new Date(comment.date).toLocaleDateString()}
//                     </span>
//                   </div>
//                   <p className="mt-2 text-gray-700">{comment.content}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ComplaintDetail;


import React from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Calendar, MessageSquare, ThumbsUp, Image as ImageIcon } from 'lucide-react';

const ComplaintDetail = () => {
  const { id } = useParams();

  // Mock complaint data
  const complaint = {
    id: 1,
    title: "Pothole on Main Street",
    description: "Large pothole causing traffic delays and potential vehicle damage. Located near the intersection with Oak Avenue.",
    category: "Roads",
    location: "Downtown",
    status: "In Progress",
    votes: 156,
    date: "2024-03-10",
    images: ["https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&q=80&w=800"],
    comments: [
      {
        id: 1,
        user: "John Doe",
        content: "This needs immediate attention. I've seen multiple cars damaged.",
        date: "2024-03-11"
      }
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-md">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{complaint.title}</h1>
              <div className="mt-2 flex items-center space-x-4 text-gray-600">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{complaint.location}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{new Date(complaint.date).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                <ThumbsUp className="h-4 w-4 mr-2" />
                Upvote ({complaint.votes})
              </button>
              <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                complaint.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                complaint.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                'bg-green-100 text-green-800'
              }`}>
                {complaint.status}
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="prose max-w-none">
            <p className="text-gray-700">{complaint.description}</p>
          </div>

          {/* Images */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              <ImageIcon className="h-5 w-5 inline mr-2" />
              Attached Images
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {complaint.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Complaint image ${index + 1}`}
                  className="rounded-lg object-cover w-full h-64"
                />
              ))}
            </div>
          </div>

          {/* Comments */}
          <div className="mt-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              <MessageSquare className="h-5 w-5 inline mr-2" />
              Comments
            </h2>
            
            {/* Comment Form */}
            <div className="mb-6">
              <textarea
                rows={3}
                placeholder="Add a comment..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
              <div className="mt-2">
                <button className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                  Post Comment
                </button>
              </div>
            </div>

            {/* Comments List */}
            <div className="space-y-4">
              {complaint.comments.map(comment => (
                <div key={comment.id} className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <span className="font-medium text-gray-900">{comment.user}</span>
                    <span className="text-sm text-gray-500">
                      {new Date(comment.date).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="mt-2 text-gray-700">{comment.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplaintDetail;
