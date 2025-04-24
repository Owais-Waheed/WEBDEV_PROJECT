// const API_URL = 'http://localhost:5000/api';

// export const api = {
//   // Get all complaints
//   getComplaints: async () => {
//     const response = await fetch(`${API_URL}/complaints`);
//     return response.json();
//   },

//   // Get single complaint
//   getComplaint: async (id) => {
//     const response = await fetch(`${API_URL}/complaints/${id}`);
//     return response.json();
//   },

//   // Create complaint
//   createComplaint: async (complaintData) => {
//     const response = await fetch(`${API_URL}/complaints`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(complaintData),
//     });
//     return response.json();
//   },

//   // Add comment
//   addComment: async (complaintId, commentData) => {
//     const response = await fetch(`${API_URL}/complaints/${complaintId}/comments`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(commentData),
//     });
//     return response.json();
//   },

//   // Upvote complaint
//   upvoteComplaint: async (complaintId) => {
//     const response = await fetch(`${API_URL}/complaints/${complaintId}/upvote`, {
//       method: 'POST',
//     });
//     return response.json();
//   },
// };

const API_URL = "/api";

const api = {
  // Get all complaints
  getComplaints: async () => {
    const response = await fetch(`${API_URL}/complaints`);
    return response.json();
  },

  // Get single complaint
  getComplaint: async (id) => {
    const response = await fetch(`${API_URL}/complaints/${id}`);
    return response.json();
  },

  // Get complaints of the logged-in user
  getMyComplaints: async () => {
    const response = await fetch(`${API_URL}/complaints/my`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.json();
  },

  createComplaint: async (complaintData) => {
    try {
      const response = await fetch(`${API_URL}/complaints`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`, // The token
        },
        body: JSON.stringify(complaintData), // Sending the complaint data
      });
      if (!response.ok) {
        throw new Error(`Failed to create complaint: ${response.statusText}`);
      }
      return await response.json(); // Returns the created complaint data
    } catch (error) {
      console.error(error);
      return { error: error.message };
    }
  },

  // Add comment to complaint (requires auth)
  addComment: async (complaintId, commentData) => {
    const response = await fetch(
      `${API_URL}/complaints/${complaintId}/comments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(commentData),
      }
    );
    return response.json();
  },

  // Upvote a complaint (requires auth)
  upvoteComplaint: async (complaintId) => {
    const response = await fetch(
      `${API_URL}/complaints/${complaintId}/upvote`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return response.json();
  },

  getAllComplaints: async () => {
    const response = await fetch(`${API_URL}/complaints`);
    if (!response.ok) {
      throw new Error(`Failed to fetch complaints: ${response.statusText}`);
    }
    return await response.json();
  },
  
  
};

export default api;
