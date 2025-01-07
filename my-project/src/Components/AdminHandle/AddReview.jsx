import React, { useState } from "react";
import axios from "axios";

const AddReview = () => {
  const [review, setReview] = useState({
    role: "",
    name: "",
    content: "",
  });
  const [photo, setPhoto] = useState("");
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    if (e.target.name === "photo") {
      handlePhotoChange(e);
    } else {
      setReview((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  const handlePhotoChange = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setPhoto(base64);
    setPreview(URL.createObjectURL(file));
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => resolve(fileReader.result);
      fileReader.onerror = (error) => reject(error);
    });
  };

  const AddReview = async () => {
    const reviewData = { ...review, photo };
    try {
      const res = await axios.post("http://localhost:3005/api/addreview", reviewData);
      console.log(res.data);
    } catch (error) {
      console.error("Error adding review:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Add a Review</h2>
      <div className="mb-4">
        <label className="block text-gray-600 font-medium mb-2" htmlFor="photo">
          Upload Photo
        </label>
        <input
          type="file"
          name="photo"
          id="photo"
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {preview && (
          <div className="mt-4 flex justify-center">
            <img
              src={preview}
              alt="Preview"
              className="w-16 h-16 rounded-full border object-cover"
            />
          </div>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-600 font-medium mb-2" htmlFor="role">
          Role
        </label>
        <input
          type="text"
          name="role"
          id="role"
          value={review.role}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-600 font-medium mb-2" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={review.name}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-600 font-medium mb-2" htmlFor="content">
          Review Content
        </label>
        <textarea
          name="content"
          id="content"
          rows="4"
          value={review.content}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        ></textarea>
      </div>
      <button
        onClick={AddReview}
        className="w-full bg-blue-500 text-white font-medium py-2 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Add Review
      </button>
    </div>
  );
};

export default AddReview;
