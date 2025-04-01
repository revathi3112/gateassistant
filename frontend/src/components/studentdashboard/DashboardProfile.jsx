import React, { useState, useRef } from 'react';
import { FiUpload, FiUser, FiCheckCircle, FiXCircle } from 'react-icons/fi';

const DashboardProfile = ({ 
  student, 
  onProfilePictureUpdate,
  className = '' 
}) => {
  const [previewImage, setPreviewImage] = useState(null);
  const [uploadStatus, setUploadStatus] = useState({
    loading: false,
    error: null,
    success: false
  });
  const fileInputRef = useRef(null);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file
    if (!file.type.match('image.*')) {
      setUploadStatus({
        loading: false,
        error: 'Only image files are allowed',
        success: false
      });
      return;
    }

    if (file.size > 2 * 1024 * 1024) { // 2MB limit
      setUploadStatus({
        loading: false,
        error: 'File size must be less than 2MB',
        success: false
      });
      return;
    }

    setUploadStatus({ loading: true, error: null, success: false });

    try {
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);

      // Call parent component's upload handler if provided
      if (onProfilePictureUpdate) {
        await onProfilePictureUpdate(file);
        setUploadStatus({
          loading: false,
          error: null,
          success: true
        });
        
        // Reset success message after 3 seconds
        setTimeout(() => {
          setUploadStatus(prev => ({ ...prev, success: false }));
        }, 3000);
      }
    } catch (error) {
      setUploadStatus({
        loading: false,
        error: error.message || 'Failed to upload image',
        success: false
      });
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div className={`bg-white p-6 rounded-lg shadow-md ${className}`}>
      <h2 className="text-xl font-bold text-gray-800 mb-4">Your Profile</h2>
      
      {/* Profile Picture Section */}
      <div className="flex flex-col items-center mb-6">
        <div className="relative w-32 h-32 mb-4 group">
          {previewImage || student.profilePicture ? (
            <>
              <img 
                src={previewImage || student.profilePicture} 
                alt="Profile"
                className="w-full h-full rounded-full object-cover border-2 border-gray-200"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <FiUpload className="text-white text-2xl" />
              </div>
            </>
          ) : (
            <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-4xl font-bold">
              {student.name?.charAt(0)?.toUpperCase() || <FiUser />}
            </div>
          )}
        </div>
        
        {/* Hidden file input */}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleImageChange}
          accept="image/*"
          className="hidden"
        />
        
        <button 
          onClick={triggerFileInput}
          disabled={uploadStatus.loading}
          className="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2"
        >
          {uploadStatus.loading ? (
            'Uploading...'
          ) : previewImage || student.profilePicture ? (
            <>
              <FiUpload /> Change Photo
            </>
          ) : (
            <>
              <FiUpload /> Upload Photo
            </>
          )}
        </button>

        {/* Status messages */}
        {uploadStatus.error && (
          <div className="mt-2 text-red-500 text-sm flex items-center gap-1">
            <FiXCircle /> {uploadStatus.error}
          </div>
        )}
        {uploadStatus.success && (
          <div className="mt-2 text-green-500 text-sm flex items-center gap-1">
            <FiCheckCircle /> Profile picture updated successfully!
          </div>
        )}
      </div>

      {/* Profile Details */}
      <div className="space-y-4">
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">Full Name</label>
          <p className="text-gray-900 font-semibold">{student.name || 'Not provided'}</p>
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">Email</label>
          <p className="text-gray-900 font-semibold">{student.email || 'Not provided'}</p>
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">Phone Number</label>
          <p className="text-gray-900 font-semibold">{student.phone || 'Not provided'}</p>
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">Branch</label>
          <p className="text-gray-900 font-semibold">{student.branch || 'Not provided'}</p>
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">Year of Study</label>
          <p className="text-gray-900 font-semibold">{student.year || 'Not provided'}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardProfile;