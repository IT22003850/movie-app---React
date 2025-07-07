import React from 'react'
import "../css/Favorites.css";

function Favourites() {
  return (
    <div>
        <div className='favorites-empty'>
            <h2>No Favourite Movies Yet</h2>
            <p>Start adding movies to your favourites and they will appear here!</p>
        </div>
    </div>
  )
}

export default Favourites