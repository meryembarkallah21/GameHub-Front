import React, { useState, useEffect } from "react"
import { getStationTypes } from "../utils/ApiFunctions"

const StationTypeSelector = ({ handleStationInputChange, newStation }) => {
	const [stationTypes, setStationTypes] = useState([""])
	const [showNewStationTypeInput, setShowNewStationTypeInput] = useState(false)
	const [newStationType, setNewStationType] = useState("")

	useEffect(() => {
		getStationTypes().then((data) => {
			setStationTypes(data)
		})
	}, [])

	const handleNewStationTypeInputChange = (e) => {
		setNewStationType(e.target.value)
	}

	const handleAddNewStationType = () => {
		if (newStationType !== "") {
			setStationTypes([...stationTypes, newStationType])
			setNewStationType("")
			setShowNewStationTypeInput(false)
		}
	}

	return (
		<>
			{stationTypes.length > 0 && (
				<div>
					<select
						required
						className="form-select"
						name="stationType"
						onChange={(e) => {
							if (e.target.value === "Add New") {
								setShowNewStationTypeInput(true)
							} else {
								handleStationInputChange(e)
							}
						}}
						value={newStation.stationType}>
						<option value="">Select a station type</option>
						<option value={"Add New"}>Add New</option>
						{stationTypes.map((type, index) => (
							<option key={index} value={type}>
								{type}
							</option>
						))}
					</select>
					{showNewStationTypeInput && (
						<div className="mt-2">
							<div className="input-group">
								<input
									type="text"
									className="form-control"
									placeholder="Enter New Station Type"
									value={newStationType}
									onChange={handleNewStationTypeInputChange}
								/>
								<button className="btn btn-hotel" type="button" onClick={handleAddNewStationType}>
									Add
								</button>
							</div>
						</div>
					)}
				</div>
			)}
		</>
	)
}

export default StationTypeSelector