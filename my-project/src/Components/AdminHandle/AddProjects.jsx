import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProjects = () => {
  const [value, setValue] = useState({
    name: '',
    description: '',
    link: '',
  });
  const [photo, setPhoto] = useState('');
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

  const addProject = async () => {
    try {
      const res = await axios.post('http://localhost:3005/api/addprojects', { ...value, photo });
      toast.success('Project added successfully!');
      console.log('Project added:', res.data);
      setValue({ name: '', description: '', link: '' });
      setPhoto('');
      setPreview(null);
    } catch (error) {
      toast.error('Failed to add project. Please try again.');
      console.error('Error adding project:', error);
    }
  };

  return (
    <div className="flex flex-col items-center p-6 space-y-4 bg-gray-100">
      <ToastContainer /> 
      <h2 className="text-2xl font-bold">Add Project</h2>
      <div className="w-full max-w-md space-y-4">
        {/* Project Name */}
        <input
          type="text"
          name="name"
          placeholder="Project Name"
          value={value.name}
          onChange={handleChange}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
               <textarea
          name="description"
          placeholder="Project Description"
          value={value.description}
          onChange={handleChange}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={5}
        ></textarea>
               <input
          type="text"
          name="link"
          placeholder="Project Link"
          value={value.link}
          onChange={handleChange}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
                <div className="flex items-center space-x-4">
          <label className="cursor-pointer">
            <input type="file" accept="image/*" onChange={handlePhotoChange} className="hidden" />
            <span className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
              Upload Photo
            </span>
          </label>
          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="w-16 h-16 rounded-full border object-cover"
            />
          )}
        </div>
               <button
          onClick={addProject}
          className="w-full px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddProjects;
