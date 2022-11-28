import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {
  Nav,
  NavLink,
  Hamburger,
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

      return (
        <> <Nav>
                  <Navbar>
                      <NavLink  to={"/home"} activestyle="true">MovieFLIX</NavLink>
                      <NavLink  to={"/add"} activestyle="true"> + Add movie</NavLink>
                        
                        <NavDropdown id="basic-nav-dropdown"  title={currUser}>
                              <NavDropdown.Item onClick={logOut}>  
                                Logout
                              </NavDropdown.Item>
                      </NavDropdown>
                   
                 </Navbar>
            </Nav>    
        </>
      )
    }
export default  NavbarComp;