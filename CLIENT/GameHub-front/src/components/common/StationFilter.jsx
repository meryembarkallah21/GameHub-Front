import React, { useState } from "react"

const StationFilter = ({ data, setFilteredData }) => {
	const [filter, setFilter] = useState("")

	const handleSelectChange = (e) => {
		const selectedType = e.target.value
		setFilter(selectedType)

		const filteredStations = data.filter((station) =>
			station.stationType.toLowerCase().includes(selectedType.toLowerCase())
		)
		setFilteredData(filteredStations)
	}

	const clearFilter = () => {
		setFilter("")
		setFilteredData(data)
	}

	const stationTypes = ["", ...new Set(data.map((station) => station.stationType))]

	return (
		<div className="input-group mb-3">
			<span className="input-group-text" id="station-type-filter">
				FIlter stations by type
			</span>
			<select
				className="form-select"
				aria-label="romm type filter"
				value={filter}
				onChange={handleSelectChange}>
				<option value="">select a station type to filter....</option>
				{stationTypes.map((type, index) => (
					<option key={index} value={String(type)}>
						{String(type)}
					</option>
				))}
			</select>
			<button className="btn btn-hotel" type="button" onClick={clearFilter}>
				Clear Filter
			</button>
		</div>
	)
}
export default StationFilter