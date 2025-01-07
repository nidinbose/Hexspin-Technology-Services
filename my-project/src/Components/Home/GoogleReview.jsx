import React, { useRef, useState, useEffect } from "react";
import "./Css/GoogleReview.css";
import axios from "axios";

const GoogleReview = () => {
  const reviewContainer = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reviews,setReviews]=useState([])


  const getReview=async()=>{
    console.log(reviews);
    const res=await axios.get("http://localhost:3005/api/getreview")
    console.log(res.data);
    setReviews([...res.data])
    
    
  }
   useEffect(()=>{
    getReview();
   },[])



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

  const updateIndex = (direction) => {
    setCurrentIndex((prevIndex) => {
      if (direction === "left") {
        return prevIndex === 0 ? reviews.length - 1 : prevIndex - 1;
      } else {
        return (prevIndex + 1) % reviews.length;
      }
    });
  };

  useEffect(() => {
    const autoSlide = setInterval(() => {
      scrollReviews("right");
    }, 5000);

    return () => clearInterval(autoSlide);
  }, []);

  return (
    <div className="p-6 sm:p-8 border-t-2 border-b-2 border-gray-300 mt-12 relative mb-12 transform rotate-[-3deg]">
      <h1 className="text-white text-6xl text-center font-extrabold font-barlow mb-7">
        Google Reviews
      </h1>
      <div className="relative">
        <div
          ref={reviewContainer}
          className="flex gap-6 overflow-x-auto pb-6 scroll-smooth snap-x snap-mandatory space-x-6 scrollbar-hide"
        >
          {reviews.map((review) => (
            <div
              key={review.id}
              className="border border-gray-300 p-4 flex-shrink-0 snap-center w-[80%] sm:w-[60%] md:w-[50%] lg:w-[30%] bg-tranparant hover:border-red-500"
            >
              <div className="flex flex-col items-center text-center p-5 space-y-4 border hover:border-red-500">
                <img
                  src={review.photo}
                  alt={review.name}
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-2 border-red-500 p-2"
                />
                <div>
                  <h1 className="text-lg sm:text-xl font-semibold text-gray-800">
                    {review.name}
                  </h1>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {review.role}
                  </p>
                  <p className="text-gray-600 mt-2 text-sm sm:text-base">
                    "{review.content}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
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

        <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200">
          <div
            className="h-full bg-red-500 transition-all duration-500"
            style={{ width: `${((currentIndex + 1) / reviews.length) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default GoogleReview;
