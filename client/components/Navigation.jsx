import GenreButton from './GenreButton.jsx';
import React from 'react'

const Navigation = () => {
  return (
    <div className="nav">
        <h1>Bethany's Personal Library</h1>

        <div className="genre-list">
            <GenreButton />
        </div>
    </div>
  )
}

export default Navigation
