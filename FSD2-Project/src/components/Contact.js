import React, {useState, Component} from "react";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, Col, FormFeedback } from 'reactstrap';

function Contact() {
    const[fname1, setFname]=useState("");
    const[tel1, setTel]=useState("");
    const[email1, setEmail]=useState("");
    const[feedback, setFeedback]=useState("");
    const history = useNavigate();
  
    const UserFeedback = ()=>{//function where the user entered feedback will be collected and stored in the local storage
      const Feedback = {
        "name":fname1,
        "telnum":tel1,
        "email":email1,
        "message":feedback,
       }
      if (fname1.length > 3 & tel1.length > 5){
        axios.post(`http://localhost:5000/feedback`,Feedback).then((res)=>{
          console.log("Feedback submitted successfully")
          history("/home")
        }).catch((err)=>{
          console.log(err);
        })
      }
      else{
        if(fname1.length === 0)
        {
          console.log("Name should not be empty")
        }
        if(tel1.length === 0)
        {
          console.log("Telnum should not be empty")
        }
      }
    }  
  
    return (
      <>
        <Header />
        <div className="contact">             
            <div className="col-12">
              {/* form to enter the required details by the user which will get stored in the feedback database  */}
              <Form>
                <h3>Send us your Feedback</h3>
                  <FormGroup row>
                       <Label htmlFor="fname"md={{size: 10, offset: 1}}>Name</Label>
                       <Col md={{size: 10, offset: 1}}>
                          <Input type="text" placeholder="Enter full name" 
                          onChange={(e)=>setFname(e.target.value)} required />
                      </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label htmlFor="telnum" md={{size: 10, offset: 1}}>Contact No.</Label>
                     <Col md={{size: 10, offset: 1}}>
                         <Input type="tel" id="telnum" name="telnum" placeholder="Enter tel no." 
                              onChange={(e)=>setTel(e.target.value)} required />
                      </Col>
                  </FormGroup>
                  <FormGroup row>
                       <Label htmlFor="email" md={{size: 10, offset: 1}}>Email</Label>
                       <Col md={{size: 10, offset: 1}}>
                           <Input type="email" id="email" name="email" placeholder="Enter email id" 
                              onChange={(e)=>setEmail(e.target.value)} required />
                      </Col>
                  </FormGroup>
                  <FormGroup row>
                        <Col md={{size: 5, offset: 1}}>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox"
                                        name="agree"
                                    //    checked={this.state.agree}
                                    //    onChange={this.handleInputChange} /> {' '}
                                    />May we contact you?
                                </Label>
                            </FormGroup>
                        </Col>
                        <Col md={{size: 3, offset: 1}}>
                            <Input type="select" name="contactType"
                                //   value={this.state.contactType}
                                //    onChange={this.handleInputChange}
                                >
                                <option>Tel.</option>
                                <option>Email</option>
                            </Input>
                        </Col>
                         </FormGroup>
                         <FormGroup row>
                               <Label htmlFor="message" md={{size: 10, offset: 1}}>Your Feedback</Label>
                               <Col md={{size: 10, offset: 1}}>
                                   <Input type="textarea" id="message" name="message"
                                       rows="8" onChange={(e)=>setFeedback(e.target.value)} required />
                                </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={{size: 4, offset: 1}}>
                                <Button type="submit"  onClick={UserFeedback}>
                                    Send Feedback</Button>
                            </Col>
                        </FormGroup>
                </Form> 
            </div>
        </div>
        <Footer />
      </>
    );
  }
  


// class Contact extends Component {

//   constructor(props) {
//     super(props);

//     this.state = {
//       firstname: '',
//       lastname: '',
//       telnum: '',
//       email: '',
//       agree: false,
//       contactType: 'Tel.',
//       message: '',
//       touched: {
//           firstname: false,
//           lastname: false,
//           telnum: false,
//           email: false
//       }
//   }
//   this.handleSubmit = this.handleSubmit.bind(this);
//   this.handleInputChange = this.handleInputChange.bind(this);
//   this.handleBlur = this.handleBlur.bind(this);
// }

// handleInputChange(event) {
//     const target = event.target;
//     const value = target.type === 'checkbox' ? target.checked : target.value;
//     const name = target.name;

//     this.setState({
//       [name]: value
//     });
// }

// handleSubmit(event) {
//     console.log('Current State is: ' + JSON.stringify(this.state));
//     // alert('Current State is: ' + JSON.stringify(this.state));
//     event.preventDefault();
// }

// handleBlur = (field) => (evt) => {
//   this.setState({
//       touched: { ...this.state.touched, [field]: true }
//   });
// }

// validate(firstname, lastname, telnum, email) {
//   const errors = {
//       firstname: '',
//       lastname: '',
//       telnum: '',
//       email: ''
//   };

//   if (this.state.touched.firstname && firstname.length < 3)
//       errors.firstname = 'First Name should be >= 3 characters';
//   else if (this.state.touched.firstname && firstname.length > 10)
//       errors.firstname = 'First Name should be <= 10 characters';

