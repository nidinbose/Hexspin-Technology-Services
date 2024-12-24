import React from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2, 
      duration: 0.6,
      type: 'spring',
    },
  }),
};

const Services = () => {
  const cards = [
    {
      id: 1,
      imgSrc: './Images/\de753278dfba5e383a86a84e35adce48.png',
      title: 'Website Developing',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras auctor ante neque, lacinia finibus.',
    },
    {
      id: 2,
      imgSrc: './Images/\G1.png',
      title: 'Graphic Designing',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras auctor ante neque, lacinia finibus.',
    },
    {
      id: 3,
      imgSrc: 'https://i.pinimg.com/564x/de/75/32/de753278dfba5e383a86a84e35adce48.jpg',
      title: 'UI/UX Designing',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras auctor ante neque, lacinia finibus.',
    },
    {
      id: 4,
      imgSrc: 'https://i.pinimg.com/564x/de/75/32/de753278dfba5e383a86a84e35adce48.jpg',
      title: 'Application Developing',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras auctor ante neque, lacinia finibus.',
    },
  ];

  return (
    <div className='transform md:rotate-[-2deg]'>
     <div className="group transform rotate-2">
     <h1 className="text-white text-6xl text-center mb-9 font-bold font-barlow group-hover:text-red-600 ">
  OUR SE<span className="text-red-600 group-hover:text-white">R</span>VICES
</h1>

</div>

    <div className="h-full bg-black flex justify-center items-center">
    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-12 p-5">
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            className="group perspective"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            style={{
              marginTop: `${index * 2}rem`, 
            }}
          >
            <div className="border p-12 w-80 h-full xl:h-[60vh] border-gray-600 transition-transform duration-500 transform group-hover:rotate-3 transform md:rotate-[-1deg] group-hover:-rotate-y-30 group-hover:scale-105">
              <div className="border border-red-500 p-3">
                <img
                  src={card.imgSrc}
                  alt="Service"
                  className="border p-6 object-cover hover:border-red-500"
                />
              </div>
              <h1 className="text-white text-start mt-12 font-barlow text-xl font-bold">{card.title}</h1>
              <p className="text-white text-start mt-6 font-barlow font-semibold">{card.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Services;

