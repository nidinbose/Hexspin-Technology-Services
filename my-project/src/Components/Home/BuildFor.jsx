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
        {cardData.map((card, index) => (
          <motion.div
            key={card.id}
            className="relative flex flex-col items-center group transform transition-transform hover:scale-105"
            initial={{ opacity: 0, x: index % 2 === 0 ? -200 : 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            {/* Image with shadow */}
            <div className="relative w-full mb-6 p-2 group-hover:scale-105 transition-transform">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-shadow"
              />
            </div>
            {/* Card content */}
            <div className="border p-6 sm:p-8 bg-gray-800/80 rounded-lg w-full max-w-xs sm:max-w-sm lg:max-w-md hover:border-red-600 hover:shadow-xl hover:shadow-red-600 transition-all">
              <h1 className="text-center text-lg sm:text-xl font-bold text-red-500 mb-4">
                {card.title}
              </h1>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
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

