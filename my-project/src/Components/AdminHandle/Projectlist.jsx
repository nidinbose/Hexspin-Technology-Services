import axios from 'axios'
import React, { useEffect, useState,useRef } from 'react'
import { Link } from 'react-router-dom'


const Projectlist = () => {
    const [projects ,setProject]=useState([])

    const getdata=async()=>{
        try {
        const res=await axios.get(`http://localhost:3005/api/getprojects`)
        console.log(res.data);
        setProject([...res.data])
        
        } catch (error) {
            
        }
    }

    useEffect(()=>{
        getdata()
    },[])
  return (
    <div className="h-full mt-6 px-4">
    <h1 className="text-white text-4xl md:text-6xl font-barlow font-bold text-center">
      OUR PR<span className="text-red-600">O</span>JECTS
    </h1>
    <div className="mt-4">
      <h1 className="text-xl md:text-2xl text-center text-white mt-2 stroke-2">
        Works
      </h1>
      <hr className="mt-2 h-1 bg-gray-300" />
      <div className="relative mt-6">
        <div
        //   ref={scrollRef}
          className="flex overflow-x-scroll gap-6 scrollbar-hide scroll-smooth px-4 py-6"
        >
          {projects.map((project) => (
    <Link to={`/viewprojects/${project._id}`}>
               <div
              key={project.id}
              className="min-w-[300px] md:min-w-[350px] flex-shrink-0 p-4 bg-gray-800 rounded-xl shadow-lg group"
            >
              <div className="relative">
                <img
                  src={project.photo}
                  alt={project.name}
                  className="h-60 w-full rounded-xl object-cover"
                />
                <button className="absolute top-4 right-4 bg-red-600 font-barlow text-white px-3 py-1 text-sm md:text-base rounded-full shadow-md hover:bg-red-700">
                  Developing
                </button>
                <button
                  onClick={() => window.open(project.link, "_blank")}
                  className="absolute bottom-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  &#8250;
                </button>
              </div>
              <div className="mt-4 text-start text-white p-2">
                <p className="text-lg font-bold font-barlow">{project.name}</p>
                <p className="text-sm font-barlow mt-2">{project.description}</p>
              </div>
            </div>
    </Link>
          ))}
        </div>
      </div>
      {/* <div className="flex justify-center items-center mt-6 gap-4">
        <button
          onClick={scrollLeft}
          className="bg-red-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-red-700"
        >
          &#8249;
        </button>
        <button
          onClick={scrollRight}
          className="bg-red-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-red-700"
        >
          &#8250;
        </button>
      </div> */}
    </div>
  </div>
  

  )
}

export default Projectlist