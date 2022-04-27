//Importing packages
import React, { useState, useEffect } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import MovieList from './MovieList';
import MovieListHeading from './MovieListHeading';
import SearchBox from './SearchBox';
import AddFavourites from './AddFavourites';
import RemoveFavourites from './RemoveFavourites';
import NowPlaying from '../NowPlaying.png';
import BasicPagination from './Pagination';
import Select from '@material-ui/core/Select';

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [favourites, setFavourites] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [genre, setGenre] = useState('');
    const [language, setLanguage] = useState('');

    useEffect(() => {
        fetch(`http://localhost:5000/search`) 
            .then(res => {
                return res.json();
            })
            .then(data => {
                setMovies(data);
                // console.log(movies);
            })
    }, [searchValue]);

    useEffect(() => {
        fetch(`http://localhost:5000/query/Search?Language=${language}&Genre=${genre}&Title=${searchValue}`)
        .then(res => {
            return  res.json();
        })
        .then(data => {
            setMovies(data);
            // console.log(data);
        })
    }, [genre, language, searchValue]);

    useEffect(() => {
        fetch(`http://localhost:5000/Search`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            setMovies(data);
        })
    },[])

    // useEffect(() => {
    //     fetch(`http://localhost:8000/Search?q=${language}`)
    //     .then(res => {
    //         return res.json();
    //     })
    //     .then(data => {
    //         setMovies(data);
    //     })
    // }, [language]);

    useEffect(() => {
        const movieFavourites = JSON.parse(
            localStorage.getItem('react-movie-app-favourites')
        );

        if (movieFavourites) {
            setFavourites(movieFavourites);
        }
    }, []);

    //Filter for Genre
    const GenreFilter = (e) => {
        setGenre(e.target.value);
    }

    //Filter for different types of languages
    const LanguageFilter = (e) => {
        setLanguage(e.target.value);
    }

    //Favourite movies will be stored in local storage .. To acces this go to console --> Appication --> Local Storage 
    const saveToLocalStorage = (items) => {
        localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
    };

    //Adding movies to Favourite list 
    const addFavouriteMovie = (movie) => {
        const newFavouriteList = [...favourites, movie];
        setFavourites(newFavouriteList);
        saveToLocalStorage(newFavouriteList);
    };

    //Removing movies from Favourite list  
    const removeFavouriteMovie = (movie) => {
        const newFavouriteList = favourites.filter(
            (favourite) => favourite.imdbID !== movie.imdbID
        );

        setFavourites(newFavouriteList);
        saveToLocalStorage(newFavouriteList);
    };
    return (  
        <div>
            <Header />
            <img src={NowPlaying} width="100%" alt="Now Showing"></img>  {/*Image */}
            <div className='container-fluid movie-app'>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieListHeading heading='Movies' />
                Language:&nbsp; {/* Dropbox filter for Language*/}
                <select onChange={LanguageFilter}>
                    <option label=''></option>
                    <option name="Malayalam">Malayalam</option>
                    <option name="Telugu">Telugu</option>
                    <option name="Hindi">Hindi</option>
                    <option name="English">English</option>
                    <option name="Korean">Korean</option>
                </select>
                &ensp;
                Genre:&nbsp; {/* Dropbox filter for Genre*/}
                <select onChange={GenreFilter}>
                    <option label=""></option>
                    <option name="Action">Action</option>
                    <option name="Comedy">Comedy</option>
                    <option name="Adventure">Adventure</option>
                    <option name="Sci-fi">Sci-fi</option>
                    <option name="Drama">Drama</option>
                    <option name="Romance">Romance</option>
                    <option name="Thriller">Thriller</option>
                    <option name="Mystery">Mystery</option>
                    <option name="Family">Family</option>
                    <option name="Horror">Horror</option>
                    <option name="Sport">Sport</option>
                </select>
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
			<div className='row'>  {/*On page Movies (Add to fav movies and Normal movies)*/}
				<MovieList
					movies={movies}
					handleFavouritesClick={addFavouriteMovie}
					favouriteComponent={AddFavourites}
				/>
			</div>          {/* Heading for Favourites */}
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieListHeading heading='Favourites' />
			</div>
			<div className='row'>
				<MovieList
					movies={favourites}
					handleFavouritesClick={removeFavouriteMovie}
					favouriteComponent={RemoveFavourites}
				/>
			</div>
		</div>
            <BasicPagination />
            <Footer />
        </div>
    );
}
 
export default Home;