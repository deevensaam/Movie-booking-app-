import Header from "./Header";
import Footer from "./Footer";
import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";

//this is a dummy file which we initially wanted to write code for writing/reading user reviews
const Reviews = () => {
    const location = useLocation();
    const {data} = location.state;
    useEffect(() => {
        console.log(location.state);
    })
    return (
        <>
            <Header />
                {/* <h2>{props}</h2> */}
            <Footer />
        </>
    );

}

export default Reviews;