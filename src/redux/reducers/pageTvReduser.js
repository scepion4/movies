const initialState={
   loaded:false,
   pageInformation:[]
}

export default function PageTvReduser(state=initialState,action){
   if(action.type==='NEW_INFORMATION'){
      return{
         ...state,
         loaded:true,
         pageInformation:action.payload
      }
   }
   return state
}