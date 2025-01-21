import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Viewprojects = () => {
    const [value,setValue]=useState({});
    const {id}=useParams()

    const getdata=async ()=>{
        try {
         const res=await axios.get(`http://localhost:3005/api/editproject/${id}`)
         console.log(res.data);
         setValue(res.data)
            
        } catch (error) {
            
        }
    }
    useEffect(()=>{
        getdata()
    },[])
  return (
    <div>

        <img src={value.photo} alt="" />
    </div>
  )
}

export default Viewprojects