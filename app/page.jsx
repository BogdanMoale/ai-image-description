"use client";

import React, { useState } from "react";
import GetImageDescription from "@/components/GetImageDescription";

export default function Home() {
  const [imageUrl, setImageUrl] = useState("");
  const [inputValue, setInputValue] = useState(
    "https://cdn.pixabay.com/photo/2023/01/18/10/32/ouch-7726461_640.jpg"
  );

  // Handle URL input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Handle URL submission
  const handleSubmit = () => {
    if (inputValue) {
      // Validate if the URL is an image URL (basic check)
      const imageUrlPattern =
        /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp))(?:\?.*)?$/i;
      if (imageUrlPattern.test(inputValue)) {
        setImageUrl(inputValue);
      } else {
        alert("Please enter a valid image URL.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-8 px-4">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Image Url</h1>
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <input
          type="text"
          // placeholder="https://cdn.pixabay.com/photo/2023/01/18/10/32/ouch-7726461_640.jpg"
          value={inputValue}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </div>

      {/* Render the image and GetImageDescription component only if imageUrl is available */}
      {imageUrl && (
        <div className="mt-6 w-full max-w-md text-center">
          <div className="mb-4">
            <img
              src={imageUrl}
              alt="Selected"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <GetImageDescription imageUrl={imageUrl} />
        </div>
      )}
    </div>
  );
}
