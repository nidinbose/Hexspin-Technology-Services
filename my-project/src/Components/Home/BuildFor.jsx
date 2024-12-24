import React from 'react';
import { motion } from 'framer-motion';

const BuildFor = () => {
  const cardData = [
    {
      id: 1,
      title: "E-Commerce",
      description:
        "Text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      image: "https://i.pinimg.com/564x/de/75/32/de753278dfba5e383a86a84e35adce48.jpg",
    },
    {
      id: 2,
      title: "Productivity",
      description:
        "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. The leap into electronic typesetting, remaining essentially.",
      image: "https://i.pinimg.com/564x/de/75/32/de753278dfba5e383a86a84e35adce48.jpg",
    },
    {
      id: 3,
      title: "Fashon",
      description:
        "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      image: "https://i.pinimg.com/564x/de/75/32/de753278dfba5e383a86a84e35adce48.jpg",
    },
  ];

  return (
    <div>
        <h1 className='text-7xl text-red-600 font-barlow  p-10 mb-8 font-bold'>What we do .....</h1>
    <div className="p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
       
      {cardData.map((card, index) => (
        <motion.div
          key={card.id}
          className="relative flex justify-center"
          initial={{ opacity: 0, x: index % 2 === 0 ? -200 : 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
        >
          {/* Image */}
          <img
            src={card.image}
            alt={card.title}
            className="w-28 h-14 sm:w-40 sm:h-20 absolute top-[-5vh] left-1 border"
          />
          {/* Card */}
          <div className="border border-red-500 p-5 sm:p-7 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto bg-white/10">
            <h1 className="text-red-500 text-center mb-4 sm:mb-6 text-lg sm:text-xl font-barlow font-bold text-2xl">{card.title}</h1>
            <div className="border p-7 sm:p-9 bg-black">
              <p className="text-white text-sm sm:text-md font-barlow leading-relaxed">
                {card.description}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
    </div>
  );
};

export default BuildFor;

