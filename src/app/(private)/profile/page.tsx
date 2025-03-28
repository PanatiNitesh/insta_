"use client";  // 👈 Add this at the top!

import React, { useState } from "react";

export default function Profile() {
  const [bio, setBio] = useState("Hello! I'm a passionate developer.");
  const [editing, setEditing] = useState(false);
  const [newBio, setNewBio] = useState(bio);

  const handleSave = () => {
    setBio(newBio);
    setEditing(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md text-center">
      <img
  src="https://api.dicebear.com/7.x/shapes/svg?seed=sportscar"
  alt="Sports Car"
  className="w-24 h-24 rounded-full mx-auto border-4 border-red-500"
/>

        <h2 className="text-2xl font-semibold mt-4">Nitesh</h2>
        <p className="text-gray-600">niteshreddy@gmail.com</p>

        <div className="mt-4">
          {editing ? (
            <textarea
              className="border p-2 w-full rounded-md"
              value={newBio}
              onChange={(e) => setNewBio(e.target.value)}
            />
          ) : (
            <p className="text-gray-700">{bio}</p>
          )}

          {editing ? (
            <button
              className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              onClick={handleSave}
            >
              Save
            </button>
          ) : (
            <button
              className="mt-3 px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400"
              onClick={() => setEditing(true)}
            >
              Edit Bio
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
