import React, { useEffect, useState } from "react"
import { getAllStations } from "../utils/ApiFunctions"
import { Link } from "react-router-dom"
import { Card, Carousel, Col, Container, Row } from "react-bootstrap"

const StationCarousel = () => {
	const [stations, setStations] = useState([{ id: "", stationType: "", stationPrice: "", photo: "" }])
	const [errorMessage, setErrorMessage] = useState("")
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		setIsLoading(true)
		getAllStations()
			.then((data) => {
				setStations(data)
				setIsLoading(false)
			})
			.catch((error) => {
				setErrorMessage(error.message)
				setIsLoading(false)
			})
	}, [])

	if (isLoading) {
		return <div className="mt-5">Loading stations....</div>
	}
	if (errorMessage) {
		return <div className=" text-danger mb-5 mt-5">Error : {errorMessage}</div>
	}

	return (
		<section className="bg-light mb-5 mt-5 shadow">
			<Link to={"/browse-all-stations"} className="hote-color text-center">
				Browse all stations
			</Link>

			<Container>
				<Carousel indicators={false}>
					{[...Array(Math.ceil(stations.length / 4))].map((_, index) => (
						<Carousel.Item key={index}>
							<Row>
								{stations.slice(index * 4, index * 4 + 4).map((station) => (
									<Col key={station.id} className="mb-4" xs={12} md={6} lg={3}>
										<Card>
											<Link to={`/book-station/${station.id}`}>
												<Card.Img
													variant="top"
													src={`data:image/png;base64, ${station.photo}`}
													alt="Station Photo"
													className="w-100"
													style={{ height: "200px" }}
												/>
											</Link>
											<Card.Body>
												<Card.Title className="hotel-color">{station.stationType}</Card.Title>
												<Card.Title className="station-price">{station.stationPrice}DT / 24 hours</Card.Title>
												<div className="flex-shrink-0">
													<Link to={`/book-station/${station.id}`} className="btn btn-hotel btn-sm">
														Book Now
													</Link>
												</div>
											</Card.Body>
										</Card>
									</Col>
								))}
							</Row>
						</Carousel.Item>
					))}
				</Carousel>
			</Container>
		</section>
	)
}

export default StationCarousel