import axios from "axios"

export const api = axios.create({
	baseURL: "http://localhost:9192"
})

export const getHeader = () => {
	const token = localStorage.getItem("token")
	return {
		Authorization: `Bearer ${token}`,
		"Content-Type": "application/json"
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
/////////////////////////////////////////////////////////////
/////////////////            BOOKING 
/////////////////////////////////////////////////////////////


/* This function saves a new booking to the databse */
export async function bookStation(stationId, booking) {
	try {
		const response = await api.post(`/bookings/station/${stationId}/booking`, booking)
		return response.data
	} catch (error) {
		if (error.response && error.response.data) {
			throw new Error(error.response.data)
		} else {
			throw new Error(`Error booking station : ${error.message}`)
		}
	}
}

/* This function gets alll bokings from the database */
export async function getAllBookings() {
	try {
		const result = await api.get("/bookings/all-bookings", {
			headers: getHeader()
		})
		return result.data
	} catch (error) {
		throw new Error(`Error fetching bookings : ${error.message}`)
	}
}

/* This function get booking by the cnfirmation code */
export async function getBookingByConfirmationCode(confirmationCode) {
	try {
		const result = await api.get(`/bookings/confirmation/${confirmationCode}`)
		return result.data
	} catch (error) {
		if (error.response && error.response.data) {
			throw new Error(error.response.data)
		} else {
			throw new Error(`Error find booking : ${error.message}`)
		}
	}
}

/* This is the function to cancel user booking */
export async function cancelBooking(bookingId) {
	try {
		const result = await api.delete(`/bookings/booking/${bookingId}/delete`)
		return result.data
	} catch (error) {
		throw new Error(`Error cancelling booking :${error.message}`)
	}
}

/* This function gets all availavle stations from the database with a given date and a station type */
export async function getAvailableStations(checkInDate, checkOutDate, stationType) {
	const result = await api.get(
		`stations/available-stations?checkInDate=${checkInDate}
		&checkOutDate=${checkOutDate}&stationType=${stationType}`
	)
	return result
}


/* This function register a new user */
export async function registerUser(registration) {
	try {
		const response = await api.post("/auth/register-user", registration)
		return response.data
	} catch (error) {
		if (error.reeponse && error.response.data) {
			throw new Error(error.response.data)
		} else {
			throw new Error(`User registration error : ${error.message}`)
		}
	}
}

/* This function login a registered user */
export async function loginUser(login) {
	try {
		const response = await api.post("/auth/login", login)
		if (response.status >= 200 && response.status < 300) {
			return response.data
		} else {
			return null
		}
	} catch (error) {
		console.error(error)
		return null
	}
}

/*  This is function to get the user profile */
export async function getUserProfile(userId, token) {
	try {
		const response = await api.get(`users/profile/${userId}`, {
			headers: getHeader()
		})
		return response.data
	} catch (error) {
		throw error
	}
}

/* /* This isthe function to delete a user */
 export async function deleteUser(userId) {
	try {
		const response = await api.delete(`/users/delete/${userId}`, {
			headers: getHeader()
		})
		return response.data
	} catch (error) {
		return error.message
	}
} 

/* This is the function to get a single user */
 export async function getUser(userId, token) {
	try {
		const response = await api.get(`/users/${userId}`, {
			headers: getHeader()
		})
		return response.data
	} catch (error) {
		throw error
	}
} 

/* This is the function to get user bookings by the user id */
 export async function getBookingsByUserId(userId, token) {
	try {
		const response = await api.get(`/bookings/user/${userId}/bookings`, {
			headers: getHeader()
		})
		return response.data
	} catch (error) {
		console.error("Error fetching bookings:", error.message)
		throw new Error("Failed to fetch bookings")
	}
}  
