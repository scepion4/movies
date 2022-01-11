import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { setMovies } from '../redux/actions/loaded'
import { Card, Row, Col } from 'react-bootstrap'
import { Rating } from '@mui/material';
import {Link } from 'react-router-dom';

export default function GanresPage() {
   const dispatch = useDispatch()
   const{id}=useParams()
   const moviesGanres = useSelector(state => state.loadedMovies.movies)
   const loaded = useSelector(state => state.loadedMovies.loaded)
   console.log(moviesGanres)
   useEffect(() => {
      
      axios.get(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&with_genres=${id}&page=1&api_key=85ac8a4f8fb2313106a97d820cf60e1f`)
      .then(data=>dispatch(setMovies(data.data.results)))
   }, [])
  if(loaded){
   return(
      <Row xs={1} md={4}  className="g-4">{
         moviesGanres.map(item => (
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
   )
  }
  else if(!loaded){
     return(
      <div>Loading...</div>
     )

  }
}

