const initialState={
   loaded:false,
   pages:1,
}

export default function PagesInformation(state=initialState,action){
if(action.type==='Pages_Information'){
   return {
      loaded:true,
      pages:action.payload
   }
}
return state
}