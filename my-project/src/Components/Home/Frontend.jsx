import React from 'react';

const Frontend = () => {
  const technologies = [
    { src: "https://www.webomindapps.com/images/technologies/bootstrap.jpg", alt: "Bootstrap" },
    { src: "https://www.webomindapps.com/images/technologies/angular.png", alt: "Angular" },
    { src: "https://www.webomindapps.com/images/technologies/tailwind.png", alt: "Tailwind CSS" },
    { src: "https://www.webomindapps.com/images/technologies/css3.png", alt: "CSS3" },
    { src: "https://www.webomindapps.com/images/technologies/g-apis.png", alt: "Google APIs" },
    { src: "https://www.webomindapps.com/images/technologies/wordpress.png", alt: "WordPress" },
    { src: "https://www.webomindapps.com/images/technologies/python.jpg", alt: "Python" },
    { src: "https://www.webomindapps.com/images/technologies/sql.png", alt: "SQL" },
    { src: "https://www.webomindapps.com/images/technologies/react.png", alt: "React" },
    { src: "https://www.webomindapps.com/images/technologies/jquery.png", alt: "jQuery" },
    { src: "https://www.webomindapps.com/images/technologies/node-js.png", alt: "Node.js" },
    { src: "https://www.webomindapps.com/images/technologies/javascript.png", alt: "JavaScript" },
    { src: "https://www.webomindapps.com/images/technologies/vue-js.png", alt: "Vue.js" },
    { src: "https://www.webomindapps.com/images/technologies/web-service.png", alt: "Web Service" },
  ];

  return (
    <div className="bg-gray-100 py-8">
  <div className="container mx-auto px-4">
    <h1 className="text-xl font-semibold text-center mb-4">Frontend Technologies</h1>
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
      {technologies.map((tech, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-md overflow-hidden hover:scale-105 transition-transform duration-200"
        >
          <img
            src={tech.src}
            alt={tech.alt}
            className="w-full h-20 object-contain p-1"
          />
          <p className="text-center text-xs font-medium py-1">{tech.alt}</p>
        </div>
      ))}
    </div>
  </div>
</div>

  );
};

export default Frontend;

