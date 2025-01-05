import React, { useState } from 'react'

const AddProjects = () => {
    const [value,setValue]=useState({
        photo:"",

    })
    const [photo,setPhoto]=useState("");

    const handleChange=((e)=>{
     setValue((pre)=>({...pre,[e.target.name]:e.target.value}))
    })

    const convert=async()=>{
        
    }
  return (
    <div>AddProjects</div>
  )
}

export default AddProjects