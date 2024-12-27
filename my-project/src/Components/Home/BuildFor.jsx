import React from "react";
import {
  FaGraduationCap,
  FaStethoscope,
  FaBuilding,
  FaUtensils,
  FaShoppingCart,
  FaTshirt,
  FaWrench,
  FaDumbbell,
} from "react-icons/fa";
import { motion } from "framer-motion";

const BuildFor = () => {
  const focusAreas = [
    { icon: <FaGraduationCap size={32} />, name: "Education", direction: "left" },
    { icon: <FaStethoscope size={32} />, name: "Healthcare", direction: "right" },
    { icon: <FaBuilding size={32} />, name: "Real Estate", direction: "top" },
    { icon: <FaUtensils size={32} />, name: "Food", direction: "bottom" },
    { icon: <FaShoppingCart size={32} />, name: "E-Commerce", direction: "left" },
    { icon: <FaTshirt size={32} />, name: "Fashion", direction: "right" },
    { icon: <FaWrench size={32} />, name: "Steel & Metal", direction: "top" },
    { icon: <FaDumbbell size={32} />, name: "Sports & Fitness", direction: "bottom" },
  ];

  const getAnimation = (direction) => {
    const variants = {
      left: { x: -100, opacity: 0 },
      right: { x: 100, opacity: 0 },
      top: { y: -100, opacity: 0 },
      bottom: { y: 100, opacity: 0 },
    };
    return variants[direction];
  };

  return (
    <div className="p-6">
      <h1 className="text-white text-4xl md:text-6xl font-barlow font-bold text-center mb-8">
        WHERE WE PLACE OUR <span className="text-red-600">FOCUS</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-10">
        {focusAreas.map((area, index) => (
          <motion.div
            key={index}
            className="relative group flex flex-col items-center border hover:border-red-600 justify-center p-6 text-center text-white overflow-hidden"
            initial={getAnimation(area.direction)}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: false, amount: 0.5 }} 
          >
                      <div className="absolute inset-3  border border-red-600 group-hover:border-white transition-all duration-500"></div>
            <div className="relative z-10 text-red-600 text-5xl flex gap-4">
            <p className="mt-4 text-lg font-bold relative z-10">{area.icon}</p>
            <p className="mt-4 text-lg font-bold relative z-10 text-white">{area.name}</p>
            </div>
            
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 p-10 mt-12">
         <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <img
          src="https://i.pinimg.com/564x/de/75/32/de753278dfba5e383a86a84e35adce48.jpg"
          alt=""
          className="w-96 h-full"
        />
      </motion.div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.5 }}
        className="text-center font-barlow"
      >
        <h1 className="font-barlow text-6xl font-bold text-white">
          WHAT <span className="text-red-600">WE</span> DO BEST
        </h1>
        <p className="text-sm font-semibold font-barlow text-white mt-9">
          We believe that with the right technology your business can solve
          almost any problem that comes its way. When businesses have the wrong
          solution, they get held back indefinitely.
        </p>

        <p className="text-sm font-semibold font-barlow text-white mt-9">
          <span className="text-red-600">
            At Hexspin Technology Services,
          </span>{" "}
          we are passionate about helping businesses find and develop the right
          strategies they need to help them drive their business forward. We
          also help our clients de-risk their technology spending so that they
          get the best solutions cost-efficiently. Our greatest aim is always
          to help you build the systems and infrastructure you need to grow
          your business faster, so you can spend less time working and more
          time growing.
        </p>

        <p className="text-sm font-semibold font-barlow text-white mt-9">
          <span className="text-red-600">Our greatest</span> aim is always to
          help you build the systems and infrastructure you need to grow your
          business faster, so you can spend less time working and more time
          growing.
        </p>
      </motion.div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <img
          src="https://i.pinimg.com/564x/de/75/32/de753278dfba5e383a86a84e35adce48.jpg"
          alt=""
          className="w-96 h-full"
        />
      </motion.div>
    </div>

    </div>
  );
};

export default BuildFor;

