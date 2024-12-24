import React from 'react'
import './Css/About.css'

const About = () => {
  return (
    <div>
           <h1 className="text-white text-6xl text-center mb-9 font-bold font-barlow group-hover:text-red-600 ">
  ABOUT<span className="text-red-600 group-hover:text-white">US</span>
</h1>
    <div className='grid grid-cols-1 mda;grid-cols-2'>

    <div className="image-container relative">
  <img
    src="https://i.pinimg.com/564x/de/75/32/de753278dfba5e383a86a84e35adce48.jpg"
    alt=""
    className="image image-1"
  />
  <img
    src="https://i.pinimg.com/564x/de/75/32/de753278dfba5e383a86a84e35adce48.jpg"
    alt=""
    className="image image-2"
  />
  <img
    src="https://i.pinimg.com/564x/de/75/32/de753278dfba5e383a86a84e35adce48.jpg"
    alt=""
    className="image image-3"
  />
</div>

<div>
  hlo
</div>

    </div>
    </div>
  )
}

export default About