//Importing packages
import React from 'react';
import {Link} from 'react-router-dom';

//Function for Footer, In Links - Home and Contact is available, In Services- Book Tickets, Wishlist and write a review are available, IN Account only logout is available.
function Footer(props) {
    return(
        <div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-4 col-sm-2 ">
                    <h5>Links</h5>      {/*Footer for Home*/}
                    <ul className="list-unstyled">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-3">    {/*Fotter for Booking ofTickets, Adding movies to Wishlist, Writing Reviews for movies*/}
                    <h5>Services</h5>
                    <ul className="list-unstyled">
                        <li><Link to="/nowshowing">Book Tickets</Link></li>
                        <li><Link to="/">My Watchlist</Link></li>
                        <li><Link to="/reviews">Write a Review</Link></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-2">  {/*Footer for user Logout*/}
                    <h5>Account</h5>
                    <ul className="list-unstyled">
                        <li><Link to="/">Log out</Link></li>
                        {/* <li><Link to="/signup">Sign Up</Link></li> */}
                        {/* <li><Link to="/">Forgot Password</Link></li> */}
                    </ul>
                </div>
                <div className="col-12 col-sm-4  align-self-center">
                    <div className="text-center">
                    <p> Follow us on </p>
                    {/* Dummy links */}
                    <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a> <span className="ml-1"></span> 
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a> <span className="ml-1"></span> 
                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i> </a> < span className="ml-1"></span> 
                        <a className="btn btn-social-icon btn-twitter " href="http://twitter.com/"><i className="fa fa-twitter "></i> </a> <span className="ml-1"></span> 
                        <a className="btn btn-social-icon btn-google " href="http://youtube.com/"><i className="fa fa-youtube "></i> </a> <span className="ml-1"></span> 
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Footer;