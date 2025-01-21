import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Editservice = () => {
  const { id } = useParams(); 
  const [service, setService] = useState({});

 
  const fetchService = async () => {
    try {
      const res = await axios.get(`http://localhost:3005/api/getservice/${id}`);
      setService(res.data);
      console.log(res.data);
    } catch (error) {
      console.error('Error fetching service data:', error);
    }
  };

 
  const handleChange = (e) => {
    setService((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    fetchService();
  }, [id]);

  return (
    <div>
      <form>
        <input
          type="text"
          name="title"
          placeholder="Service Name"
          value={service.title || ''}
          onChange={handleChange}
        />
        <button type="button" onClick={() => console.log('Updated service:', service)}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Editservice;
