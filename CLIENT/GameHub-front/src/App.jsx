import React from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "/node_modules/bootstrap/dist/js/bootstrap.min.js"
import ExistingStations from "./components/station/ExistingStations"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/home/Home"
import EditStation from "./components/station/EditStation"
import AddStation from "./components/station/AddStation"
import NavBar from "./components/layout/NavBar"
import Footer from "./components/layout/Footer"
import StationListing from "./components/station/StationListing"
import Admin from "./components/admin/Admin"
import Checkout from "./components/booking/Checkout"
import BookingSuccess from "./components/booking/BookingSuccess"
import Bookings from "./components/booking/Bookings"
import FindBooking from "./components/booking/FindBooking"
import Login from "./components/auth/Login"
import Registration from "./components/auth/Registration"
import Profile from "./components/auth/Profile"
import { AuthProvider } from "./components/auth/AuthProvider"
import RequireAuth from "./components/auth/RequireAuth"

function App() {
	return (
		<AuthProvider>
			<main>
				<Router>
					<NavBar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/edit-station/:stationId" element={<EditStation />} />
						<Route path="/existing-stations" element={<ExistingStations />} />
						<Route path="/add-station" element={<AddStation />} />

						<Route
							path="/book-station/:stationId"
							element={
								<RequireAuth>
									<Checkout />
								</RequireAuth>
							}
						/>
						<Route path="/browse-all-stations" element={<StationListing />} />

						<Route path="/admin" element={<Admin />} />
						<Route path="/booking-success" element={<BookingSuccess />} />
						<Route path="/existing-bookings" element={<Bookings />} />
						<Route path="/find-booking" element={<FindBooking />} />

						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Registration />} />

						<Route path="/profile" element={<Profile />} />
						<Route path="/logout" element={<FindBooking />} />
					</Routes>
				</Router>
				<Footer />
			</main>
		</AuthProvider>
	)
}

export default App
