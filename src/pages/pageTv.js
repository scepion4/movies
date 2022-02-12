import axios from 'axios'
import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { Row,Col,Table } from 'react-bootstrap'
import { setTVInformation } from '../redux/actions/loaded'

export default function PageTv() {
   const{id}=useParams()
   const tv = useSelector(state => state.PageTvReduser.pageInformation)
   const loaded=useSelector(state=>state.PageTvReduser.loaded)
   const dispatch = useDispatch()
   console.log(tv)
   useEffect(() => {
     axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=85ac8a4f8fb2313106a97d820cf60e1f`)
     .then((data)=>dispatch(setTVInformation(data.data)))
   }, [])
   if(loaded){
   return (
   <div style={{marginTop:'100px'}}>
      <Row style={{marginLeft:'20px'}} md={2} xs={1}>
         <Col>
         <img src={'https://image.tmdb.org/t/p/w500'+tv.poster_path}/>
         <div className='raiting'>{tv.vote_average}</div>
         </Col>
         <Col>
         <h3>{tv.original_name}</h3>
         <p>{tv.overview}</p>
         <Row>
            <Col>
            <p>First air date:</p>
            <p>Last air date:</p>
            <p>Number of seasons:</p>
            <p>Number of episodes:</p>
            <p>Spoken languages</p>
            <p>Tagline:</p>
            </Col>
            <Col>
            <p>{tv.first_air_date}</p>
            <p>{tv.last_air_date}</p>
            <p>{tv.number_of_seasons}</p>
            <p>{tv.number_of_episodes}</p>
            <p>{Array.isArray(tv.spoken_languages)?tv.spoken_languages.map(i=>i.english_name+' '):tv.spoken_languages}</p>
            <p>{tv.tagline}</p>
            </Col>
         </Row>
         </Col>
      </Row>
   </div>
   )
   } else if(!loaded){
      return <div>Loading...</div>
   }
}
