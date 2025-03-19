// import React, { useState } from 'react';
// import { MapPin, Upload, AlertTriangle } from 'lucide-react';

// const SubmitComplaint = () => {
//   const [formData, setFormData] = useState({
//     title: '',
//     category: '',
//     location: '',
//     description: ''
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission
//   };

//   return (
//     <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       <div className="bg-white rounded-lg shadow-md p-6">
//         <div className="text-center mb-8">
//           <AlertTriangle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
//           <h1 className="text-2xl font-bold text-gray-900">Submit a Complaint</h1>
//           <p className="text-gray-600 mt-2">
//             Help us improve our community by reporting issues
//           </p>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Title */}
//           <div>
//             <label htmlFor="title" className="block text-sm font-medium text-gray-700">
//               Title
//             </label>
//             <input
//               type="text"
//               id="title"
//               value={formData.title}
//               onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//               placeholder="Brief description of the issue"
//               required
//             />
//           </div>

//           {/* Category */}
//           <div>
//             <label htmlFor="category" className="block text-sm font-medium text-gray-700">
//               Category
//             </label>
//             <select
//               id="category"
//               value={formData.category}
//               onChange={(e) => setFormData({ ...formData, category: e.target.value })}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//               required
//             >
//               <option value="">Select a category</option>
//               <option value="roads">Roads</option>
//               <option value="utilities">Utilities</option>
//               <option value="sanitation">Sanitation</option>
//               <option value="infrastructure">Infrastructure</option>
//             </select>
//           </div>

//           {/* Location */}
//           <div>
//             <label htmlFor="location" className="block text-sm font-medium text-gray-700">
//               Location
//             </label>
//             <div className="mt-1 relative rounded-md shadow-sm">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <MapPin className="h-5 w-5 text-gray-400" />
//               </div>
//               <input
//                 type="text"
//                 id="location"
//                 value={formData.location}
//                 onChange={(e) => setFormData({ ...formData, location: e.target.value })}
//                 className="block w-full pl-10 rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
//                 placeholder="Enter location"
//                 required
//               />
//             </div>
//           </div>

//           {/* Description */}
//           <div>
//             <label htmlFor="description" className="block text-sm font-medium text-gray-700">
//               Description
//             </label>
//             <textarea
//               id="description"
//               rows={4}
//               value={formData.description}
//               onChange={(e) => setFormData({ ...formData, description: e.target.value })}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//               placeholder="Detailed description of the issue..."
//               required
//             />
//           </div>

//           {/* Image Upload */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Upload Images
//             </label>
//             <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
//               <div className="space-y-1 text-center">
//                 <Upload className="mx-auto h-12 w-12 text-gray-400" />
//                 <div className="flex text-sm text-gray-600">
//                   <label
//                     htmlFor="file-upload"
//                     className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
//                   >
//                     <span>Upload files</span>
//                     <input id="file-upload" name="file-upload" type="file" className="sr-only" multiple />
//                   </label>
//                   <p className="pl-1">or drag and drop</p>
//                 </div>
//                 <p className="text-xs text-gray-500">
//                   PNG, JPG, GIF up to 10MB
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Submit Button */}
//           <div className="flex justify-end">
//             <button
//               type="submit"
//               className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//             >
//               Submit Complaint
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SubmitComplaint;

import React, { useState } from "react";
import { MapPin, Upload, Send, AlertCircle } from "lucide-react";

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
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files || []);
    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ...files].slice(0, 3), // Limit to 3 images
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
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);

    // Reset form after successful submission
    setFormData({
      title: "",
      category: "",
      location: "",
      description: "",
      images: [],
    });

    alert("Complaint submitted successfully!");
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-2">Submit a Complaint</h1>
          <p className="text-gray-600">
            Help us improve our community by reporting issues that need
            attention.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
                errors.title ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Brief title describing the issue"
            />
            {errors.title && (
              <p className="mt-1 text-sm text-red-500 flex items-center">
                <AlertCircle className="h-4 w-4 mr-1" />
                {errors.title}
              </p>
            )}
          </div>

          {/* Category */}
          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Category
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
                errors.category ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="">Select a category</option>
              <option value="Roads">Roads</option>
              <option value="Sanitation">Sanitation</option>
              <option value="Utilities">Utilities</option>
              <option value="Public Safety">Public Safety</option>
            </select>
            {errors.category && (
              <p className="mt-1 text-sm text-red-500 flex items-center">
                <AlertCircle className="h-4 w-4 mr-1" />
                {errors.category}
              </p>
            )}
          </div>

          {/* Location */}
          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Location
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
                  errors.location ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter the location of the issue"
              />
            </div>
            {errors.location && (
              <p className="mt-1 text-sm text-red-500 flex items-center">
                <AlertCircle className="h-4 w-4 mr-1" />
                {errors.location}
              </p>
            )}
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows={4}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
                errors.description ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Provide detailed information about the issue"
            />
            {errors.description && (
              <p className="mt-1 text-sm text-red-500 flex items-center">
                <AlertCircle className="h-4 w-4 mr-1" />
                {errors.description}
              </p>
            )}
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Images (Optional)
            </label>
            <div className="space-y-4">
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
                    className="flex items-center justify-center px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500"
                  >
                    <Upload className="h-5 w-5 mr-2 text-gray-400" />
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
                      <div className="text-sm text-gray-600">{image.name}</div>
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
            className="w-full flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
          >
            {isSubmitting ? (
              <span>Submitting...</span>
            ) : (
              <>
                <Send className="h-5 w-5 mr-2" />
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
