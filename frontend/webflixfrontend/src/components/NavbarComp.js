import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
import { useState, useEffect} from "react";
import { useHistory } from "react";
import LogIn from './LogIn';
import axios from "../api/axios.js";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
/*import { Route,Switch, BrowserRouter, Navigate } from 'react-router-dom';
import LogIn from '../LogIn.js';*/



const NavbarComp = (props) =>{
  const [currUser, setCurrUser] = useState("");
  let navigate = useNavigate();
  
  useEffect(() => {
    currUserName();
  }, []);
  
  function logOut() {
    localStorage.clear();
    navigate("/");
  }

  const currUserName = async function() { 
    const response = await axios.get("http://localhost:3000/api/user/me", {
      headers: { "x-auth-token": localStorage.getItem("userData") }
    });
    setCurrUser(response?.data.name)
  };


/*<BrowserRouter>
  <Switch>
  <div className="App">
    <Route exact path="/(login)" component={LoginContainer}/>
    <Route component={NavbarComp}/>

  </div>
  </Switch>
</BrowserRouter>
 <*/

      return (
        <div className="container-fluid">         
            <Navbar>
              <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <div className="flex-1"> 
                  <NavLink className="navlink" to={"/home"} activestyle="true">MovieFLIX</NavLink>
                  </div>
                      <NavDropdown className="navlink" title={currUser}
                        id="navbarScrollingDropdown">
                            <NavDropdown.Item onClick={logOut}>  
                              Logout
                            </NavDropdown.Item>
                      </NavDropdown>
                   
                      <NavLink className="navlink" to={"/add"} activestyle="true">
                      + Add movie
                      </NavLink>  
                </Navbar.Collapse>
            </Navbar>       
        </div>
      )
    }
export default  NavbarComp;