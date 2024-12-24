import React from 'react';
import { BsFillCaretRightFill } from "react-icons/bs";
import { motion } from "framer-motion";

const Headers = () => {
  return (
    <div className="bg-gradient-to-b from-black via-black to-black text-white">
      <div className="relative text-white overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 px-6 sm:px-12 lg:px-20 py-12 sm:py-16 lg:py-24">
          <div className="flex flex-col justify-center items-start text-left w-full px-4 sm:px-6 lg:px-10 xl:px-12">
            <motion.h1
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="font-barlow text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-snug"
            >
              ACHIEVE YOUR BUSINESS AND TECHNOLOGY{" "}
              <motion.span
                initial={{ x: "100vw" }}
                animate={{ x: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                className="text-red-600 ml-3 font-extrabold font-barlow"
              >
                &gt; &gt; &gt; &gt; &gt;
              </motion.span>
              <br />
              GOALS WITH OUR <span className="text-red-600">HEXSPIN EXPERTS</span>
            </motion.h1>
            {/* <motion.p
           initial={{ x: "100vw" }}
           animate={{ x: 0 }}
           transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
              className="mt-4 sm:mt-6 text-sm sm:text-base md:text-sm lg:text-md xl:text-xl text-gray-300 leading-relaxed font-barlow max-w-lg font-semibold"
            >
              Unlock new opportunities with cutting-edge{" "}
              <span className="text-red-500">website development</span>, UI/UX
              design, and seamless application solutions tailored for your
              business.
            </motion.p> */}
          </div>
        </div>
      </div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2">
      {/* Left Section - Text */}
      <motion.div
        className="p-12 font-barlow font-semibold text-xl"
        initial={{ x: '100vw', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }} 
        transition={{ duration: 3, ease: 'easeOut' }}
      >
        <h1>
          At <span className="text-red-600">Hexspin Technology Services</span> we specialize in providing startup enterprises <br />
          companies and businesses with the solutions they need to reach their <br />
          technology and business goals faster. We have an expert team of Hexspin experts with a wide range of experience in <br />
          almost every area of IT solutions.
        </h1>
      </motion.div>

      {/* Right Section - Image */}
      <motion.div
       initial={{ x: "-100vw" }}
       animate={{ x: 0 }}
       transition={{ duration: 3, ease: "easeOut" }}
      >
        <img
          src="https://www.y-axis.com/assets/cms/2023-09/Counseling.webp"
          alt="Creative Team"
          className="w-full max-w-full rounded-lg shadow-2xl p-3"
        />
      </motion.div>
    </div>
          

    </div>
  );
};

export default Headers;



