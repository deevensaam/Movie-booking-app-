/* Importing Google pay react package with `npm install @google-pay/button-react` */
import GooglePayButton from '@google-pay/button-react';
import React, { useEffect } from 'react'; 
import Footer from './Footer';
import Header from './Header';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const Payments = () => { 
    const location = useLocation();     //getting details of the movie that we selected and wanted to book tickets
    const {movies} = location.state;
    const history = useNavigate();
  

    return (
        //The CSS class name to apply to the element.
        <div className="App">           
            <Header />
            {/* <h1>{movies.ticketPrice}{movies.totalSeats} {movies.seatNumbers}</h1> */}
            {/* <div>
                <h2>Tickets Price:    {movies.ticketPrice}</h2>
                <h2>No. of tickets:   {movies.totalSeats} </h2>
                <h2>Seat Numbers:     {movies.seatNumbers.map((seat) => (
                    <span>{seat}&nbsp;</span>
                ))}</h2>
            </div> */}
            <h1>Book your tickets through Google Pay</h1>
            <hr />
            <GooglePayButton
            //The Google Pay environment to target.  
            environment="TEST"          //In the "TEST" environment, fake payment credentials are returned. You can use Production too   
            paymentRequest={{           //Request parameters that define the type of payment information requested from Google Pay.
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
                merchantInfo: {  // Information about merchant bank details 
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
                callbackIntents: ['PAYMENT_AUTHORIZATION'], //callbackIntents must include PAYMENT_AUTHORIZATION, in order to use the callback paymentRequest.
            }}
            
            onLoadPaymentData={paymentRequest => {   //Invoked when a user has successfully nominated payment details. This callback receives the PaymentData response which includes the PaymentMethodData that can be sent to supported payment processors.
                console.log('Success', paymentRequest);
                console.log(movies)
                history('/ticket', { replace: true , state: {movies:movies} })
                // history.push({ pathname: "/ticket"})
            }}
            onPaymentAuthorized={paymentData => {  //Invoked when a user chooses a payment method. This callback should be used to validate whether or not the payment method can be used to complete a payment. This would be typically used to perform pre-authorization to ensure that the card is valid and has sufficient funds. 
                console.log('Payment Authorized success', paymentData)
                return{ transactionState: 'SUCCESS'}
            
            }
            }
            existingPaymentMethodRequired = 'false'  //When set to true (and environment is Production), the Google Pay button will only be displayed if the user already has an existing payment that they can use to make a purchase.
            buttonColor='black'  //Google pay button color 
            buttonType='book'    //Displays their respective prompts (localized based on the user's browser settings) with the Google Pay logo.
            />
             {/* <Button > <Link state={{ movies: movies}} to="/ticket" >Confirm</Link></Button> */}
            <Footer />
        </div>
  );
}

export default Payments;