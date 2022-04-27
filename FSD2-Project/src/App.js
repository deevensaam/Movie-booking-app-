import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './styles.css';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Login from './components/Login';
import NowShowing from './components/NowShowing';
import BookSeats from "./components/BookSeats";
import Reviews from "./components/Reviews";
import Ticket from "./components/Ticket";
import SignUp from "./components/SignUp";
import Payments from "./components/Payments";

const App = () => {

	return (
    <>
		<Router>
        <Routes>
          <Route exact path="/" element={<Login />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/nowshowing" element={<NowShowing/>}/>
          <Route path="/contact" element={<Contact />}/>
		      <Route path="/bookseats" element={<BookSeats />}/>
          <Route path="/reviews" element={<Reviews />}/>
          <Route path="/ticket" element={<Ticket />}/>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/payments" element={<Payments />} />
        </Routes>
      </Router>
		</>
	);
};

export default App;
