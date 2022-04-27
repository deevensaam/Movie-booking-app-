import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, Col} from 'reactstrap';
import cinema from "../cinema2.jpg";
import {Link} from 'react-router-dom';

function SignUp() {
  const[username1, setUsername]=useState("");
  const[password1, setPassword]=useState("");
  // const history = useNavigate();
  const navigate = useNavigate();

  // a signup user component to login into the website 
	const SignupUser = ()=>{
    const User = {
      "username":username1,
      "password":password1,
    }
    if (username1.length > 0 & password1.length > 0){ //user details gets stored in the user database
      axios.post(`http://localhost:5000/user`,User).then((res)=>{
        console.log("user created successfully")
        
      }).catch((err)=>{
        console.log(err);
      })
      navigate('/', { replace: true })
    }
    else{ //it makes sure that the user's username and password aren't empty
      if(username1.length === 0)
      {
        console.log("username should not be empty")
      }
      if(password1.length === 0)
      {
        console.log("password should not be empty")
      }
    }
  }

  return (
    <>
		{/* <Header /> */}
    <div className="box2 col-12 col-sm col-md">
    <div className="media">
                    <img className="d-flex" src={cinema} width="50%" alt="image" />
                    <div className="media-body">
      {/* a form which takes new user's details as inputs */}
			<Form className="signin"> 
                <h3>Create Account</h3>
				<FormGroup row>
					<Col >
						<Label>Name:</Label>
						<Input type="text" placeholder="Enter full name" required />
					</Col>
				</FormGroup>
                <FormGroup row>
					<Col>
						<Label>Username:</Label>
						<Input type="text" placeholder="Create a username"
							onChange={(e)=>setUsername(e.target.value)} required />
					</Col>
				</FormGroup>
				<FormGroup row>
					<Col>
						<Label>Password:</Label>
						<Input type="password"  placeholder="Create password"
							onChange={(e)=>setPassword(e.target.value)} required />
						<div className="mt-4">
							<Button type="submit" onClick={SignupUser}><Link to="/">Sign Up</Link></Button>
						</div>
					</Col>
				</FormGroup>					
			</Form> 
      </div>
			</div>
      </div>
		{/* <Footer /> */}
    </>
  );
}

export default SignUp;