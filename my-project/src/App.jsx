import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Components/Home'

const App = () => {
  return (
    <div >

     <BrowserRouter>
     <Routes>

        <Route path='/' Component={Home}/>
        
     </Routes>
     
     </BrowserRouter>

    </div>
  )
}

export default App