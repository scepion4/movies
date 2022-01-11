import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect} from 'react'
import axios from 'axios'
import {setMovies} from '../redux/actions/loaded'
import { useDispatch,useSelector } from 'react-redux'
import { Col,Row } from 'react-bootstrap'


export default function PageMovie() {
   let {id}=useParams()
   const dispatch = useDispatch()
   const loaded = useSelector(state => state.loadedMovies.loaded)
   const movie = useSelector(state => state.loadedMovies.movies)
   useEffect(()=>{
      axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=85ac8a4f8fb2313106a97d820cf60e1f`)
      .then((data)=>{
         dispatch(setMovies(data.data))
         
      })
   },[])
   if(loaded){
      return(

        <Row xs={1} md={2} lg={2} sm={1} style={{margin:'100px 0px 0px 3%'}} >
           <Col>
            <img style={{maxWidth:'100%'}} src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} />
            <div className='raiting'>{movie.vote_average}</div>
            </Col>
            <Col>
            <h3>{movie.original_title}</h3>
         <p >{movie.overview}</p>
         <Row>
            <Col>
            <p>Genres:</p>
            <p>Release date:</p>
            <p>Runtime:</p>
            <p>Budget:</p>
            <p>Revenue:</p>
            <p>Spoken languages:</p>
            <p>Production companies:</p>
            </Col>
            <Col>
            <p>{Array.isArray(movie.genres)?movie.genres.map(item=>item.name+' '):movie.genres}</p>
            <p>{movie.release_date}</p>
            <p>{movie.runtime}min</p>
            <p>{movie.budget}$</p>
            <p>{movie.revenue}$</p>
            <p>{Array.isArray(movie.spoken_languages)?movie.spoken_languages.map(item=>item.english_name+' '):movie.spoken_languages}</p>
            <p>{Array.isArray(movie.production_companies)?movie.production_companies.map(item=>item.name+' '):movie.production_companies}</p>
            </Col>
         </Row>
         </Col>
         </Row>
      )
   }else if(!loaded){
      return(
         <div>Loading...</div>
      )
   }
}
