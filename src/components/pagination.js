import React from 'react';
import { Pagination } from '@mui/material';
import { useDispatch,useSelector } from 'react-redux';
import {setPage} from '../redux/actions/pagination'

function PaginationSite() {
const dispatch = useDispatch(); 
const page = useSelector(state => state.paginationReducer.page)
   return (
      <Pagination onClick={(e)=>dispatch(setPage(e.target.innerText))} style={{display:'flex', justifyContent:'center',marginTop:'10%'}} count={100} variant="outlined" color="secondary" />
   )
}

export default PaginationSite
