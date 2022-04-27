import { createContext } from "react"

export default createContext({//the experiences for the theatres
	movies: {
		"Standard": 150,
		"3D": 180,
		"VIP": 210,
		"Outdoor": 220,
		"4D": 350
	}
})
