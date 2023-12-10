import React from "react"
import MainHeader from "../layout/MainHeader"
import GamehubService from "../common/GamehubService"
import { useLocation } from "react-router-dom"
import Parallax from "../common/Parallax"
import StationCarousel from "../common/StationCarousel"
const Home = () => {
	/* const location = useLocation()

	const message = location.state && location.state.message
	const currentUser = localStorage.getItem("userId") */
	return (
		<section>
			<div className="black-background">
				<MainHeader />
				<div className="container">
					<StationCarousel />
					<Parallax />
					<GamehubService />
					<StationCarousel />
				</div>
			</div>
		</section>
	)
	
}

export default Home