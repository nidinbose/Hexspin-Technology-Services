import React from 'react';
import { BsFillCaretRightFill } from "react-icons/bs";
import { motion } from "framer-motion";

const Headers = () => {
  return (
    <div className="bg-gradient-to-b from-black via-black to-black text-white w-full">
      {/* <div className="relative text-white overflow-hidden">
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
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                className="text-red-600 ml-3 font-extrabold font-barlow"
              >
                &gt; &gt; &gt; &gt; &gt;
              </motion.span>
              <br />
              GOALS WITH OUR <span className="text-red-600">HEXSPIN EXPERTS</span>
            </motion.h1>
          
          </div>
        </div>
      </div> */}
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 relative">
        
  <motion.div
  className="p-6 md:p-12 font-barlow font-semibold text-base md:text-xl lg:text-2xl"
  initial={{ x: '100vw', opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  viewport={{ once: false, amount: 0.5 }}
  transition={{ duration: 3, ease: 'easeOut' }}
>
  <h1 className="text-center md:text-left">
    At <span className="text-red-600">Hexspin Technology Services</span>, we specialize in providing startup enterprises, <br className="hidden md:block" />
    companies, and businesses with the solutions they need to reach their <br className="hidden md:block" />
    technology and business goals faster. We have an expert team of Hexspin experts with a wide range of experience in <br className="hidden md:block" />
    almost every area of IT solutions.
  </h1>

  <h2 className="mt-4 font-barlow mb-6 text-center md:text-left text-sm md:text-base lg:text-xl">
    In short, We Love IT and love helping <br className="hidden md:block" />
    businesses grow and develop through <br className="hidden md:block" />
    Technological change.
  </h2>

  <div className="flex justify-center md:justify-start">
    <button className="bg-transparent border px-4 md:px-6 py-2 md:py-3 text-red-600 border-red-500 font-semibold hover:bg-white/10 transition flex items-center gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="h-4 w-4 md:h-5 md:w-5 text-red-600"
      >
        <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 15H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 8H13z" />
      </svg>
      Presentation .PDF
    </button>
  </div>
</motion.div>
  <motion.div
    initial={{ x: "-100vw" }}
    animate={{ x: 0 }}
    transition={{ duration: 3, ease: "easeOut" }}
    viewport={{ once: false, amount: 0.5 }}
    className="flex items-center justify-center"
  >
    <img
      src="./Images/X1.png"
      alt="Creative Team"
      className="max-w-full rounded-lg shadow-2xl "
      style={{ objectFit: 'cover', margin: 0 }}
    />
  </motion.div>
</div>


          

    </div>
  );
};

export default Headers;



