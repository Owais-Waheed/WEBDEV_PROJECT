const API_URL = "/api";

const api = {
  // Get all complaints
  getComplaints: async () => {
    const response = await fetch(`${API_URL}/complaints`);
    return response.json();
  },

  getAllComplaints: async () => {
    const response = await fetch(`${API_URL}/complaints`);
    if (!response.ok) {
      throw new Error(`Failed to fetch complaints: ${response.statusText}`);
    }
    return await response.json();
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
      const formData = new FormData();
      formData.append("title", complaintData.title);
      formData.append("category", complaintData.category);
      formData.append("location", complaintData.location);
      formData.append("description", complaintData.description);
  
      // Append images (if any)
      complaintData.images.forEach((file) => {
        formData.append("images", file);
      });
  
      const response = await fetch(`${API_URL}/complaints`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`, // keep token
          // ❌ Do NOT manually set Content-Type for FormData
        },
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error(`Failed to create complaint: ${response.statusText}`);
      }
  
      return await response.json();
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

  // NEW METHODS - User profile functionality
  
  // Get user profile
  getUserProfile: async () => {
    try {
      const response = await fetch(`${API_URL}/user/profile`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (!response.ok) {
        throw new Error(`Failed to fetch profile: ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      console.error(error);
      return { error: error.message };
    }
  },

  // Update user profile
  updateUserProfile: async (profileData) => {
    try {
      const response = await fetch(`${API_URL}/user/profile`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(profileData),
      });
      if (!response.ok) {
        throw new Error(`Failed to update profile: ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      console.error(error);
      return { error: error.message };
    }
  },
};

export default api;