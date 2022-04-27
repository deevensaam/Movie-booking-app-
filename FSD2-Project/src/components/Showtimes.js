import React from 'react'
import Select from 'react-select';
import { useContext } from 'react';
import MovieContext from './MovieContext';

// list of options for the dropdown that consists of the different showtimes

const options = [ //timings that are being displayed while booking seats
  { value: '10 AM', label: '10 AM' },
  { value: '4:40 PM ', label: '4:40 PM' },
  { value: '6:20 PM', label: '6:20 PM' },
  { value: '8:30 PM', label: '8:30 PM' },
  { value: '10:40 PM', label: '10:40 PM' },
  { value: '12:30 AM', label: '12:30 AM' }
]

const Showtimes = () => {
  const { movies } = useContext(MovieContext)//gets details of the selected movie in the previous page  
  const movieData = useContext(MovieContext)//gets details of the experiences availiable
  //a handleler function to update the data with the selected time
  const movieSwitchHandler = (e) => {
		const newticketPrice = e.target.value
		movieData.changeState({...movies, showtime: newticketPrice})
	}
    return(
      <div className='show-time'>
        <i className="fa fa-clock-o">&nbsp;Showtime:&nbsp;</i>
        {/* <Select options={options} onChange={movieSwitchHandler}/> */}
        <select className="movie-selector" onChange={movieSwitchHandler}>
          {/* {console.log(movies.showtime)} */}
				{options.map((option,i)=><option key={i} value={option.value}>{option.label}</option>)}
			</select>
      </div>
    );
}

export default Showtimes;