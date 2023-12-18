import React, { createContext, useState, useContext } from "react"
import { jwtDecode } from "jwt-decode";



export const AuthContext = createContext({
	user: null,
	handleLogin: (token) => {},
	handleLogout: () => {}
})

/* export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null)

	const handleLogin = (token) => {
		const decoded = jwtDecode(token);
		localStorage.setItem("userId", decodedUser.sub)
		localStorage.setItem("userRole", decodedUser.roles)
		localStorage.setItem("token", token)
		//setUser(decodedUser)
		setUser(decoded); // Change decodedUser to decoded

	} */

	export const AuthProvider = ({ children }) => {
		const [user, setUser] = useState(null);
	  
		const handleLogin = (token) => {
		  const decoded = jwtDecode(token);
		  localStorage.setItem("userId", decoded.sub);
		  localStorage.setItem("userRole", decoded.roles);
		  localStorage.setItem("token", token);
		  setUser(decoded);
		};


	const handleLogout = () => {
		localStorage.removeItem("userId")
		localStorage.removeItem("userRole")
		localStorage.removeItem("token")
		setUser(null)
	}

	return (
		<AuthContext.Provider value={{ user, handleLogin, handleLogout }}>
			{children}
		</AuthContext.Provider>
	)
}

export const useAuth = () => {
	return useContext(AuthContext)
} 

 