import React, { useState } from 'react'

const AddServices = () => {
    const [value,setValue]=useState({
        image:"",
        title:"",
        description:""
    });
    const [photo,setPhoto]=useState("")

  const handleChange=((e)=>{
setValue((pre)=>({...pre,[e.target.name]:e.target.value}))})

const convert=async(e)=>{
setPhoto(await convertToBase64(e.target.files[0]))
}

function convertToBase64(file){
  console.log("b64",file);
  return new Promise((resolve,reject)=>{
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload=()=>{
      resolve(fileReader.result);

      fileReader.onerror=(error)=>{
        reject(error);
      }
    }
  })

  const add=async()=>{
    console.log(value);
    console.log(`photo is ${photo}`);
    const res=await axios.post("htpp://localhost:3003/api/addServices ")
    
    
  }
  
}
  return (
    <div>

          <input type="file" placeholder='image' name='image' onChange={convert} />
          <input type=" text" placeholder='title' name='title' onChange={handleChange}/>
          <input type="text" placeholder='description' name='description' onChange={handleChange}/>
          <button>Add Service</button>

    </div>
  )
}

export default AddServices