import React from 'react'
import { useEffect } from 'react';
import { Card, Row, Col } from 'react-bootstrap'
import { Rating } from '@mui/material';
import PaginationSite from '../components/pagination';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setMovies } from '../redux/actions/loaded'
import { Route, Routes,Link } from 'react-router-dom';
import { useLocation,Outlet } from 'react-router-dom';



export default function Home() {
  const dispatch = useDispatch();
  const page = useSelector(state => state.paginationReducer.page)
  const loaded = useSelector(state => state.loadedMovies.loaded)
  const movies = useSelector(state => state.loadedMovies.movies)
  const searchInput = useSelector(state => state.searchReducer.searchValue)
  const filterMovies = movies.filter((movie) => {
    return movie.original_title.toLowerCase().includes(searchInput.toLowerCase())
  })
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&page=${page}&api_key=85ac8a4f8fb2313106a97d820cf60e1f`)
      .then(
        (data) => {
          dispatch(setMovies(data.data.results))
        }
      )
  }, [page])
  if (!loaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <Row xs={1} md={4}  className="g-4">
          {filterMovies.map((item) => (
            <Col key={item.id}>
              <Card style={{ height: '100%', marginTop: '100px' }}>
                <Card.Img src={'https://image.tmdb.org/t/p/w500' + item.backdrop_path} />
                <Card.Body>
                  <Card.Title>{item.original_title}</Card.Title>
                  <Link style={{ display: 'block', margin: '30px 0px',backgroundColor:'blue',width:'100px',height:'30px', color:'white', textAlign:'center', lineHeight:'30px' }} to={`/${item.id}`}>Read more..</Link>
                  <Rating name='customized-10' max={10} value={item.vote_average} />
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <PaginationSite />
                
      </>
    )
  }
}

