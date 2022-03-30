import React from 'react';
import { useSelector } from 'react-redux';
import { ComicCard } from './ComicCard';

export default function Comics() {
 
  //Read possible fetching error
  const fetchingError = useSelector((state) => state.comics.error)
  
  return (
    <main className="site-content">
            <ul id="comics-list" className="comics-list">

              {/* Displays error if any, else will display comics cards */}
              {
                fetchingError ? 
                  <p style={{textAlign: 'center', textTransform: 'uppercase', fontSize: '21px'}} >
                    {`API ERROR: ${fetchingError}`}
                  </p>
                  :
                  <ComicCard />
              }

            </ul>
        </main>
  );
}
