import { combineReducers } from 'redux';
import paginationReducer from './paginationReducer';
import loadedMovies from './loaded'
import searchReducer from './searchReducer'
 


const rootReducer=combineReducers({
  paginationReducer,
  loadedMovies,
  searchReducer,
})

export default rootReducer