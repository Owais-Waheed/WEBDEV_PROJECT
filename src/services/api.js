const API_URL = 'http://localhost:5000/api';

export const api = {
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

  // Create complaint
  createComplaint: async (complaintData) => {
    const response = await fetch(`${API_URL}/complaints`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(complaintData),
    });
    return response.json();
  },

  // Add comment
  addComment: async (complaintId, commentData) => {
    const response = await fetch(`${API_URL}/complaints/${complaintId}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(commentData),
    });
    return response.json();
  },

  // Upvote complaint
  upvoteComplaint: async (complaintId) => {
    const response = await fetch(`${API_URL}/complaints/${complaintId}/upvote`, {
      method: 'POST',
    });
    return response.json();
  },
};