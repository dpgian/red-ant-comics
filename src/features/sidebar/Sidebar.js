import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleFavouriteComic } from '../comics/comicsSlice'

export default function Sidebar({showFavourite, ToggleFavouriteClass}) {

    /*
        Fetches favourites comics from store
    */
    const dispatch = useDispatch()
    const comics = useSelector((state) => state.comics.comics)
    // Following line should be implemented with use of favourites as state
    //const favouriteComics = useSelector((state) => state.comics.favourites)

    /*
        Action used to add/remove favourite comics
    */
    const handleRemoveClick = (comic) => {
        dispatch(toggleFavouriteComic(comic))
    }

    return (
        <React.Fragment>
 
            <div id="favourites-panel" className={ showFavourite ? 'favourites-panel open' : 'favourites-panel'} >
                
                <div className="favourites-header">
                    <h2>Favourites</h2>
                    <button className="close js-close" onClick={ToggleFavouriteClass}></button>
                </div>

                <div className="favourites-content">
                    <ul className="favourites-list">  
                        Template for list items:
                        {/*
                        This should be implemented with use of 'favourites' as state 
                        {favouriteComics.map((comic) => (
                            <li key={comic.id}>
                                {comic.title}
                                <button className="remove js-remove" onClick={() => handleRemoveClick(comic)}></button>
                            </li>
                        ))} */}
                        {comics.filter(comic => comic.favourite).map((comic) => (
                            <li key={comic.id}>
                                {comic.title}
                                <button className="remove js-remove" onClick={() => handleRemoveClick(comic)}></button>
                            </li> 
                        ))}
                    </ul>
                </div>
                
            </div>

      </React.Fragment>
  )
}
