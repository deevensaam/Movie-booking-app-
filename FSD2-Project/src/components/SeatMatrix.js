import React from "react"
import Seat from './Seat'
import {connect} from 'react-redux'
import './styles/Seat.css'

//a function to generate seat numbers
const GenerateSeats = (seatNumbers,booked) => {
	return (
		<div className="row">
			{
				seatNumbers.map((seatNumber) => {
					if(booked.includes(seatNumber)){
						return <Seat seatno={seatNumber} seatColor='seat-black' key={seatNumber}/>
					}
					return <Seat seatno={seatNumber} key={seatNumber}/>
				})
			}
		</div>
	)
}

//a function to display the seat matrix of the theatre
const SeatMatrix = ({seats}) => {
	return (
		<div className="movie-complex">
			<p><strong>S C R E E N</strong></p>
			<div className="container row movie-layout">
				<div className="movie-column-1">
					{GenerateSeats([1,2,3,4],seats)}
					{GenerateSeats([5,6,7,8],seats)}
				</div>
				<div className="movie-column-2">
					{GenerateSeats([13, 14, 15, 16, 17],seats)}
					{GenerateSeats([18, 19, 20, 21, 22],seats)}
					{GenerateSeats([23, 24, 25, 26, 27],seats)}
					{GenerateSeats([28, 29, 30, 31, 32],seats)}
				</div>
				<div className="movie-column-3">
					{GenerateSeats([33,34,35,36],seats)}
					{GenerateSeats([37,38,39,40],seats)}
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = (state) => {
    return {
      seats : state.cartReducer.seatNumbers
    };
};

export default connect(mapStateToProps)(SeatMatrix)
