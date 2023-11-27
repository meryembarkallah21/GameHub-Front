import React, { useState } from "react"
import { addStation } from "../utils/ApiFunctions"
import StationTypeSelector from "../common/StationTypeSelector"
import { Link } from "react-router-dom"

const AddStation = () => {
	const [newStation, setNewStation] = useState({
		photo: null,
		stationType: "",
		stationPrice: ""
	})

	const [successMessage, setSuccessMessage] = useState("")
	const [errorMessage, setErrorMessage] = useState("")
	const [imagePreview, setImagePreview] = useState("")

	const handleStationInputChange = (e) => {
		const name = e.target.name
		let value = e.target.value
		if (name === "stationPrice") {
			if (!isNaN(value)) {
				value = parseInt(value)
			} else {
				value = ""
			}
		}
		setNewStation({ ...newStation, [name]: value })
	}

	const handleImageChange = (e) => {
		const selectedImage = e.target.files[0]
		setNewStation({ ...newStation, photo: selectedImage })
		setImagePreview(URL.createObjectURL(selectedImage))
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const success = await addStation(newStation.photo, newStation.stationType, newStation.stationPrice)
			if (success !== undefined) {
				setSuccessMessage("A new station was  added successfully !")
				setNewStation({ photo: null, stationType: "", stationPrice: "" })
				setImagePreview("")
				setErrorMessage("")
			} else {
				setErrorMessage("Error adding new station")
			}
		} catch (error) {
			setErrorMessage(error.message)
		}
		setTimeout(() => {
			setSuccessMessage("")
			setErrorMessage("")
		}, 3000)
	}

	return (
		<>
			<section className="container mt-5 mb-5">
				<div className="row justify-content-center">
					<div className="col-md-8 col-lg-6">
						<h2 className="mt-5 mb-2">Add a New Station</h2>
						{successMessage && (
							<div className="alert alert-success fade show"> {successMessage}</div>
						)}

						{errorMessage && <div className="alert alert-danger fade show"> {errorMessage}</div>}

						<form onSubmit={handleSubmit}>
							<div className="mb-3">
								<label htmlFor="stationType" className="form-label">
									Station Type
								</label>
								<div>
									<StationTypeSelector
										handleStationInputChange={handleStationInputChange}
										newStation={newStation}
									/>
								</div>
							</div>
							<div className="mb-3">
								<label htmlFor="stationPrice" className="form-label">
									Station Price
								</label>
								<input
									required
									type="number"
									className="form-control"
									id="stationPrice"
									name="stationPrice"
									value={newStation.stationPrice}
									onChange={handleStationInputChange}
								/>
							</div>

							<div className="mb-3">
								<label htmlFor="photo" className="form-label">
									Station Photo
								</label>
								<input
									required
									name="photo"
									id="photo"
									type="file"
									className="form-control"
									onChange={handleImageChange}
								/>
								{imagePreview && (
									<img
										src={imagePreview}
										alt="Preview  station photo"
										style={{ maxWidth: "400px", maxHeight: "400px" }}
										className="mb-3"></img>
								)}
							</div>
							<div className="d-grid gap-2 d-md-flex mt-2">
								{/* <Link to={"/existing-stations"} className="btn btn-outline-info">
									Existing stations
								</Link> */}
								<button type="submit" className="btn btn-outline-primary ml-5">
									Save Station
								</button>
							</div>
						</form>
					</div>
				</div>
			</section>
		</>
	)
}

export default AddStation