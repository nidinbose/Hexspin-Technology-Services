import React from 'react'
import Navbar from './Navbar/Navbar'
import Headers from './Home/Headers'
// import Team from './Team/Team'
import Services from './Home/Services'
import GoogleReview from './Home/GoogleReview'
import BuildFor from './Home/BuildFor'
import About from './Home/About'
import ScrollingText from './Home/ScrollingText'
import Projects from './Home/Projects'
import Frontend from './Home/Frontend'
import Xscroll from './Home/Xscroll'
import Yscroll from './Home/Yscroll'
import Why from './Home/Why'

const Home = () => {
  return (
    <div className='bg-black pb-[50vh] overflow-x-hidden'>

<Navbar/>
<Headers/>
<ScrollingText/>
<About/>
<Services/>
{/* <Yscroll/> */}


<BuildFor/>
<Projects/>



<GoogleReview/>
<Frontend/>
<Xscroll/>
<Why/>


    </div>
  )
}

export default Home