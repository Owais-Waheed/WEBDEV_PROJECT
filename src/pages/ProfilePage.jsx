import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Bell,
  Shield,
  Camera,
  Edit2,
  Save,
  X,
} from "lucide-react";

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    location: "New York, NY",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    notificationsEnabled: true,
    privacySettings: {
      showEmail: false,
      showPhone: false,
      showLocation: true,
    },
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox" && name.startsWith("privacy.")) {
      const setting = name.split(".")[1];
      setProfile((prev) => ({
        ...prev,
        privacySettings: {
          ...prev.privacySettings,
          [setting]: checked,
        },
      }));
    } else if (type === "checkbox") {
      setProfile((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else {
      setProfile((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSave = () => {
    // Here you would typically save the profile to your backend
    setIsEditing(false);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Profile Header */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-start justify-between">
          <div className="flex space-x-4">
            <div className="relative">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-24 h-24 rounded-full object-cover"
              />
              <button className="absolute bottom-0 right-0 p-1.5 bg-white rounded-full shadow-sm hover:bg-gray-50">
                <Camera className="h-4 w-4 text-gray-600" />
              </button>
            </div>
            <div>
              <h1 className="text-2xl font-bold">{profile.name}</h1>
              <p className="text-gray-600">Member since March 2024</p>
              <div className="mt-2 flex items-center text-sm text-gray-500">
                <MapPin className="h-4 w-4 mr-1" />
                {profile.location}
              </div>
            </div>
          </div>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="flex items-center px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
          >
            {isEditing ? (
              <>
                <X className="h-4 w-4 mr-2" />
                Cancel
              </>
            ) : (
              <>
                <Edit2 className="h-4 w-4 mr-2" />
                Edit Profile
              </>
            )}
          </button>
        </div>
      </div>

      {/* Profile Information */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-4">Personal Information</h2>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50 disabled:text-gray-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50 disabled:text-gray-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="tel"
                  name="phone"
                  value={profile.phone}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50 disabled:text-gray-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  name="location"
                  value={profile.location}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50 disabled:text-gray-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Preferences */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-4">Preferences</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bell className="h-5 w-5 text-gray-400" />
              <div>
                <p className="font-medium">Notifications</p>
                <p className="text-sm text-gray-500">
                  Receive updates about your complaints
                </p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                name="notificationsEnabled"
                checked={profile.notificationsEnabled}
                onChange={handleInputChange}
                disabled={!isEditing}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </div>

      {/* Privacy Settings */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Shield className="h-5 w-5 text-gray-400" />
          <h2 className="text-lg font-semibold">Privacy Settings</h2>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="font-medium">Show email to other users</p>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                name="privacy.showEmail"
                checked={profile.privacySettings.showEmail}
                onChange={handleInputChange}
                disabled={!isEditing}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <p className="font-medium">Show phone number to other users</p>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                name="privacy.showPhone"
                checked={profile.privacySettings.showPhone}
                onChange={handleInputChange}
                disabled={!isEditing}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <p className="font-medium">Show location to other users</p>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                name="privacy.showLocation"
                checked={profile.privacySettings.showLocation}
                onChange={handleInputChange}
                disabled={!isEditing}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </div>

      {/* Save Button */}
      {isEditing && (
        <div className="flex justify-end">
          <button
            onClick={handleSave}
            className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <Save className="h-4 w-4 mr-2" />
            Save Changes
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
