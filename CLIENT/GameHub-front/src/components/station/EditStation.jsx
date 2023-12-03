import React, { useEffect, useState } from "react"
import { getStationById, updateStation } from "../utils/ApiFunctions"
import { Link, useParams } from "react-router-dom"

const EditStation = () => {
	const [station, setStation] = useState({
		photo: "",
		stationType: "",
		stationPrice: ""
	})

	const [imagePreview, setImagePreview] = useState("")
	const [successMessage, setSuccessMessage] = useState("")
	const [errorMessage, setErrorMessage] = useState("")
	const { stationId } = useParams()

	const handleImageChange = (e) => {
		const selectedImage = e.target.files[0]
		setStation({ ...station, photo: selectedImage })
		setImagePreview(URL.createObjectURL(selectedImage))
	}

	const handleInputChange = (event) => {
		const { name, value } = event.target
		setStation({ ...station, [name]: value })
	}

	useEffect(() => {
		const fetchStation = async () => {
			try {
				const stationData = await getStationById(stationId)
				setStation(stationData)
				setImagePreview(stationData.photo)
			} catch (error) {
				console.error(error)
			}
		}

		fetchStation()
	}, [stationId])

	const handleSubmit = async (e) => {
		e.preventDefault()

		try {
			const response = await updateStation(stationId, station)
			if (response.status === 200) {
				setSuccessMessage("Station updated successfully!")
				const updatedStationData = await getStationById(stationId)
				setStation(updatedStationData)
				setImagePreview(updatedStationData.photo)
				setErrorMessage("")
			} else {
				setErrorMessage("Error updating station")
			}
		} catch (error) {
			console.error(error)
			setErrorMessage(error.message)
		}
	}

	return (
		<div className="container mt-5 mb-5">
			<h3 className="text-center mb-5 mt-5">Edit Station</h3>
			<div className="row justify-content-center">
				<div className="col-md-8 col-lg-6">
					{successMessage && (
						<div className="alert alert-success" role="alert">
							{successMessage}
						</div>
					)}
					{errorMessage && (
						<div className="alert alert-danger" role="alert">
							{errorMessage}
						</div>
					)}
					<form onSubmit={handleSubmit}>
						<div className="mb-3">
							<label htmlFor="stationType" className="form-label hotel-color">
								Station Type
							</label>
							<input
								type="text"
								className="form-control"
								id="stationType"
								name="stationType"
								value={station.stationType}
								onChange={handleInputChange}
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="stationPrice" className="form-label hotel-color">
								Station Price
							</label>
							<input
								type="number"
								className="form-control"
								id="stationPrice"
								name="stationPrice"
								value={station.stationPrice}
								onChange={handleInputChange}
							/>
						</div>

						<div className="mb-3">
							<label htmlFor="photo" className="form-label hotel-color">
								Photo
							</label>
							<input
								required
								type="file"
								className="form-control"
								id="photo"
								name="photo"
								onChange={handleImageChange}
							/>
							{imagePreview && (
								<img
									src={`data:image/jpeg;base64,${imagePreview}`}
									alt="Station preview"
									style={{ maxWidth: "400px", maxHeight: "400" }}
									className="mt-3"
								/>
							)}
						</div>
						<div className="d-grid gap-2 d-md-flex mt-2">
							<Link to={"/existing-stations"} className="btn btn-outline-info ml-5">
								back
							</Link>
							<button type="submit" className="btn btn-outline-warning">
								Edit Station
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}
export default EditStation