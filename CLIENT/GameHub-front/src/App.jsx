import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "bootstrap/dist/js/bootstrap.min.js"
import AddStation from './components/station/addStation'
import ExistingStations from './components/station/ExistingStations';
import EditStation from './components/station/EditStation';
import Home from './components/home/Home';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (

       <>
       <main>
       
        
        <Router> 
        <NavBar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/edit-station/:stationId" element={<EditStation/>} />
            <Route path="/existing-stations" element={<ExistingStations/>} />
            <Route path="/add-station" element={<AddStation/>} />

          </Routes>   
          <Footer/>
        </Router>
      
        </main>
      
        </>
    
  )
}

export default App
