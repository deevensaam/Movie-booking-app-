import React, {useContext} from "react";
import MovieContext from "./MovieContext";

//a function which performs calculations for the no of tickets selected and their price and 
//also displays the seat numbers and total price value
const PriceCalculator = () => {
	const {movies} = useContext(MovieContext)
	return (
		<div>
			<p>Selected {movies.totalSeats} seats </p> 
			{/* displays the total number of seats selected in the book tickets page   */}

			<p>Total Amount: Rs.{movies.totalSeats*movies.ticketPrice} </p>
			{/* calculates the total amount to be paid for the booking (no. of seats * price per seat) */}
		</div>
	)
}

export default PriceCalculator
