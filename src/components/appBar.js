import * as React from 'react';
import {Navbar,Nav,Container,NavDropdown,Form,FormControl,Button} from 'react-bootstrap'
import Home from '../pages/home';
import { Routes, Route, Link } from "react-router-dom";
import { setInputSearch } from '../redux/actions/searchAction';
import { useDispatch } from 'react-redux';



export default function SiteMenu (){
 const dispatch = useDispatch()
  
   return(
      <>
      <Navbar fixed="top" variant='dark' bg="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">MOVIE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="./link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={(e)=>dispatch(setInputSearch(e.target.value))}
        />
        <Button variant="outline-success">Search</Button>
      </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="link" element={<Link />} />
  </Routes>
  
  </>
   )
}