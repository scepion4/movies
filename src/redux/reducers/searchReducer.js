const initialState={
   searchValue:'',
}

export default function searchReducer (state=initialState,action){
   if(action.type==='NEW_VALUE'){
      return{
         searchValue:action.payload,
      }
   }
   return state
}