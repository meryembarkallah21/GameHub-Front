import React, { useContext } from "react"
import { Card, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

const StationCard = ({ station }) => {
	return (
		<Col key={station.id} className="mb-4" xs={12}>
			<Card>
				<Card.Body className="d-flex flex-wrap align-items-center">
					<div className="flex-shrrink-0 mr-3 mb-3 mb-md-0">
						<Link to={`/book-station/${station.id}`}>
							<Card.Img
								variant="top"
								src={`data:image/png;base64, ${station.photo}`}
								alt="Station Photo"
								style={{ width: "100%", maxWidth: "200px", height: "auto" }}
							/>
						</Link>
					</div>
					<div className="flex-grow-1 ml-3 px-5">
						<Card.Title className="hotel-color">{station.stationType}</Card.Title>
						<Card.Title className="station-price">{station.stationPrice}DT / 24 hours </Card.Title>
						<Card.Text>Some station information goes here for the guest to read through</Card.Text>
					</div>
					<div className="flex-shrink-0 mt-3">
						<Link to={`/book-station/${station.id}`} className="btn btn-hotel btn-sm">
							Book Now
						</Link>
					</div>
				</Card.Body>
			</Card>
		</Col>
	)
}

export default StationCard