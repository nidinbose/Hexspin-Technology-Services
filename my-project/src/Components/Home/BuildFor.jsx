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
      title: "Fashion",
      description:
        "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      image: "https://i.pinimg.com/564x/de/75/32/de753278dfba5e383a86a84e35adce48.jpg",
    },
    {
      id: 4,
      title: "Fashion",
      description:
        "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      image: "https://i.pinimg.com/564x/de/75/32/de753278dfba5e383a86a84e35adce48.jpg",
    },
  ];

  return (
    <div className="py-12 bg-black">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl text-red-600 font-barlow text-center mb-10 font-bold">
        What We Do ...
      </h1>
      <div className="px-6 sm:px-12 lg:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardData.map((card) => (
          <motion.div
            key={card.id}
            className="flex flex-col items-center bg-gray-800/80 border border-gray-700 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 hover:border-red-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Image */}
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-48 sm:h-64 object-cover"
            />
            {/* Content */}
            <div className="p-6">
              <h1 className="text-lg sm:text-xl font-bold text-red-500 mb-4 text-center">
                {card.title}
              </h1>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed text-center">
                {card.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BuildFor;
