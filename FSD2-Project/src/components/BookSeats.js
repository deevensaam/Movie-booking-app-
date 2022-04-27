import React, {useEffect, useState} from "react";
import Selector from "./Selector";
import SeatAvailability from "./SeatAvailability";
import SeatMatrix from "./SeatMatrix";
import PriceCalculator from "./PriceCalculator";
import MovieContext from "./MovieContext";
import Showtimes from "./Showtimes";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import Ticket from "./Ticket";
import store from "./store";
import { useLocation, useNavigate } from 'react-router-dom';
import GooglePayButton from '@google-pay/button-react';


const BookSeats = () => {
    const location = useLocation();
    const {movie} = location.state;
    const history = useNavigate();

    // Experience to watch movies
    const [movies, EditMovies] = useState({
       movie: movie,
          Experience: {
              "Standard": 150,
              "3D": 180,
              "VIP": 210,
              "Outdoor": 220,
              "4D": 350
          },
          ticketPrice: 150,
          totalSeats: 0,
          seatNumbers: [],
          showtime: ""
      })
    const f1 = () => {
        store.dispatch(
            {
                type:"addtocart",  // Total ticket price, Booked Seats and seat numbers are visuable 
                payload: {
                ticketPrice: movies.ticketPrice,
                totalSeats:  movies.totalSeats,
                seatNumbers:  movies.seatNumbers
                }

            }
        )
    }
    
      return (  
          <>
            <Header />          
            <div className="main container">
                
                    <MovieContext.Provider value={{ movies, changeState: EditMovies }}>
                        <Selector />
                        <Showtimes />
                        <SeatMatrix />
                        <SeatAvailability />
                        <PriceCalculator />                        
                    </MovieContext.Provider>
                    {/* <Button > <Link state={{ movies: movies}} to="/payments" onClick={()=>f1()}>Make payment</Link> </Button> */}
                    { <Button onClick={()=>f1()} >Confirm</Button> }
                    {/* {console.log(movies.showtime)} */}
                    <GooglePayButton
                    environment="TEST"  //In the "TEST" environment, fake payment credentials are returned. You can use Production too 
                    paymentRequest={{   //Request parameters that define the type of payment information requested from Google Pay.
                        apiVersion: 2,
                        apiVersionMinor: 0,
                        allowedPaymentMethods: [
                        {
                            type: 'CARD',
                            parameters: {
                            allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                            allowedCardNetworks: ['MASTERCARD', 'VISA'],
                            },
                            tokenizationSpecification: {
                            type: 'PAYMENT_GATEWAY',
                            parameters: {
                                gateway: 'example',
                                gatewayMerchantId: 'exampleGatewayMerchantId',
                            },
                            },
                        },
                        ],
                        merchantInfo: {     // Information about merchant bank details 
                        merchantId: '12345678901234567890',
                        merchantName: 'Movie Hub',
                        },
                        transactionInfo: {
                        totalPriceStatus: "FINAL",
                        totalPrice: `${movies.totalSeats*movies.ticketPrice}`,
                        currencyCode: 'INR',
                        countryCode: 'IN',
                        },
                        shippingAddressRequired: false,
                        callbackIntents: ['PAYMENT_AUTHORIZATION'],     //callbackIntents must include PAYMENT_AUTHORIZATION, in order to use the callback paymentRequest.
                    }}
                    onLoadPaymentData={paymentRequest => {      //Invoked when a user has successfully nominated payment details. This callback receives the PaymentData response which includes the PaymentMethodData that can be sent to supported payment processors.
                        console.log('Success', paymentRequest);
                        console.log(movies)
                        history('/ticket', { replace: true , state: {movies:movies} })
                        // history.push({ pathname: "/ticket"})
                    }}
                    onPaymentAuthorized={paymentData => {   //Invoked when a user chooses a payment method. This callback should be used to validate whether or not the payment method can be used to complete a payment. This would be typically used to perform pre-authorization to ensure that the card is valid and has sufficient funds. 
                        console.log('Payment Authorized success', paymentData)
                        return{ transactionState: 'SUCCESS'}
                    
                    }
                    }
                    existingPaymentMethodRequired = 'false'     //When set to true (and environment is Production), the Google Pay button will only be displayed if the user already has an existing payment that they can use to make a purchase.
                    buttonColor='black'
                    buttonType='book'        //Displays their respective prompts (localized based on the user's browser settings) with the Google Pay logo.
                    />
            </div>
            <Footer />
            {/* <Ticket seats={movies.totalSeats} amount={movies.totalSeats*movies.ticketPrice} exp={movies.Experience} /> */}
          </>

);
};
export default BookSeats;