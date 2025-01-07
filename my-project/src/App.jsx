import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Components/Home'
import AddServices from './Components/AdminHandle/AddServices'
import AddProjects from './Components/AdminHandle/AddProjects'
import AddReview from './Components/AdminHandle/AddReview'

const App = () => {
  return (
    <div >

     <BrowserRouter>
     <Routes>

        <Route path='/' Component={Home}/>
        <Route path='/AddServices' Component={AddServices}/>
        <Route path='/AddProjects' Component={AddProjects}/>
        <Route path='/AddReview' Component={AddReview}/>


        
     </Routes>
     
     </BrowserRouter>

    </div>
  )
}

export default App