//   if (this.state.touched.lastname && lastname.length < 3)
//       errors.lastname = 'Last Name should be >= 3 characters';
//   else if (this.state.touched.lastname && lastname.length > 10)
//       errors.lastname = 'Last Name should be <= 10 characters';

//   const reg = /^\d+$/;
//   if (this.state.touched.telnum && !reg.test(telnum))
//       errors.telnum = 'Tel. Number should contain only numbers';

//   if(this.state.touched.email && email.split('').filter(x => x === '@').length !== 1)
//       errors.email = 'Email should contain a @';

//   return errors;
// }

   

//   render() {
//     const errors = this.validate(this.state.firstname, this.state.lastname, this.state.telnum, this.state.email);
//     // if (errors){
//     //     axios.post(`http://localhost:8000/feedback`,User).then((res)=>{
//     //       console.log("user created successfully")
//     //       history("/")
//     //     }).catch((err)=>{
//     //       console.log(err);
//     //     })
//     //   }
//     return (  
//       <div>
//           <Header />
//           <div className="contact">
//             <div className="col-12">
//               <Form onSubmit={this.handleSubmit}>
//               <h3>Send us your Feedback</h3>
//                   <FormGroup row>
//                       <Label htmlFor="firstname"md={{size: 10, offset: 1}}>First Name</Label>
//                       <Col md={{size: 10, offset: 1}}>
//                           <Input type="text" id="firstname" name="firstname"
//                               placeholder="First Name"
//                               value={this.state.firstname}
//                               valid={errors.firstname === ''}
//                               invalid={errors.firstname !== ''}
//                               onBlur={this.handleBlur('firstname')}
//                               onChange={this.handleInputChange} />
//                           <FormFeedback>{errors.firstname}</FormFeedback>
//                       </Col>
//                   </FormGroup>
//                   <FormGroup row>
//                       <Label htmlFor="lastname" md={{size: 10, offset: 1}}>Last Name</Label>
//                       <Col md={{size: 10, offset: 1}}>
//                           <Input type="text" id="lastname" name="lastname"
//                               placeholder="Last Name"
//                               value={this.state.lastname}
//                               valid={errors.lastname === ''}
//                               invalid={errors.lastname !== ''}
//                               onBlur={this.handleBlur('lastname')}
//                               onChange={this.handleInputChange} />
//                           <FormFeedback>{errors.lastname}</FormFeedback>
//                       </Col>
//                   </FormGroup>
//                   <FormGroup row>
//                       <Label htmlFor="telnum" md={{size: 10, offset: 1}}>Contact No.</Label>
//                       <Col md={{size: 10, offset: 1}}>
//                           <Input type="tel" id="telnum" name="telnum"
//                               placeholder="Tel. Number"
//                               value={this.state.telnum}
//                               valid={errors.telnum === ''}
//                               invalid={errors.telnum !== ''}
//                               onBlur={this.handleBlur('telnum')}
//                               onChange={this.handleInputChange} />
//                           <FormFeedback>{errors.telnum}</FormFeedback>
//                       </Col>
//                   </FormGroup>
//                   <FormGroup row>
//                       <Label htmlFor="email" md={{size: 10, offset: 1}}>Email</Label>
//                       <Col md={{size: 10, offset: 1}}>
//                           <Input type="email" id="email" name="email"
//                               placeholder="Email"
//                               value={this.state.email}
//                               valid={errors.email === ''}
//                               invalid={errors.email !== ''}
//                               onBlur={this.handleBlur('email')}
//                               onChange={this.handleInputChange} />
//                           <FormFeedback>{errors.email}</FormFeedback>
//                       </Col>
//                   </FormGroup>
//                           <FormGroup row>
//                               <Col md={{size: 5, offset: 1}}>
//                                   <FormGroup check>
//                                       <Label check>
//                                           <Input type="checkbox"
//                                               name="agree"
//                                               checked={this.state.agree}
//                                               onChange={this.handleInputChange} /> {' '}
//                                           May we contact you?
//                                       </Label>
//                                   </FormGroup>
//                               </Col>
//                               <Col md={{size: 3, offset: 1}}>
//                                   <Input type="select" name="contactType"
//                                           value={this.state.contactType}
//                                           onChange={this.handleInputChange}>
//                                       <option>Tel.</option>
//                                       <option>Email</option>
//                                   </Input>
//                               </Col>
//                           </FormGroup>
//                           <FormGroup row>
//                               <Label htmlFor="message" md={{size: 10, offset: 1}}>Your Feedback</Label>
//                               <Col md={{size: 10, offset: 1}}>
//                                   <Input type="textarea" id="message" name="message"
//                                       rows="8"
//                                       value={this.state.message}
//                                       onChange={this.handleInputChange}></Input>
//                               </Col>
//                           </FormGroup>
//                           <FormGroup row>
//                               <Col md={{size: 4, offset: 1}}>
//                                   <Button type="submit">
//                                       Send Feedback
//                                   </Button>
//                               </Col>
//                           </FormGroup>
//                       </Form>
//                   </div>
//              </div>
//          <Footer />
//       </div>
//   );
    
//   }

// }

 
export default Contact;