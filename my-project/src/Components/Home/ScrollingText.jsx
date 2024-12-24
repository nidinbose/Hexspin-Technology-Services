import React from 'react';

const ScrollingText = () => {
  return (
    <div className="overflow-hidden w-full bg-black border-t border-b text-white transform rotate-[-3deg] p-3 sm:p-5 mb-6 sm:mb-12 mt-5 sm:mt-7">
      <div className="w-full overflow-hidden">
        <div className="animate-scroll text-base sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl py-2 font-barlow font-bold whitespace-nowrap">
          <span className="text-red-600">WEBSITE</span> DEVELOPMENT -- 
          <span className="text-red-600">UI/UX</span> DESIGNING -- 
          <span className="text-red-600">GRAPHIC</span> DESIGNING -- 
          <span className="text-red-600">LOGO</span> DESIGNING -- 
          <span className="text-red-600">APPLICATION</span> DEVELOPMENT --  
          <span className="text-red-600">HEXSPIN</span> CODES --
        </div>
      </div>
    </div>
  );
};

export default ScrollingText;

