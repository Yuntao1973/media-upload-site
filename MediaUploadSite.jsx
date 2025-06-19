import React, { useState } from "react";
import { UploadCloud } from "lucide-react";

export default function MediaUploadSite() {
  const [mediaFiles, setMediaFiles] = useState([]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setMediaFiles((prevFiles) => [...prevFiles, ...files]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-center">Media Upload Center</h1>

        <div className="bg-white shadow rounded p-6">
          <div className="flex flex-col items-center space-y-4">
            <label className="flex items-center space-x-2 cursor-pointer">
              <UploadCloud className="w-6 h-6 text-blue-500" />
              <span className="text-blue-500 font-medium">Select Files to Upload</span>
              <input
                type="file"
                accept="image/*,video/*"
                multiple
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
            <p className="text-gray-500 text-sm">Supported formats: JPG, PNG, MP4, MOV</p>
          </div>
        </div>

        {mediaFiles.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {mediaFiles.map((file, index) => (
              <div key={index} className="bg-white shadow rounded overflow-hidden">
                {file.type.startsWith("image") ? (
                  <img
                    src={URL.createObjectURL(file)}
                    alt={file.name}
                    className="w-full h-auto object-cover"
                  />
                ) : (
                  <video
                    controls
                    className="w-full h-auto"
                    src={URL.createObjectURL(file)}
                  />
                )}
                <p className="mt-2 text-sm text-center truncate">{file.name}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}