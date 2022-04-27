import React, { useContext } from "react"
import MovieContext from "./MovieContext"
import "./styles/Seat.css";
import { Typography } from "@mui/material";

const Header = () => {

	const { movies } = useContext(MovieContext)//gets details of the selected movie in the previous page
	const movieData = useContext(MovieContext)//gets details of the different expriences
	// a function to generate the different cinema experiences the theatre offers
	const GenerateOptions = () => {
		const moviesObject = movies.Experience
		return Object.keys(moviesObject).map((movie, key) => {
			return <option value={movie} key={key}>{movie} : Rs.{moviesObject[movie]}</option>
		})
	}
	// the ticket price is calculated based on the cinmea experience selected
	// a function to update the data with the selected theatre experience
	const movieSwitchHandler = (e) => {
		const newticketPrice = movies.Experience[e.target.value]
		movieData.changeState({...movies, ticketPrice: newticketPrice})
	}

	return (
		<div className="container" style={{ textAlign: "center" }}>
			<br />
			 <Typography variant="h6" color='#1E1D24' style={{ fontWeight: 'bold'}}>{movies.movie.title}</Typography> <br/>
			Experience:&nbsp;
			<select className="movie-selector" onChange={movieSwitchHandler}>
				{GenerateOptions()}
			</select>
		</div>
	)
}

export default Header
