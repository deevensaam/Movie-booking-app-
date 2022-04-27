import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Typography } from '@mui/material';
import { Box } from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import ReviewsIcon from '@mui/icons-material/Reviews';

const MovieList = (props) => {
	const FavouriteComponent = props.favouriteComponent;
	const [openDialog, setOpenDialog] = useState(false);
	const [review, setReview] = useState("");
	const [currentReviewID, setCurrentReviewID] = useState("");
	const [currentMovieReviews, setCurrentMovieReviews] = useState([]);
	const [movie,setMovie] = useState("");
	const handleReviews = (e, movieID, movie) => { //a function to load review box and other related details
		setOpenDialog(true);
		setCurrentReviewID(movieID);
		setMovie(movie);
		// console.log(movie);
		fetch(`http://localhost:5000/search/${movieID}`)
		.then(response => {
			return response.json();
		})
		.then(result => {
			setCurrentMovieReviews(result.movieReviews)
		})
	}
	const handleReviewSubmit = async (e) => {//a function to submit reviews and store them in the movie database
		e.preventDefault();
		// console.log(props.movies)
		// let currentMovie = props.movies.find(movie => movie.id === currentReviewID)
		let currentMovie = await fetch(`http://localhost:5000/search/${currentReviewID}`)
		.then(response => {
			return response.json();
		})
		
		console.log(currentReviewID);
		console.log(currentMovie);
		
		if(currentMovie.movieReviews){//if there are already previous reviews by the users then the new review is added to the list
			currentMovie.movieReviews.push(review)
			fetch(`http://localhost:5000/search/${currentReviewID}`, {
				method: 'PATCH',
				headers: {'Content-Type':'application/json'},
				body: JSON.stringify(currentMovie)
			})
		}else{//if there are no earlier reviews available , then a new review attribute is created and reviews are added into it
			const newMovie = {
				...currentMovie, 
				"movieReviews": []
			}
			newMovie.movieReviews.push(review)
			fetch(`http://localhost:5000/search/${currentReviewID}`, {
				method: 'PUT',
				headers: {'Content-Type':'application/json'},
				body: JSON.stringify(newMovie)
			})
		}
		// fetch(`http://localhost:8000/Search?imdbID=:${currentReviewID}`)
		// .then((response) => {
		// 	response.json()
		// })
		// .then((result) => {
		// 	console.log(result);
		// })
		
	}

	const handleClose = () => {
		setOpenDialog(false);
	};

	  
	return (
		<>
			{/* a dialoue box gets displayed when the review button is clicked */}
			<Dialog fullScreen open={openDialog}  
				PaperProps={{
					style: {
					backgroundColor: '#20112C',
					color: '#F5F5F5'
					},
				}} >
				<DialogActions>
					<Button 
					variant="text"
					color="secondary"
					size="large"
					// style={{backgroundColor: '#0B0C10', border: '#none', color: '#45A293', borderRadius: '100px' }}
					onClick={handleClose}>&#10006;</Button>
				</DialogActions>
				<DialogTitle textAlign="center" className="reviews" color='#823256'> 
					<Typography variant="h4" style={{ fontWeight: 'bold'}} >{movie.Title} </Typography>
				</DialogTitle>
				{/* <DialogContent className="userreviews"> */}
				<DialogContent>
					<Grid container spacing={4}>
						<Grid item xs={4} >
						<Box display="flex" justifyContent="flex-end">
							<img src={movie.Poster} alt={movie.title} width="290" height="410" />
						</Box>
						<Box ml={29} p={2}>
							<a href={movie.Trailer} target="_blank"> 
							<Button startIcon={< PlayCircleOutlineIcon /> } 
									color="secondary"
									variant="text">
									Watch trailer
							 </Button>
							</a> 
						</Box>
						</Grid>
						{/* </div> */}
						{/* <DialogContentText className="reviews"> */}
						<Grid item xs={5}>
						<Box ml={2} >
							<DialogContentText  mt={2} >
								<span style={{color: '#F5F5F5'}}>
									Genre: {movie.Genre} <br />
									Language: {movie.Language} <br />
									Release Year: {movie.Year} <br />
								</span>
								{/* <a href={movie.Trailer} target="_blank"> <Button color="secondary"  >Watch trailer </Button> </a>  */}
							</DialogContentText>
							<br />
							<h5>Viewer Reviews</h5> 
							{currentMovieReviews && currentMovieReviews.map((movieReview) => {
								return <p>{<AccountCircleIcon fontSize="large"/>} {movieReview}</p>
							})}
							<br />
							<h5>Write a review</h5>
							<div className='reviews'>
								<form onSubmit={(e) => handleReviewSubmit(e)}>
									<TextField
										onChange={(e) => setReview(e.target.value)}
										autoFocus
										id="review"
										label="What do you think about this movie?"
										type="text"
										fullWidth
										variant="outlined"
										color='secondary'
										sx={{ input: { color: 'white' },
											   label: {color: '#CCCCCC'} }}
									/>
									<div style={{float: 'right', marginTop: '4px'}}>
									<Button type='submit' 
										startIcon={<SendIcon />} 
										color="secondary" 
										variant="contained"
										onClick={handleClose}>
										Post
									</Button>
									</div>
								</form>
							</div>
							</Box>
						</Grid>
					</Grid>
				</DialogContent>
			</Dialog>
			{/* displays the list of the movies which are going to be displayed on the home page according to the search filer or according to the request for the database */}
			{props.movies && props.movies.map((movie) => (
				<div className='image-container d-flex justify-content-start m-3' key={movie._id}>
					<img src={movie.Poster} alt='movie' height={380} width={260}></img>
					<div className='overlay d-flex align-items-center justify-content-center'>
						<div onClick={() => props.handleFavouritesClick(movie)}>
							<FavouriteComponent />
						</div>
						<div>
							<Button color="secondary" variant="text" 
								onClick={(e) => {handleReviews(e, movie._id, movie)}}>
								<ReviewsIcon />
								Reviews
							</Button>
						</div>
					</div>
				</div>
				
			))}
		</>
	);
};

export default MovieList;
