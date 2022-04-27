//Importing packages
import React, {Component} from 'react';
import { Navbar, Nav, NavbarToggler, Collapse, NavItem} from 'reactstrap';
import {NavLink} from 'react-router-dom';


class Header extends Component {  // Allows us to pass props to a defined class when a constructor is not present
    //Use to help in toggling the navigation bar
    constructor(props){
        super(props);
        this.state ={
            isNavOpen: false
        }; 
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav(){
        this.setState({  // Passing the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.
            isNavOpen: !this.state.isNavOpen
        });
    }

    render(){  //The render method returns a description of what the DOM should look like, and then React efficiently updates the real DOM to match.
        return(
            <>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>

                            <Nav navbar>  {/*Header for Home */}
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <span className="fa fa-home fa-lg"></span> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>   {/*Header for Nowshowing */}
                                    <NavLink className="nav-link" to="/nowshowing">
                                        <span className="fa fa-film fa-lg"></span> Now Showing 
                                    </NavLink>
                                </NavItem>
                                <NavItem>      {/*Header for Contact */}
                                    <NavLink className="nav-link" to="/contact">
                                        <span className="fa fa-address-card fa-lg"></span> Contact 
                                    </NavLink>
                                </NavItem>
                                <NavItem>       {/*Header to Logout */}
                                    <NavLink className="nav-link" to="/">
                                        <span className="fa fa-sign-in fa-lg"></span> Log out
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            {/* <Nav className="ml-auto" navbar>
                                <NavItem>
                                   <NavLink className="nav-link" to="/login">
                                        <span className="fa fa-sign-in fa-lg"></span> Log in
                                    </NavLink>
                                </NavItem>
                            </Nav> */}
                        </Collapse>
                    </div>
                </Navbar>
            </>
        )
    }
}
export default Header;