import axios from "axios"

export const api = axios.create({
	baseURL: "http://localhost:9192"
})

export const getHeader = () => {
	const token = localStorage.getItem("token")
	return {
		Authorization: `Bearer ${token}`,
		//"Content-Type": "application/json"
	}
}

/* This function adds a new station station to the database */
export async function addStation(photo, stationType, stationPrice) {
	const formData = new FormData()
	formData.append("photo", photo)
	formData.append("stationType", stationType)
	formData.append("stationPrice", stationPrice)

	const response = await api.post("/stations/add/new-station", formData,{
		headers: getHeader()
	})
	if (response.status === 201) {
		return true
	} else {
		return false
	}
} 




/* This function gets all station types from thee database */
export async function getStationTypes() {
	try {
		const response = await api.get("/stations/station/types")
		return response.data
	} catch (error) {
		throw new Error("Error fetching station types")
	}
}



/* This function gets all stations from the database */
export async function getAllStations() {
	try {
		const result = await api.get("/stations/all-stations")
		return result.data
	} catch (error) {
		throw new Error("Error fetching stations")
	}
}


/* This function deletes a station by the Id */
export async function deleteStation(stationId) {
	try {
		const result = await api.delete(`/stations/delete/station/${stationId}`, {
			headers: getHeader()
		})
		return result.data
	} catch (error) {
		throw new Error(`Error deleting station ${error.message}`)
	}
}


/* This function update a station */
export async function updateStation(stationId, stationData) {
	const formData = new FormData()
	formData.append("stationType", stationData.stationType)
	formData.append("stationPrice", stationData.stationPrice)
	formData.append("photo", stationData.photo)
	const response = await api.put(`/stations/update/${stationId}`, formData,{
		headers: getHeader()
	})
	return response
}


/* This funcction gets a station by the id */
export async function getStationById(stationId) {
	try {
		const result = await api.get(`/stations/station/${stationId}`)
		return result.data
	} catch (error) {
		throw new Error(`Error fetching station ${error.message}`)
	}
}

