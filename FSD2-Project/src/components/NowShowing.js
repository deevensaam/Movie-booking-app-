import Header from "./Header";
import Footer from "./Footer";
import { useState, useEffect } from 'react';
import Movies from './Movies';
import axios from "axios"

const NowShowing = () => {
    const [movies, setMovies] = useState(null);

    //a function used to remove a movie
    const handleDelete = (id) => {
        const newMovies = movies.filter(movie => movie.id !== id);
        setMovies(newMovies);
    }

    useEffect(() => { //loads the data from movies database
        axios.get('http://localhost:5000/movie')
            .then(data => {
                console.log(data)
                setMovies(data.data);
            })
    }, []);

    return (
        <div>
            <Header />
            <div className="now-showing">
                {movies && <Movies movies={movies} title="Now Showing" handleDelete={handleDelete} />}
            </div>
            <Footer />
        </div>
    )

}

export default NowShowing;