import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      id: 1,
      image: "https://i.pinimg.com/564x/de/75/32/de753278dfba5e383a86a84e35adce48.jpg",
      title: "College management system",
      description: "Description for Project 1",
    },
    {
      id: 2,
      image: "https://i.pinimg.com/564x/de/75/32/de753278dfba5e383a86a84e35adce48.jpg",
      title: "Project 2",
      description: "Description for Project 2",
    },
    {
      id: 3,
      image: "https://i.pinimg.com/564x/de/75/32/de753278dfba5e383a86a84e35adce48.jpg",
      title: "Project 3",
      description: "Description for Project 3",
    },
    {
      id: 4,
      image: "https://i.pinimg.com/564x/de/75/32/de753278dfba5e383a86a84e35adce48.jpg",
      title: "Project 4",
      description: "Description for Project 4",
    },
  ];

  const [visible, setVisible] = useState(Array(projects.length).fill(false));
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.index);
          if (entry.isIntersecting) {
            setVisible((prev) => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
          } else {
            setVisible((prev) => {
              const newVisible = [...prev];
              newVisible[index] = false;
              return newVisible;
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    const items = document.querySelectorAll(".project");
    items.forEach((item) => observer.observe(item));

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const container = scrollRef.current;
  
      if (container.scrollLeft + container.offsetWidth >= container.scrollWidth) {
               container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
               container.scrollBy({ left: 300, behavior: "smooth" });
      }
    }, 3000); 
  
    return () => clearInterval(interval); 
  }, []);
  

  return (
    <div className="h-full mt-6 px-4">
      <h1 className="text-white text-4xl md:text-6xl font-barlow font-bold text-center">
        OUR PR<span className="text-red-600">O</span>JECTS
      </h1>
     <div className="">
       
     <h1 className="text-xl md:text-2xl text-center text-white mt-2 stroke-2 stroke-white">
        Works
      </h1>
      <hr className="mt-2 h-1" />
      <div className="relative mt-6">
        <div
          ref={scrollRef}
          className="flex overflow-x-scroll gap-6 scrollbar-hide scroll-smooth p-12"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              data-index={index}
              className="min-w-[300px] md:min-w-[350px] flex-shrink-0 p-7 relative group project"
              initial={{ opacity: 0, x: index % 2 === 0 ? -200 : 200 }}
              animate={{
                opacity: visible[index] ? 1 : 0,
                x: visible[index] ? 0 : index % 2 === 0 ? -200 : 200,
              }}
              transition={{ duration: 1, ease: "easeOut", delay: index * 0.2 }}
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-96 w-full rounded-xl object-cover"
                />
                <button className="absolute top-4 right-4 bg-red-600 font-barlow text-white px-3 py-1 text-sm md:text-base lg:px-4 lg:py-2 rounded-full shadow-md hover:bg-red-700">
                  Developing
                </button>
                <button className="absolute bottom-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-red-700 lg:bottom-6 lg:right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  &#8250;
                </button>
              </div>
              <div className="mt-4 text-start text-white p-3">
                <p className="text-lg font-bold font-barlow">{project.title}</p>
                <p className="text-sm font-barlow mt-4">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center mt-6 gap-4">
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
      </div>
     </div>
    </div>
  );
};

export default Projects;
