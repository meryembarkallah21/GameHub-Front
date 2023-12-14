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
import StationListing from './components/station/StationListing';
import Admin from './components/admin/Admin';
import BookingForm from './components/booking/BookingForm';
import BookingSuccess from './components/booking/BookingSuccess';
import Checkout from './components/booking/Checkout';
import Bookings from './components/booking/Bookings';
import FindBooking from './components/booking/FindBooking';

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
            <Route path="/browse-all-stations" element={<StationListing/>} />
            <Route path="/admin" element={<Admin/>} />
            <Route path="/book-station/:stationId"element={<Checkout/>}/>
            <Route path="/booking-success" element={<BookingSuccess/>} />
            <Route path="/existing-bookings" element={<Bookings/>} />
            <Route path="/find-booking" element={<FindBooking/>} />

          </Routes>   
          <Footer/>
        </Router>
      


     
      
        </main>
      
        </>
    
  )
}

export default App
