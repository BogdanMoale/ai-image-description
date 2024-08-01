"use client";

import React, { useState, useEffect } from "react";

function FetchData({ imageUrl }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `${
            process.env.NEXT_PUBLIC_API_HOST
          }/api/generate?imageUrl=${encodeURIComponent(imageUrl)}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data!");
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchData();
  }, [imageUrl]);

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-md">
      {error ? (
        <div className="text-red-500 font-semibold">Error: {error}</div>
      ) : !data ? (
        <div className="text-gray-500">Loading...</div>
      ) : (
        <div className="text-gray-700">
          <h2 className="text-xl font-bold mb-2">Image Description</h2>
          <pre className="whitespace-pre-wrap break-words">
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}

export default FetchData;
