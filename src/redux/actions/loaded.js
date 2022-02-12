export const setMovies=(movies)=>({
      type: 'isloaded',
      payload:movies
})
export const setGenres=(genres)=>({
      type:'ALL_GENERES',
      payload:genres
})

export const setPage=(page)=>({
      type:'NOW_NUMBER',
      payload:page,
})
export const setInputSearch=(value)=>({
      type:'NEW_VALUE',
      payload:value
   })
   export const setTVInformation=(pageInformation)=>({
      type:'NEW_INFORMATION',
      payload:pageInformation
   })
   export const setTvShows=(tvShows)=>({
      type:'NEW_TV_MOVIES',
      payload:tvShows
      })

export const SetPageInformation=(pages)=>({
      type:'Pages_Information',
      payload:pages
})