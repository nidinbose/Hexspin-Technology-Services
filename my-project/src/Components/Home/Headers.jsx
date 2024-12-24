import React from 'react'
import { BsFillCaretRightFill } from "react-icons/bs";

const Headers = () => {
  return (
    <div>
  <div className="min-h-full p-6 sm:p-8 md:p-10">
  <h1 className="text-white flex flex-col md:flex-row gap-4 items-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center md:text-left pl-6">
    ACHIEVE YOUR BUSINESS AND
    <div className="flex text-red-600 items-center">
      <BsFillCaretRightFill />
      <BsFillCaretRightFill />
      <BsFillCaretRightFill />
      <BsFillCaretRightFill />
      <BsFillCaretRightFill />
    </div>
  </h1>
  <h2 className="text-white text-xl pl-6 sm:text-2xl md:text-3xl lg:text-4xl font-bold md:mt-6 text-center md:text-left">
    TECHNOLOGY GOALS{" "}
    <span className="text-red-600">FASTER</span> WITH OUR{" "}
    <br className="hidden sm:block" />
    LEADING TEAM OF HEXSPIN EXPERTS
  </h2>
</div>


         
        <div className='grid grid-cols-1 md:grid-cols-2 text-white p-6'>
         <div>
          
         </div>

            <div>
              <img src="https://www.y-axis.com/assets/cms/2023-09/Counseling.webp" alt="" />
            </div>

        </div>
    </div>
  )
}

export default Headers