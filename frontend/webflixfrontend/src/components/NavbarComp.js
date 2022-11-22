import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {BrowserRouter as Router,
  Routes ,Route, 
        Link
      } from 'react-router-dom';

const NabarComp =(props) =>{
      return (
        <Router>
          <Navbar bg="dark" variant={"dark"} expand="lg">
            <Container fluid>
              <Navbar.Brand as={Link} to={"/home"} href="#">MovieFLIX</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                >

                  <NavDropdown title="User Name" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Logout</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#">
                   + Add movie
                  </Nav.Link>
                </Nav>
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
    </Router>
      )
    }
export default  NabarComp;