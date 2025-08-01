

import React, { useState } from "react";
import { MapPin, Upload, Send, AlertCircle } from "lucide-react";
import api from "../services/api.js"; // Assuming your API functions are in the 'api.js' file

const SubmitComplaintPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    location: "",
    description: "",
    images: [],
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files || []);
    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ...files].slice(0, 3),
    }));
  };

  const removeImage = (index) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.category) newErrors.category = "Category is required";
    if (!formData.location.trim()) newErrors.location = "Location is required";
    if (!formData.description.trim())
      newErrors.description = "Description is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const complaintData = {
        title: formData.title,
        category: formData.category,
        location: formData.location,
        description: formData.description,
        images: formData.images,
      };

      const result = await api.createComplaint(complaintData); // Call API function

      if (result.error) {
        alert("Error submitting complaint: " + result.error);
      } else {
        alert("Complaint submitted successfully!");
        // Reset form after successful submission
        setFormData({
          title: "",
          category: "",
          location: "",
          description: "",
          images: [],
        });
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while submitting your complaint.");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
      <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
        <div className="mb-4 sm:mb-6">
          <h1 className="text-xl sm:text-2xl font-bold mb-2">
            Submit a Complaint
          </h1>
          <p className="text-sm sm:text-base text-gray-600">
            Help us improve our community by reporting issues that need
            attention.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          {/* Title */}
          <div>
            <label
              htmlFor="title"
              className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className={`w-full px-3 sm:px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 text-sm ${
                errors.title ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Brief title describing the issue"
            />
            {errors.title && (
              <p className="mt-1 text-xs sm:text-sm text-red-500 flex items-center">
                <AlertCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                {errors.title}
              </p>
            )}
          </div>

          {/* Category */}
          <div>
            <label
              htmlFor="category"
              className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
            >
              Category
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className={`w-full px-3 sm:px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 text-sm ${
                errors.category ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="">Select a category</option>
              <option value="Roads">Roads</option>
              <option value="Sanitation">Sanitation</option>
              <option value="Utilities">Utilities</option>
              <option value="Public Safety">Public Safety</option>
              <option value="Infrastructure">Infrastructure</option>
              <option value="Other">Other</option>
            </select>
            {errors.category && (
              <p className="mt-1 text-xs sm:text-sm text-red-500 flex items-center">
                <AlertCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                {errors.category}
              </p>
            )}
          </div>

          {/* Location */}
          <div>
            <label
              htmlFor="location"
              className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
            >
              Location
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 sm:h-5 sm:w-5" />
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className={`w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 text-sm ${
                  errors.location ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter the location of the issue"
              />
            </div>
            {errors.location && (
              <p className="mt-1 text-xs sm:text-sm text-red-500 flex items-center">
                <AlertCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                {errors.location}
              </p>
            )}
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows={4}
              className={`w-full px-3 sm:px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 text-sm ${
                errors.description ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Provide detailed information about the issue"
            />
            {errors.description && (
              <p className="mt-1 text-xs sm:text-sm text-red-500 flex items-center">
                <AlertCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                {errors.description}
              </p>
            )}
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
              Images (Optional)
            </label>
            <div className="space-y-2 sm:space-y-4">
              {formData.images.length < 3 && (
                <div className="relative">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="image-upload"
                    multiple
                  />
                  <label
                    htmlFor="image-upload"
                    className="flex items-center justify-center px-3 sm:px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 text-sm"
                  >
                    <Upload className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-gray-400" />
                    <span className="text-gray-600">Upload images (max 3)</span>
                  </label>
                </div>
              )}
              {formData.images.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {formData.images.map((image, index) => (
                    <div
                      key={index}
                      className="relative bg-gray-100 rounded-lg p-2"
                    >
                      <div className="text-xs sm:text-sm text-gray-600 max-w-xs truncate">
                        {image.name}
                      </div>
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                      >
                        <span className="sr-only">Remove</span>×
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 text-sm sm:text-base"
          >
            {isSubmitting ? (
              <span>Submitting...</span>
            ) : (
              <>
                <Send className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                Submit Complaint
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubmitComplaintPage;
