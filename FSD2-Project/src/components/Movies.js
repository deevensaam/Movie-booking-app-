import { Link } from "react-router-dom";
import { Button } from "reactstrap";


//displays list of the movies that are available for ticket booking
const Movies = ({ movies, title, handleDelete }) => {
    return (
        <div className="container mt-5">
            <center><h2>{title}</h2></center>
            <br />
            <div className="row">
                {movies.map((movie) => (
                    <div key={movie.id}>
                        <div className="col-12 col-md-1 mb-1"> 
                            <img src={movie.image} alt={movie.title} width="290" height="410" />
                        </div>
                            <div className="col-12 mb-3 media-body">                            
                                <h4> { movie.title }</h4>
                                <p> IMDb: {movie.imdb}</p>
                                <p> Genre: {movie.genre}</p>
                                <p> Duration: {movie.duration}</p>
                                {/* <button onClick={() => handleDelete(movie.id)}>delete</button> */}
                                <span> <Button><Link to="/bookseats" state={{ movie: movie}}>Book Tickets</Link> </Button> </span>
                                <span><a href={movie.trailer} target="_blank"> <Button>Watch trailer </Button> </a> </span>

                                {/* <span> <Button><Link to="/reviews">Write a Review</Link> </Button> </span> */}
                            </div>                                                
                    </div>
                ))}    
            </div>               
        </div>
        // <div className="container mt-5">
        //     <center><h2>{title}</h2></center>
        //     <div className="row row-content align-items-center">
        //         <div className="col-12 col-sm col-md">
        //             {movies.map((movie) => (
        //                 <div className="media" key={movie.id}>
        //                     <img className="d-flex mr-5 mb-3 align-self-center" src={movie.image} alt={movie.title}  width="290" height="410" />
        //                     <div className="media-body">
        //                         <h4> { movie.title }</h4>
        //                         <p> IMDb: {movie.imdb}</p>
        //                         <p> Genre: {movie.genre}</p>
        //                         <p> Duration: {movie.duration}</p>
        //                         {/* <button onClick={() => handleDelete(movie.id)}>delete</button> */}
        //                         <span> <button><Link to="/bookseats">Book Tickets</Link> </button> </span>
        //                         <span> <button><Link to="/reviews">Write a Review</Link> </button> </span>
        //                     </div>                                                     
        //                 </div>
        //             ))}                   
        //         </div>
        //     </div>
        // </div>

    //     <div className="container mt-5">
    //     <center><h2>{title}</h2></center>
    //     <div className="row">
    //         {movies.map((movie) => (
    //             <div className="col-12 col-md-6"  key={movie.id}>
    //                 <img className="d-flex col-12 col-md-7" src={movie.image} alt={movie.title} width="290" height="410" />
    //                     <div className=" media-body">                            
    //                         <h4> { movie.title }</h4>
    //                         <p> IMDb: {movie.imdb}</p>
    //                         <p> Genre: {movie.genre}</p>
    //                         <p> Duration: {movie.duration}</p>
    //                         {/* <button onClick={() => handleDelete(movie.id)}>delete</button> */}
    //                         <span> <button><Link to="/bookseats">Book Tickets</Link> </button> </span>
    //                         <span> <button><Link to="/reviews">Write a Review</Link> </button> </span>
    //                     </div>                                                
    //             </div>
    //         ))}    
    //     </div>               
    // </div>
    );
}


export default Movies;