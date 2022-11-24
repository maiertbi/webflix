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
import { useForm } from "react-hook-form";

const NabarComp =(props) =>{
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

      return (
          <Navbar bg="dark" variant={"dark"} expand="lg">
            <Container fluid>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                  <NavLink to={"/home"} activeStyle>MovieFLIX</NavLink>
                  <NavDropdown title="User Name" id="navbarScrollingDropdown">
                    <NavDropdown.Item>
                      <NavLink to={"/logout"} activeStyle >Logout</NavLink>
                    </NavDropdown.Item>
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