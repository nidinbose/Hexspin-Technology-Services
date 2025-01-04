import React from 'react';
import { motion } from 'framer-motion';

const Frontend = () => {
  const items = [
    {
      title: 'Languages',
      list: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
      logo: '/images/languages.png', // Example image path
    },
    {
      title: 'Frameworks',
      list: ['Bootstrap', 'Tailwind', 'Iconic', 'SCSS'],
      logo: '/images/frameworks.png', // Example image path
    },
    {
      title: 'Libraries',
      list: ['React', 'Redux', 'GraphQL', 'Apollo'],
      logo: '/images/libraries.png', // Example image path
    },
    {
      title: 'Tools',
      list: ['Webpack', 'Just', 'Prettier', 'TypeScript'],
      logo: '/images/tools.png', // Example image path
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const imageVariants = {
    hover: { scale: 1.1, rotate: 5 },
    rest: { scale: 1, rotate: 0 },
  };

  return (
    <div className="flex flex-col items-center py-10 bg-gradient-to-b from-gray-100 to-gray-300">
      <h1 className="text-4xl font-bold text-red-600 mb-8">Frontend Skills</h1>
      <div className="relative w-full max-w-5xl">
        {items.map((item, index) => (
          <motion.div
            key={item.title}
            className={`flex items-center mb-10 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.4 }}
          >
            {/* Animated Logo */}
            <motion.img
              src={item.logo}
              alt={item.title}
              className="w-24 h-24 rounded-full shadow-lg"
              variants={imageVariants}
              whileHover="hover"
              initial="rest"
            />

            {/* Card */}
            <motion.div
              className="relative w-2/3 ml-5 p-6 rounded-lg shadow-xl bg-white"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">{item.title}</h2>
              <ul className="list-disc pl-5">
                {item.list.map((lang, idx) => (
                  <li key={idx} className="text-gray-600 text-lg">
                    {lang}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Frontend;
