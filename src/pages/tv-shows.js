import React from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import {setTvShows} from '../redux/actions/loadedTVAction'
import { Card, Row, Col } from 'react-bootstrap'
import { Rating,Link } from '@mui/material';
import PaginationSite from '../components/pagination';

export default function TvShows() {
   const dispatch = useDispatch();
   const loaded = useSelector(state => state.loadedTvReducer.loaded)
   const tvShows = useSelector(state => state.loadedTvReducer.tvShows)
   const page = useSelector(state => state.paginationReducer.page)
 useEffect(() => {
   axios.get(`https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&page=${page}&api_key=85ac8a4f8fb2313106a97d820cf60e1f`)
   .then((data)=>{
     dispatch(setTvShows(data.data.results))
   })
}, [page])
   if(loaded){
      return(
         <>
         <Row xs={1} sm={3} md={4} className='g-4'>
         {tvShows.map(tvShow =>(
           <Col key={tvShow.id}>
              <Card style={{ height: '100%', marginTop: '100px' }}>
                <Card.Img src={'https://image.tmdb.org/t/p/w500' + tvShow.backdrop_path} />
                <Card.Body>
                  <Card.Title>{tvShow.original_name}</Card.Title>
                  <Link style={{display:'block',margin:'30px 0px',backgroundColor:'blue',width:'100px',height:'30px', color:'white', textAlign:'center', lineHeight:'30px'}} href={`tv/${tvShow.id}`}>Read more..</Link>
                  <Rating name='customized-10' max={10} value={tvShow.vote_average} />
                </Card.Body>
              </Card>
           </Col> 
         ))}
       </Row>
       <PaginationSite />
       </>
      )
   } else if(!loaded){
      return <div>Loading...</div>
   }
}

