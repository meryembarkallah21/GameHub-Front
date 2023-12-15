import React, { useState } from "react"
import StationCard from "../station/StationCard"
import { Button, Row } from "react-bootstrap"
import StationPaginator from "./StationPaginator"

const StationSearchResults = ({ results, onClearSearch }) => {
	const [currentPage, setCurrentPage] = useState(1)
	const resultsPerPage = 3
	const totalResults = results.length
	const totalPages = Math.ceil(totalResults / resultsPerPage)

	const handlePageChange = (pageNumber) => {
		setCurrentPage(pageNumber)
	}

	const startIndex = (currentPage - 1) * resultsPerPage
	const endIndex = startIndex + resultsPerPage
	const paginatedResults = results.slice(startIndex, endIndex)

	return (
		<>
			{results.length > 0 ? (
				<>
					<h5 className="text-center mt-5">Search Results</h5>
					<Row>
						{paginatedResults.map((station) => (
							<StationCard key={station.id} station={station} />
						))}
					</Row>
					<Row>
						{totalResults > resultsPerPage && (
							<StationPaginator
								currentPage={currentPage}
								totalPages={totalPages}
								onPageChange={handlePageChange}
							/>
						)}
						<Button variant="secondary" onClick={onClearSearch}>
							Clear Search
						</Button>
					</Row>
				</>
			) : (
				<p></p>
			)}
		</>
	)
}

export default StationSearchResults