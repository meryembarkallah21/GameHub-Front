import React, { useEffect, useState } from "react"
import BookingForm from "../booking/BookingForm"
import {
    FaUtensils,
    FaWifi,
    FaTv,
    FaWineGlassAlt,
    FaParking,
    FaTshirt,
    FaHeadphones
} from "react-icons/fa";


import { useParams } from "react-router-dom"
import { getStationById } from "../utils/ApiFunctions"
import StationCarousel from "../common/StationCarousel"

const Checkout = () => {
	const [error, setError] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const [stationInfo, setStationInfo] = useState({
		photo: "",
		stationType: "",
		stationPrice: ""
	})

	const { stationId } = useParams()

	useEffect(() => {
		setTimeout(() => {
			getStationById(stationId)
				.then((response) => {
					setStationInfo(response)
					setIsLoading(false)
				})
				.catch((error) => {
					setError(error)
					setIsLoading(false)
				})
		}, 1000)
	}, [stationId])

	return (
		<div>
			<section className="container">
				<div className="row">
					<div className="col-md-4 mt-5 mb-5">
						{isLoading ? (
							<p>Loading station information...</p>
						) : error ? (
							<p>{error}</p>
						) : (
							<div className="station-info">
								<img
									src={`data:image/png;base64,${stationInfo.photo}`}
									alt="Station photo"
									style={{ width: "100%", height: "200px" }}
								/>
								<table className="table table-bordered">
									<tbody>
										<tr>
											<th>Station Type:</th>
											<td>{stationInfo.stationType}</td>
										</tr>
										<tr>
											<th>Price per night:</th>
											<td> {stationInfo.stationPrice} DT</td>
										</tr>
										<tr>
											<th>Station Service:</th>
											<td>
												<ul className="list-unstyled">
                                                <li>
    <FaWifi /> Fiber Optic Gaming Network
</li>
<li>
    <FaTv /> Netflix Pass Included
</li>
<li>
    <FaUtensils /> Breakfast Buffet
</li>
<li>
    <FaWineGlassAlt /> Energy Drinks
</li>
<li>
    <FaParking /> Secure Zone Parking
</li>
<li>
    <FaTshirt /> FREE Game-themed Hoodies
</li>
<li>
    <FaHeadphones /> High-Resolution Projector 
</li>



												</ul>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						)}
					</div>
					<div className="col-md-8">
						<BookingForm />
					</div>
				</div>
			</section>
			<div className="container">
				<StationCarousel />
			</div>
		</div>
	)
}
export default Checkout