import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { useParams,Link } from 'react-router-dom';



const Viewservices = () => {
    const [value,setValue]=useState({});
    const {id}=useParams()

    const getService=async()=>{
        try {
            const res=await axios.get(`http://localhost:3005/api/editservice/${id}`)
            console.log(res.data);
            setValue(res.data)
            
        } catch (error) {
            
        }
    }

    useEffect(()=>{
        getService()
    },[])
  return (
    <div>Viewservices

        <h1 className='text-5xl text-red-500'>{value.title}</h1>

       <Link to={`/editservices/${value._id}`}>
       
       <button>Edit</button>
       </Link>
    </div>
  )
}

export default Viewservices