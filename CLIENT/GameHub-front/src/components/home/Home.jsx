import React, { useContext } from "react"
import MainHeader from "../layout/MainHeader"
import GamehubService from "../common/GamehubService"
import { useLocation } from "react-router-dom"
import Parallax from "../common/Parallax"
import StationCarousel from "../common/StationCarousel"
import StationSearch from "../common/StationSearch"
import { useAuth } from "../auth/AuthProvider"

const Home = () => {
	 const location = useLocation()

	const message = location.state && location.state.message
	const currentUser = localStorage.getItem("userId") 
	return (
		<section>

			{message && <p className="text-warning px-5">{message}</p>}
			{currentUser && (
				<h6 className="text-success text-center"> You are logged-In as {currentUser}</h6>
			)}
		
		<MainHeader />
		<div className="container">
			<StationSearch />
			<StationCarousel />
			<Parallax />
			<StationCarousel />
			<GamehubService />
			<Parallax />
			<StationCarousel />
		</div>
		</section>
	)
	
}

export default Home