import * as React from 'react';
import { Navbar, Nav, Container, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import Home from '../pages/home';
import { Routes, Route, Link } from "react-router-dom";
import { setInputSearch } from '../redux/actions/searchAction';
import { useDispatch,useSelector } from 'react-redux';
import TvShows from '../pages/tv-shows';
import PageMovie from '../pages/pageMovie'
import PageTv from '../pages/pageTv';
import axios from 'axios';
import { useEffect } from 'react';
import { setGenres } from '../redux/actions/loaded';
import GanresPage from '../pages/ganresPage';

export default function SiteMenu() {
  const dispatch = useDispatch()
  const id = useSelector(state => state.GeneresReduser.id)
  const genres = useSelector(state => state.GeneresReduser.genres)
  console.log(genres)
  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=85ac8a4f8fb2313106a97d820cf60e1f')
    .then((data)=>dispatch(setGenres(data.data.genres.map(i=>i))))
  }, [])
  return (
    <>
      <Navbar fixed="top" variant='dark' bg="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">MOVIE</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">MOVIE</Nav.Link>
              <Nav.Link href="/tv">TV</Nav.Link>
              <NavDropdown title="Genres" id="basic-nav-dropdown">{
                genres.map(item=>
                  <NavDropdown.Item key={item.id} href={`/genres/${item.id}`}>{item.name}</NavDropdown.Item>
                  )
             }
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e) => dispatch(setInputSearch(e.target.value))}
              />
              <Button  variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/:id' element={<PageMovie/>} />
        <Route path="tv" element={<TvShows />} />
        <Route path="tv/:id" element={<PageTv />} />
        <Route path="genres/:id" element={<GanresPage />} />
      </Routes>

    </>
  )
}