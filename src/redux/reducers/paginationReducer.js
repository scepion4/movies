const initialState={
   page:1,
}

export default function paginationReducer (state=initialState,action){
   if (action.type==='NOW_NUMBER'){
      return {
         ...state,
        page:action.payload,
      }
   } 
   return state
}