import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddServices = () => {
  const [value, setValue] = useState({
    title: "",
    description: "",
  });
  const [photo, setPhoto] = useState("");
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePhotoChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const base64 = await convertToBase64(file);
      setPhoto(base64);
      setPreview(URL.createObjectURL(file));
    }
  };

  function convertToBase64(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  }

  const addService = async () => {
    try {
      const res = await axios.post("http://localhost:3005/api/addservice", {
        ...value,
        image: photo,
      });
      toast.success("Service added successfully!");
      console.log("Service added:", res.data);
    } catch (error) {
      toast.error("Failed to add service. Please try again.");
      console.error("Error adding service:", error);
    }
  };

  return (
    <div className="flex flex-col items-center p-6 space-y-6 bg-gray-100">
      <ToastContainer /> 
      <h2 className="text-2xl font-bold">Add Service</h2>
      <div className="w-full max-w-lg space-y-4">
   
        <div className="flex flex-col items-center">
          <label className="cursor-pointer">
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              className="hidden"
            />
            <span className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
              Upload Image
            </span>
          </label>
          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="w-24 h-24 mt-4 rounded-full border object-cover"
            />
          )}
        </div>
            <input
          type="text"
          name="title"
          placeholder="Service Title"
          value={value.title}
          onChange={handleChange}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
                <textarea
          name="description"
          placeholder="Service Description"
          value={value.description}
          onChange={handleChange}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={5}
        ></textarea>
            <button
          onClick={addService}
          className="w-full px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
        >
          Add Service
        </button>
      </div>
    </div>
  );
};

export default AddServices;
