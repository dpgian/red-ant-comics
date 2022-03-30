import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleFavouriteComic } from '../comics/comicsSlice'

export function ComicCard() {

    /*
        Reads all comics and favourites
        Clicking on the button will add comics to favourite
        Displayed button text will be based whether a comic is in the favourite list
    */

    const allComics = useSelector((state) => state.comics)
    const comics = allComics.comics
    //const favourites = allComics.favourites
    
    const dispatch = useDispatch()


    // Toggles (add/remove) comic from favourites

    const handleClick = (comic) => {
        dispatch(toggleFavouriteComic(comic))
    }

    //console.log(allComics)

    return (
        <React.Fragment>
            
            {comics.map((comic) => (
                <li key={comic.id} className="comic-item">
                    <div className="comic-card">
                        <img alt='' src={`${comic.thumbnail.path}/portrait_uncanny.jpg`} />
                        <h2>{comic.title}</h2>
                            {/* 
                            This should be implemented with 'favourites' as piece of state
                            {
                                favourites.some(e => e.id === comic.id) ? 
                                    <button className="button js-add" onClick={() => handleClick(comic)}>Remove from favourites</button>
                                    :
                                    <button className="button js-add" onClick={() => handleClick(comic)}>Add to favourites</button>
                            } */}
                            {
                                comic.favourite ?
                                <button className="button js-add" onClick={() => handleClick(comic)}>Remove from favourites</button>
                                :
                                <button className="button js-add" onClick={() => handleClick(comic)}>Add to favourites</button>
                            }
                    </div>
                </li>
            ))}

        </React.Fragment>
    )
}
