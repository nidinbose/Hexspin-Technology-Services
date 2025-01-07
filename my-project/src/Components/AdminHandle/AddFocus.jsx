import React, { useState } from 'react';
import axios from 'axios';

const AddFocus = () => {
  const [focus, setFocus] = useState({
    title: '',
    header: '',
    description: '',
  });
  const [photo, setPhoto] = useState('');
  const [preview, setPreview] = useState(null); 

  const handleChange = (e) => {
    setFocus((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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

  const addFocus = async () => {
    try {
      const res = await axios.post('http://localhost:3003/api/addfocus', { photo, focus });
      console.log('Focus added:', res.data);
    } catch (error) {
      console.error('Error adding focus:', error);
    }
  };

  return (
    <div className="flex flex-col items-center p-6 space-y-4 bg-gray-100">
      <h2 className="text-2xl font-bold">Add Focus</h2>
      <div className="w-full max-w-md space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={focus.title}
          onChange={handleChange}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="header"
          placeholder="Header"
          value={focus.header}
          onChange={handleChange}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={focus.description}
          onChange={handleChange}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={5}
        ></textarea>
        <div className="flex items-center space-x-4">
          <label className="cursor-pointer">
            <input type="file" accept="image/*" onChange={handlePhotoChange} className="hidden" />
            <span className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
              Upload Photo
            </span>
          </label>
          {preview && (
            <img src={preview} alt="Preview" className="w-16 h-16 rounded-full border object-cover" />
          )}
        </div>
        <button
          onClick={addFocus}
          className="w-full px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddFocus;
