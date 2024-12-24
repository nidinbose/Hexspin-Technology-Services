import React from 'react'
import Navbar from './Navbar/Navbar'
import Headers from './Home/Headers'
import Team from './Team/Team'
import Services from './Home/Services'
import GoogleReview from './Home/GoogleReview'
import BuildFor from './Home/BuildFor'
import About from './Home/About'
import ScrollingText from './Home/ScrollingText'
import Projects from './Home/Projects'

const Home = () => {
  return (
    <div className='bg-black pb-[50vh] overflow-x-hidden'>

<Navbar/>
<Headers/>
<ScrollingText/>
<About/>
<Services/>

{/* <BuildFor/> */}
{/* <Projects/> */}



{/* <GoogleReview/> */}

    </div>
  )
}

export default Home