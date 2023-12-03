import React, { useEffect, useState } from "react"
import { deleteStation, getAllStations } from "../utils/ApiFunctions"
import { Col, Row } from "react-bootstrap"
import StationFilter from "../common/StationFilter"
import StationPaginator from "../common/StationPaginator"
import { FaEdit, FaEye, FaPlus, FaTrashAlt } from "react-icons/fa"
import { Link } from "react-router-dom"

const ExistingStations = () => {
	const [stations, setStations] = useState([{ id: "", stationType: "", stationPrice: "" }])
	const [currentPage, setCurrentPage] = useState(1)
	const [stationsPerPage] = useState(8)
	const [isLoading, setIsLoading] = useState(false)
	const [filteredStations, setFilteredStations] = useState([{ id: "", stationType: "", stationPrice: "" }])
	const [selectedStationType, setSelectedStationType] = useState("")
	const [errorMessage, setErrorMessage] = useState("")
	const [successMessage, setSuccessMessage] = useState("")

	useEffect(() => {
		fetchStations()
	}, [])

	const fetchStations = async () => {
		setIsLoading(true)
		try {
			const result = await getAllStations()
			setStations(result)
			setIsLoading(false)
		} catch (error) {
			setErrorMessage(error.message)
			setIsLoading(false)
		}
	}

	useEffect(() => {
		if (selectedStationType === "") {
			setFilteredStations(stations)
		} else {
			const filteredStations = stations.filter((station) => station.stationType === selectedStationType)
			setFilteredStations(filteredStations)
		}
		setCurrentPage(1)
	}, [stations, selectedStationType])

	const handlePaginationClick = (pageNumber) => {
		setCurrentPage(pageNumber)
	}

	const handleDelete = async (stationId) => {
		try {
			const result = await deleteStation(stationId)
			if (result === "") {
				setSuccessMessage(`Station No ${stationId} was delete`)
				fetchStations()
			} else {
				console.error(`Error deleting station : ${result.message}`)
			}
		} catch (error) {
			setErrorMessage(error.message)
		}
		setTimeout(() => {
			setSuccessMessage("")
			setErrorMessage("")
		}, 3000)
	}

	const calculateTotalPages = (filteredStations, stationsPerPage, stations) => {
		const totalStations = filteredStations.length > 0 ? filteredStations.length : stations.length
		return Math.ceil(totalStations / stationsPerPage)
	}

	const indexOfLastStation = currentPage * stationsPerPage
	const indexOfFirstStation = indexOfLastStation - stationsPerPage
	const currentStations = filteredStations.slice(indexOfFirstStation, indexOfLastStation)

	return (
		<>
			<div className="container col-md-8 col-lg-6">
				{successMessage && <p className="alert alert-success mt-5">{successMessage}</p>}

				{errorMessage && <p className="alert alert-danger mt-5">{errorMessage}</p>}
			</div>

			{isLoading ? (
				<p>Loading existing stations</p>
			) : (
				<>
					<section className="mt-5 mb-5 container">
						<div className="d-flex justify-content-between mb-3 mt-5">
							<h2>Existing Stations</h2>
						</div>

						<Row>
							<Col md={6} className="mb-2 md-mb-0">
								<StationFilter data={stations} setFilteredData={setFilteredStations} />
							</Col>

							<Col md={6} className="d-flex justify-content-end">
								<Link to={"/add-station"}>
									<FaPlus /> Add Station
								</Link>
							</Col>
						</Row>

						<table className="table table-bordered table-hover">
							<thead>
								<tr className="text-center">
									<th>ID</th>
									<th>Station Type</th>
									<th>Station Price</th>
									<th>Actions</th>
								</tr>
							</thead>

							<tbody>
								{currentStations.map((station) => (
									<tr key={station.id} className="text-center">
										<td>{station.id}</td>
										<td>{station.stationType}</td>
										<td>{station.stationPrice}</td>
										<td className="gap-2">
											<Link to={`/edit-station/${station.id}`} className="gap-2">
												<span className="btn btn-info btn-sm">
													<FaEye />
												</span>
												<span className="btn btn-warning btn-sm ml-5">
													<FaEdit />
												</span>
											</Link>
											<button
												className="btn btn-danger btn-sm ml-5"
												onClick={() => handleDelete(station.id)}>
												<FaTrashAlt />
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
						<StationPaginator
							currentPage={currentPage}
							totalPages={calculateTotalPages(filteredStations, stationsPerPage, stations)}
							onPageChange={handlePaginationClick}
						/>
					</section>
				</>
			)}
		</>
	)
}

export default ExistingStations