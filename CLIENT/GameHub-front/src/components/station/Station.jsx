import React, { useEffect, useState } from "react"
import { getAllStations } from "../utils/ApiFunctions"
import StationCard from "./StationCard"
import { Col, Container, Row } from "react-bootstrap"
import StationFilter from "../common/StationFilter"
import StationPaginator from "../common/StationPaginator"

const Station = () => {
	const [data, setData] = useState([])
	const [error, setError] = useState(null)
	const [isLoading, setIsLoading] = useState(false)
	const [currentPage, setCurrentPage] = useState(1)
	const [stationsPerPage] = useState(6)
	const [filteredData, setFilteredData] = useState([{ id: "" }])

	useEffect(() => {
		setIsLoading(true)
		getAllStations()
			.then((data) => {
				setData(data)
				setFilteredData(data)
				setIsLoading(false)
			})
			.catch((error) => {
				setError(error.message)
				setIsLoading(false)
			})
	}, [])
	if (isLoading) {
		return <div>Loading stations.....</div>
	}
	if (error) {
		return <div className=" text-danger">Error : {error}</div>
	}

	const handlePageChange = (pageNumber) => {
		setCurrentPage(pageNumber)
	}

	const totalPages = Math.ceil(filteredData.length / stationsPerPage)

	const renderStations = () => {
		const startIndex = (currentPage - 1) * stationsPerPage
		const endIndex = startIndex + stationsPerPage
		return filteredData
			.slice(startIndex, endIndex)
			.map((station) => <StationCard key={station.id} station={station} />)
	}

	return (
		<Container>
			<Row>
				<Col md={6} className="mb-3 mb-md-0">
					<StationFilter data={data} setFilteredData={setFilteredData} />
				</Col>

				<Col md={6} className="d-flex align-items-center justify-content-end">
					<StationPaginator
						currentPage={currentPage}
						totalPages={totalPages}
						onPageChange={handlePageChange}
					/>
				</Col>
			</Row>

			<Row>{renderStations()}</Row>

			<Row>
				<Col md={6} className="d-flex align-items-center justify-content-end">
					<StationPaginator
						currentPage={currentPage}
						totalPages={totalPages}
						onPageChange={handlePageChange}
					/>
				</Col>
			</Row>
		</Container>
	)
}

export default Station