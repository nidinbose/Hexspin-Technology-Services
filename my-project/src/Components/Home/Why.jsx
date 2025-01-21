import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const animationVariantstext = {
  left: {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
  },
  right: {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
  },
  top: {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
  },
  bottom: {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
  },
};

const Why = () => {
  const wd = [
    {
      head: "Fully customized websites",
      body: "Running a business is the result of your dreams coming true, and it's our job to express that on the internet. We take the responsibility of developing your website from scratch with unique and efficient technologies.",
    },
    {
      head: "All services in one place",
      body: "We provide all services in one place, so there's no need to go anywhere else. Our team is experienced in delivering end-to-end website services that include planning, development, web hosting, and infographics.",
    },
    {
      head: "Highly skilled in-line team",
      body: "Our team members are highly skilled and trained in the latest technologies. They implement their creativity in website development to ensure that your website stands out from the rest.",
    },
    {
      head: "On-time delivery",
      body: "We promise to deliver all projects on time and following client instructions, ensuring good quality work without any delays.",
    },
  ];

  const images = [
    "https://t4.ftcdn.net/jpg/02/40/63/55/360_F_240635575_EJifwRAbKsVTDnA3QE0bCsWG5TLhUNEZ.jpg",
    "https://media.istockphoto.com/id/938963588/vector/red-gradient-background.jpg?s=612x612&w=0&k=20&c=3a-1z1qMKsJd6FPJiIbqCxzURsMpn7lT-QTCDowgH-E=",
    "https://via.placeholder.com/600x400.png?text=Image+3",
    "https://via.placeholder.com/600x400.png?text=Image+4",
    "https://via.placeholder.com/600x400.png?text=Image+5",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  const animationVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8 },
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      transition: { duration: 0.8 },
    }),
  };

  return (
    <div className="bg-black ">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center  h-full p-6 bg-black rounded-lg shadow-lg">
          {/* Image Carousel Section */}
          <div className="relative flex justify-center items-center overflow-hidden h-96">
            <motion.div
              className="absolute w-72 h-96 object-cover rounded-lg shadow-lg"
              key={currentIndex}
              variants={animationVariants}
              initial="enter"
              animate="center"
              exit="exit"
              custom={1}
            >
              <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </motion.div>
          </div>

          {/* Text Section */}
          <div className="space-y-8">
            {wd.map((item, index) => {
              // Alternate animation directions based on index
              const animationDirection = index % 2 === 0 ? "left" : "right";

              return (
                <motion.div
                  key={index}
                  className="p-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  variants={animationVariantstext[animationDirection]}
                >
                  <h1 className="text-3xl font-bold text-white mb-4 font-barlow">
                    {item.head}
                  </h1>
                  <p className="text-sm text-gray-300 font-barlow mb-4">
                    {item.body}
                  </p>
                  <hr className="border-gray-600" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
