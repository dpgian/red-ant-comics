import React from 'react'

export default function Header({ToggleFavouriteClass}) {

    return (
        <React.Fragment>
 
            <header className="site-header">
                <h1 className="site-heading">Red Ant Comics</h1>
                <button className="favourites-toggle js-favourites-toggle" onClick={ToggleFavouriteClass}></button>
            </header>

      </React.Fragment>
  )
}
