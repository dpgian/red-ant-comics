import React, { useEffect, useState } from 'react';
import './styles/main.css';
import './styles/normalize.css';
import { useDispatch } from 'react-redux';
import { fetchComics } from './features/comics/comicsSlice'
import Comics from './features/comics/Comics';
import Sidebar from './features/sidebar/Sidebar';

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
        <header className="site-header">
            <h1 className="site-heading">Red Ant Comics</h1>
            <button className="favourites-toggle js-favourites-toggle" onClick={ToggleFavouriteClass}></button>
        </header>
      
        <Comics />

        <Sidebar showFavourite={showFavourite} ToggleFavouriteClass={ToggleFavouriteClass} />
            
    </div>
  );
}

export default App;
