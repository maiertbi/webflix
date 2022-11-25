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
          <Navbar bg="dark" variant={"dark"} expand="lg">
            <Container fluid>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                  <NavLink to={"/home"} activeStyle>MovieFLIX</NavLink>
                  <NavDropdown title="User Name" //{user && user.name && user.email}
                   id="navbarScrollingDropdown">
                    <NavDropdown.Item>  
                      Logout
                    </NavDropdown.Item>
                    <NavLink to={"/logout"} activeStyle >Logout</NavLink>
                  </NavDropdown>

                  <NavLink to={"/add"} activeStyle>
                   + Add movie
                  </NavLink>
                
              </Navbar.Collapse>
          </Container>
      </Navbar>
      )
    }
export default  NabarComp;