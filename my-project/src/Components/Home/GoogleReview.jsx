import React, { useRef, useState, useEffect } from "react";
import './Css/GoogleReview.css'

const GoogleReview = () => {
  const reviewContainer = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalReviews = 6;

  // Function to scroll reviews to the left or right
  const scrollReviews = (direction) => {
    if (reviewContainer.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      reviewContainer.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
      updateIndex(direction);
    }
  };

  // Update the current index
  const updateIndex = (direction) => {
    setCurrentIndex((prevIndex) => {
      if (direction === "left") {
        return prevIndex === 0 ? totalReviews - 1 : prevIndex - 1;
      } else {
        return (prevIndex + 1) % totalReviews;
      }
    });
  };

  // Auto-sliding reviews every 5 seconds
  useEffect(() => {
    const autoSlide = setInterval(() => {
      scrollReviews("right");
    }, 5000);

    return () => clearInterval(autoSlide);
  }, []);

  return (
    <div className="p-6 sm:p-8 border-t-2 border-b-2 border-gray-300 mt-12 relative mb-12 transform rotate-[-3deg]">
      <h1 className="text-white text-6xl text-center font-extrabold font-barlow mb-7">Google Reviews</h1> 
      <div className="relative">
        {/* Review Cards Container */}
        <div
          ref={reviewContainer}
          className="flex gap-6 overflow-x-auto pb-6 scroll-smooth snap-x snap-mandatory space-x-6 scrollbar-hide"
        >
          {[...Array(totalReviews)].map((_, index) => (
            <div
              key={index}
              className="border border-gray-300 p-4 flex-shrink-0 snap-center w-[80%] sm:w-[60%] md:w-[50%] lg:w-[30%] bg-tranparant hover:border-red-500"
            >
              <div className="flex flex-row items-center text-center p-5 space-y-4 border hover:border-red-500 p-5">
                <img
                  src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
                  alt="Profile"
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-2 border-red-500 p-2"
                />
                <div>
                  <h1 className="text-lg sm:text-xl font-semibold text-gray-800">
                    Samuel Wilson
                  </h1>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Creative Director at{" "}
                    <span className="text-red-500">DDagency</span>
                  </p>
                  <p className="text-gray-600 mt-2 text-sm sm:text-base">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent in fermentum ex. Curabitur auctor lorem vitae dui
                    mollis volutpat."
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Buttons */}
   <div className="flex ">

   <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-4 pb-4">
          <button
            onClick={() => scrollReviews("left")}
            className="bg-red-500 text-white p-2 rounded-full hover:bg-red-700 transition"
          >
            &#8592;
          </button>
          <button
            onClick={() => scrollReviews("right")}
            className="bg-red-500 text-white p-2 rounded-full hover:bg-red-700 transition"
          >
            &#8594;
          </button>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200">
          <div
            className="h-full w-20 bg-red-500 transition-all duration-500"
            style={{ width: `${((currentIndex + 1) / totalReviews) * 100}%` }}
          ></div>
        </div>
   </div>
      </div>
    </div>
  );
};

export default GoogleReview;
