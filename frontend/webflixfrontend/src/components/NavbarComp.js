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
import { useState } from "react";
import { useHistory } from "react";

const NavbarComp =(props) =>{
/* let user = JSON.parse(localStorage.getItem('user-info'));
  const history = useHistory();
  function logOut() {
    localStorage.clear();
    history.push('/auth'); // /auth
  }*/ //logout onClick={logOut}


      return (
        <div className="container-fluid">         
            <Navbar>
              <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <div className="flex-1"> 
                  <NavLink className="navlink" to={"/home"} activestyle="true">MovieFLIX</NavLink>
                  </div>
                      <NavDropdown className="navlink" title="Username" //{user && user.name && user.email}
                        id="navbarScrollingDropdown">
                          <NavDropdown.Item>  
                            Logout
                          </NavDropdown.Item>
                          <NavLink className="navlink" to={"/logout"} activestyle="true" >Logout</NavLink>
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