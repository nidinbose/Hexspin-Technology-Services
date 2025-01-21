import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Components/Home'
import AddServices from './Components/AdminHandle/AddServices'
import AddProjects from './Components/AdminHandle/AddProjects'
import AddReview from './Components/AdminHandle/AddReview'
import Editservice from './Components/AdminHandle/Editservice'
import Servicelist from './Components/AdminHandle/Servicelist'
import Viewservices from './Components/AdminHandle/Viewservices'
import Admin from './Components/AdminHandle/Admin'
import Projectlist from './Components/AdminHandle/Projectlist'
import Viewprojects from './Components/AdminHandle/Viewprojects'

const App = () => {
  return (
    <div >

     <BrowserRouter>
     <Routes>

        <Route path='/' Component={Home}/>
        <Route path='/AddServices' Component={AddServices}/>
        <Route path='/AddProjects' Component={AddProjects}/>
        <Route path='/AddReview' Component={AddReview}/>
        <Route path='/editservices/:id' Component={Editservice}/>
        <Route path='/servicelist' Component={Servicelist}/>
        <Route path='/projectlist' Component={Projectlist}/>
        <Route path='/viewprojects/:id' Component={Viewprojects}/>
        <Route path='/viewservice/:id' Component={Viewservices}/>
        <Route path='/admin' Component={Admin}/>



        
     </Routes>
     
     </BrowserRouter>

    </div>
  )
}

export default App