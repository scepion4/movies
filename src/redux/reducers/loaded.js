
const initialState={
   loaded:false,
   movies:[]
}

export default function loadedMovies(state=initialState,action) {
   if(action.type==='isloaded'){
         return{
            ...state,
            loaded:true,
            movies:action.payload
         }
      }
     return state 
}