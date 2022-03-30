import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';

// API_KEY should be hidden (back-end)
const API_KEY = '3cb62d086d5debdeea139095cbb07fe4';

const initialState = {
  comics: [],
  error: '',
  // favourites: [],         --currently not in use, can be implemented by refactoring toggleFavouriteComic(comicsSlice:25) ComicCard:15/33 Sidebar:11/34
};

// Fetches comics from API
export const fetchComics = createAsyncThunk(
  'comics/fetchComics',
  async () => {
    const response = await fetch(`https://gateway.marvel.com/v1/public/comics?apikey=${API_KEY}&ts=redant&hash=140e85a50884cef76d614f6dacada288`);
    // The value we return becomes the `fulfilled` action payload
    return response.json()
  }
);

export const comicsSlice = createSlice({
  name: 'comics',
  initialState,
  reducers: {
    toggleFavouriteComic: (state, action) => {
      // Following method is an implementation of 'favourites' as state

      // // Checks if passed comic (action.payload.id) is in the favourites comics
      // if (state.favourites.some(e => e.id === action.payload.id)) {
      //   // Removes the comic from the favourites
      //   let removedFavourite = state.favourites.filter(e => e.id !== action.payload.id)
      //   return {...state, favourites: removedFavourite}
      // } else {
      //   // Add the comic to the favourites
      //   let addedFavourite = [...state.favourites, action.payload]
      //   return {...state, favourites: addedFavourite}
      // }
      
      /*
        Replaces favourite flag of selected comic
       */
      const index = state.comics.findIndex((comic) => comic.id === action.payload.id)
      state.comics[index].favourite = state.comics[index].favourite === true ? false : true 
      //console.log(current(state))
    }
  },
  extraReducers: {
    [fetchComics.pending]: (state, action) => {
      //console.log('loading')
    },
    [fetchComics.fulfilled]: (state, action) => {
      //console.log('fetched')

      /*
        API Error handling 
        Bad API query returns a 409 code (ex. ?limit=196&)
      */

      if (action.payload.code === 409) {
        return {...state, error: action.payload.status}
      }

      /*
        Save received data to store
        Saved data contains only needed values
      */

      const fetchedComics = action.payload.data.results
      const comicsList = []
      fetchedComics.forEach(
        function (comic, i) {
          comicsList.push(
            { 
              id: i, 
              title: comic.title, 
              thumbnail: comic.thumbnail, 
              favourite: false 
            }
          )
        }
      );
      return {...state, comics: comicsList, error: ''}
    },
    [fetchComics.rejected]: (state, action) => {
      //console.log('rejected')
      //console.log(action.payload)
    }
  }
});


export const { toggleFavouriteComic } = comicsSlice.actions

export default comicsSlice.reducer;

 