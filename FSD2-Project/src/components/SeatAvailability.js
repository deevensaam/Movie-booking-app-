import React from "react"
import Seat from './Seat'

//a function to indicate the colors of the available and occupied seats
const SeatAvailability = () => {
	return (
		<div className="row">
			<Seat seatColor="seat-grey" /> : Available  
			{/* available seats are coloured grey */}
			<Seat seatColor="seat-black" /> : Occupied
			{/* the seats that are ocuucpied  are coloured black */}
		</div>
	)
}

export default SeatAvailability
