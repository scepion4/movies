const initialState={
   loaded:false,
   tvShows:[]
}

export default function loadedTvReducer (state=initialState, action){
   if(action.type==='NEW_TV_MOVIES'){
      return{
         ...state,
         loaded:true,
         tvShows:action.payload
      }
   }
   return state
}