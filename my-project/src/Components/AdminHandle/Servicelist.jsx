import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Servicelist = () => {
    const [value,setValue]=useState([])

    const getService=async()=>{
        try {
           const res=await axios.get(`http://localhost:3005/api/getservice`)
           console.log(res.data);
            setValue([...res.data])
            
        } catch (error) {
            
        }
    }
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i) => ({
          opacity: 1,
          y: 0,
          transition: {
            delay: i * 0.2, 
            duration: 0.6,
            type: 'spring',
          },
        }),
      };

 useEffect(()=>{
getService()
 },[])
  return (
    <div>
  <div className='transform md:rotate-[-2deg] bg-black'>
     <div className="group transform rotate-2">
     <h1 className="text-white text-6xl text-center mb-9 font-bold font-barlow group-hover:text-red-600 ">
  OUR SE<span className="text-red-600 group-hover:text-white">R</span>VICES
</h1>

</div>

    <div className="h-full bg-black flex justify-center items-center">
    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-12 p-5">
        {value.map((value, index) => (
          <motion.div
            key={value.id}
            className="group perspective"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={cardVariants}
            style={{
              marginTop: `${index * 2}rem`, 
            }}
          >
           <Link to={`/viewservice/${value._id}`}>
           <div className="border p-12 w-80 h-full xl:h-[60vh] border-gray-600 transition-transform duration-500 transform group-hover:rotate-3 transform md:rotate-[-1deg] group-hover:-rotate-y-30 group-hover:scale-105">
              <div className="border border-red-500 p-3">
                <img
                  src={value.image}
                  alt="Service"
                  className="border p-6 object-cover hover:border-red-600"
                />
              </div>
              <h1 className="text-white text-start mt-12 font-barlow text-xl font-bold">{value.title}</h1>
              <p className="text-white text-start mt-6 font-barlow font-semibold">{value.description}</p>
            </div>
           </Link>
          </motion.div>
        ))}
      </div>
    </div>
    </div>
    </div>
  )
}

export default Servicelist