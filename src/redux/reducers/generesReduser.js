const initialState={
   loaded:false,
   genres:[],
}
export default function GeneresReduser(state=initialState,action) {
  if(action.type==='ALL_GENERES'){
     return{
        ...state,
        loaded:true,
        genres:action.payload
     }
  }
  return state
}
