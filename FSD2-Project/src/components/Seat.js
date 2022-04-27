import React, {useContext} from 'react'
import MovieContext from "./MovieContext"
import {connect} from 'react-redux'

import './styles/Seat.css'
import { StarBorder } from '@material-ui/icons'

const Seat = (props,{seatNumbers}) => {
    //getting details of the movie that we want to book a ticket 
    const { movies } = useContext(MovieContext)

    const context = useContext(MovieContext)

    const seatNumber = props.seatno
    const seatStatus = props.seatColor ? props.seatColor : "seat-grey" 

    //a function to change the seat color if it is selected and updating the seat details in the data
    const seatClickHandler = (event, seatNumber) => {
        event.stopPropagation()
        const seatColor = document.querySelector(`.seat-${seatNumber}`).classList
        if (movies.seatNumbers.includes(seatNumber)) {
            const newMovieSeats = movies.seatNumbers.filter((seat) => {
                return seat !== seatNumber
            })
            seatColor.remove("seat-black")
            seatColor.add("seat-grey")
            context.changeState({...movies, seatNumbers: newMovieSeats, totalSeats: movies.totalSeats-1 })
            
        } else {
            seatColor.remove("seat-grey")
            seatColor.add("seat-black")
            context.changeState({...movies, seatNumbers: [...movies.seatNumbers, seatNumber], totalSeats: movies.totalSeats+1 })
            
        }
    }
    
    return (
        <div className="col-2 col-md-2">
            <div className={`seat seat-${seatNumber} ${seatStatus}`}
                onClick={(e) => seatClickHandler(e,props.seatno)} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      seatNumbers : state.cartReducer.seatNumbers
    };
};

export default connect(mapStateToProps)(Seat);