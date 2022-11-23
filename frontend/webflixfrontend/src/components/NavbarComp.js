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
                
                  <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
                    <select {...register("genre", { required: true })}>
                    <option value="">Choose Genre</option>
                    <option value="A">Drama</option>
                    <option value="B">Thriller</option>
                    <option value="C">Horror</option>
                    <option value="D">Science Fiction</option>
                    <option value="E">Crime</option>
                    </select>
                    <p>{data}</p>
                </form>

                <Form className="d-flex">
                  <Form.Control
                    className='form-control'
                    value={props.value}
                    onChange={(event) => props.setSearchValue(event.target.value)}
                    placeholder='Type to search...'
                  />
                  <Button variant="outline-light">Search</Button>
                </Form>
              </Navbar.Collapse>
          </Container>
      </Navbar>
      )
    }
export default  NabarComp;