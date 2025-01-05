import React from 'react';
import { motion } from 'framer-motion';

const Frontend = () => {
  const items = [
    {
      title: 'Languages',
      list: [
        { name: 'HTML', logo: '/images/html-logo.png' },
        { name: 'CSS', logo: '/images/css-logo.png' },
        { name: 'JavaScript', logo: '/images/js-logo.png' },
        { name: 'TypeScript', logo: '/images/ts-logo.png' },
      ],
      logo: '/images/languages-logo.png',
    },
    {
      title: 'Frameworks',
      list: [
        { name: 'Bootstrap', logo: '/images/bootstrap-logo.png' },
        { name: 'Tailwind', logo: '/images/tailwind-logo.png' },
        { name: 'Iconic', logo: '/images/iconic-logo.png' },
        { name: 'SCSS', logo: '/images/scss-logo.png' },
      ],
      logo: '/images/frameworks-logo.png',
    },
    {
      title: 'Libraries',
      list: [
        { name: 'React', logo: '/images/react-logo.png' },
        { name: 'Redux', logo: '/images/redux-logo.png' },
        { name: 'GraphQL', logo: '/images/graphql-logo.png' },
        { name: 'Apollo', logo: '/images/apollo-logo.png' },
      ],
      logo: '/images/libraries-logo.png',
    },
    {
      title: 'Tools',
      list: [
        { name: 'Webpack', logo: '/images/webpack-logo.png' },
        { name: 'Jest', logo: '/images/jest-logo.png' },
        { name: 'Prettier', logo: '/images/prettier-logo.png' },
        { name: 'TypeScript', logo: '/images/ts-logo.png' },
      ],
      logo: '/images/tools-logo.png',
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  const listItemVariants = {
    hover: { scale: 1.1, x: 5, transition: { type: 'spring', stiffness: 200 } },
    rest: { scale: 1, x: 0 },
  };

  return (
    <div className="flex flex-col items-center py-10 bg-gradient-to-b from-gray-100 to-gray-300">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">Frontend Skills</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 px-4 max-w-5xl">
        {items.map((item, index) => (
          <motion.div
            key={item.title}
            className="p-6 rounded-lg shadow-lg bg-white flex flex-col items-center"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Category Logo */}
            <motion.img
              src={item.logo}
              alt={item.title}
              className="w-20 h-20 mb-4"
              initial={{ rotate: 0 }}
              whileHover={{ rotate: 10 }}
            />
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{item.title}</h2>
            <ul className="grid grid-cols-2 gap-4">
              {item.list.map((lang, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-center text-gray-600 text-lg"
                  variants={listItemVariants}
                  whileHover="hover"
                  initial="rest"
                >
                  <img src={lang.logo} alt={lang.name} className="w-6 h-6 mr-2" />
                  {lang.name}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Frontend;
