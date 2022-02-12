import { combineReducers } from 'redux';
import paginationReducer from './paginationReducer';
import loadedMovies from './loaded'
import searchReducer from './searchReducer'
import loadedTvReducer from './loadedTV'
import PageTvReduser from './pageTvReduser';
import GeneresReduser from './generesReduser'
import PagesInformation from './pagesInformation'


const rootReducer=combineReducers({
  paginationReducer,
  loadedMovies,
  searchReducer,
  loadedTvReducer,
  PageTvReduser,
  GeneresReduser,
  PagesInformation,
})

export default rootReducer