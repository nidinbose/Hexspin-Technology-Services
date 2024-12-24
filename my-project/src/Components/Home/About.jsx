import React from 'react';
import { motion } from 'framer-motion';
import './Css/About.css';

const About = () => {
  return (
    <div className="bg-black text-white py-16">
          <motion.h1
        className="text-6xl text-center mb-9 font-bold font-barlow"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }} 
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        ABOUT<span className="text-red-600"> US</span>
      </motion.h1>

      <motion.h1
  className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl text-center mb-9 font-bold font-barlow"
  initial={{ y: -50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: false, amount: 0.5 }}
  transition={{ duration: 1, ease: 'easeOut' }}
>
  WHO <span className="text-red-600">WE </span>ARE, WHERE <span className='text-red-600'>WE</span> PLACE OUR <br />
  FOCUS, AND WHAT <span className='text-red-600'>WE</span> DO BEST
</motion.h1>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6 md:px-12 lg:px-24">
              <motion.div
          className="image-container relative flex justify-center"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }} 
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          <img
            src="./Images/H2.png"
            alt="Our Team"
            className="rounded-lg shadow-2xl transition-transform duration-500 hover:scale-105"
          />
        </motion.div>
        <motion.div
          className="space-y-6 p-7"
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          <h2 className="text-5xl font-semibold font-barlow">
            WHO <span className="text-red-600">WE</span> ARE
          </h2>
          <p className="text-lg leading-relaxed font-barlow text-md">
            <span className="text-red-600 font-bold font-barlow text-md">At Hexspin Technology Services</span>, we are a passionate team of innovators and industry experts that have come together to help both big-name enterprises and ambitious startups bridge the gap between ideas and reality through technology.
          </p>
          <p className="text-lg leading-relaxed font-barlow">
            <span className="text-red-500">/* </span> We are passionate problem solvers and enjoy helping businesses scale with innovative ideas and creative software solutions. Our aim is always to demystify the IT landscape and help new and established businesses build the right technological infrastructure they need to scale their businesses to even greater heights.
          </p>
          <button className="bg-transparent border px-6 py-3 text-red-600 border-red-500 font-semibold hover:bg-white/10 transition flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="h-5 w-5 text-white"
            >
              <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 15H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 8H13z" />
            </svg>
            Presentation .PDF
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

