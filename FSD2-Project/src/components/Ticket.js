import Header from "./Header";
import Footer from "./Footer";
import React, {useContext} from "react";
import BookSeats from './BookSeats';
import MovieContext from "./MovieContext";
import { useLocation } from 'react-router-dom';

const Ticket = (props) => {
    const location = useLocation();
    const {movies} = location.state; //gets details of the movie selected for ticekt booking
    console.log(movies);
    return (
        <>
            {/* This displays the ticket confirmation after the payment process is done */}
            <Header />
            <div className="ticket col-12 col-md-4 offset-4 mt-5 mb-4">

                <h3>Booking Confirmed</h3>
                <hr color="white" />
                <p>Movie: {movies.movie.title} </p>
                <p>Seats:  {movies.seatNumbers.map((seat) => (
                    <span>{seat}&nbsp;</span>
                ))} </p>
                <p>Showtime: {movies.showtime} </p>
                <p>Total Amout: {movies.totalSeats*movies.ticketPrice}</p>
                {/* {console.log(movies.showtime+"showtime")} */}
            </div>
       
        {/* <div class="ticket col-12 col-md-4 offset-4 mt-5 mb-4">
            <h3>Booking Confirmed</h3>
            <hr color="white" />
            <p>Movie: </p>
            <p>Experience: {props.exp}</p>
            <p>Seats: {props.seats} </p>
            <p>Showtime: </p>
            <p>Total Amout: {props.amount}</p>
        </div>
        */}
        <Footer />           
        </>
    );

}

export default Ticket;