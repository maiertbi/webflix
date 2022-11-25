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

const NabarComp =(props) =>{
/*  let user = JSON.parse(localStorage.getItem('user-info'));
  const history = useHistory();
  function logOut() {
    localStorage.clear();
    history.push('/login'); // /auth

    <NavDropdown.Item onClick={logOut}>  
                      Logout
                    </NavDropdown.Item>
  }*/ //logout


      return (
        <div classname="container-fluid">         
            <Navbar>
              <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <div classname="flex-1"> 
                  <NavLink class="navlink" to={"/home"} activeStyle>MovieFLIX</NavLink>
                  </div>
                      <NavDropdown class="navlink" title="User Name" //{user && user.name && user.email}
                        id="navbarScrollingDropdown">
                          <NavDropdown.Item>  
                            Logout
                          </NavDropdown.Item>
                          <NavLink class="navlink" to={"/logout"} activeStyle >Logout</NavLink>
                      </NavDropdown>
                   
                      <NavLink class="navlink" to={"/add"} activeStyle>
                      + Add movie
                      </NavLink>
                  
                </Navbar.Collapse>
            </Navbar>       
        </div>
      )
    }
export default  NabarComp;