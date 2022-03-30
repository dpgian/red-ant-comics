import React, { useEffect, useState } from 'react';
import './styles/main.css';
import './styles/normalize.css';
import { useDispatch } from 'react-redux';
import { fetchComics } from './features/comics/comicsSlice'
import Comics from './features/comics/Comics';
import Sidebar from './features/sidebar/Sidebar';
import Header from './features/header/Header';

function App() {

  /*
    Toggle favourite class
  */
  const [showFavourite, setShowFavourite] = useState(false) 

  const ToggleFavouriteClass = () => {
    setShowFavourite(!showFavourite)
  }

  /*
    Fetch data from API as soon as App load
  */
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchComics())
  }, [dispatch])

  return (
    <div className="App">
        <Header ToggleFavouriteClass={ToggleFavouriteClass} />
      
        <Comics />

        <Sidebar showFavourite={showFavourite} ToggleFavouriteClass={ToggleFavouriteClass} />
            
    </div>
  );
}

export default App;
