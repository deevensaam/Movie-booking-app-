import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import {Link, useNavigate} from 'react-router-dom';
import { FormGroup,Button, Label, Input, Row, Col } from 'reactstrap';
import store from "./store";
import cinema from "../cinema.png";

function Login() {
    const [username1, setUsername] = useState("");
    const [password1, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const history = useNavigate();  

    const LoginUser = ()=>{//the code for logging into the user account for the details he entered
		const cred = {
			username: username1,
			password: password1
		}
      axios.post(`http://localhost:5000/login`,cred)
      .then( res =>{
        if (res.data){//if the details entered are valid , user gets logged in successfully
			const user = {
				userId : res.data._id,
				username: res.data.username,
				password: res.data.password
			};
			store.dispatch({ type: "loginSuccess", payload: user });
			console.log("Login Success");
			history("/home");
        }  
		else {//if the entered details are invalid then user cant enter the website
		store.dispatch({ type: "loginFail" });
		alert("Invalid Username or Password");
	  }
	})
    .catch((err)=>{
        store.dispatch({ type: "loginFail" });
        setMessage(err);
        console.log(err);
     });
    };
  
    return ( 
        <>
        {/* <Header /> */}
		<div className="box col-12 col-sm col-md">
                <div className="media">
                    <img className="d-flex" src={cinema} width="50%" alt="image" />
                    <div className="media-body">
					<div className="signin">
					<center><h3>Log In</h3></center>
					{/* form for entering user details and carrying out the process of user verification */}
					<FormGroup>						
						<Label>
							<i className="fa fa-user" aria-hidden="true"></i> Username
						</Label>
						<Input
							type="text"
							onChange={(e) => setUsername(e.target.value)}
							required>
						</Input>
					</FormGroup>
					<FormGroup>
						<Label><i className="fa fa-lock" aria-hidden="true"></i> Password</Label>
						<Input  type="password"
								onChange={(e) => setPassword(e.target.value)}
								required>
						</Input>
					</FormGroup>
					<FormGroup>
						<Button	type="submit" onClick={LoginUser} 
							variant="contained" >
							Sign In 
						</Button>
					</FormGroup>
					<FormGroup>
						<p><Link to="/signup" style={{ color: "white" }}>
							Create new account</Link></p>
					</FormGroup>			
					</div>
				</div>
			</div>
		</div>
								
        {/* <Footer /> */}
        </>
        
    );
}
 
export default Login;


