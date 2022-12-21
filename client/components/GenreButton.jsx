import React from 'react';

const GenreButton = () => {
  const genreButton = ['Romance', 'Science Fiction', 'Fantasy', 'Thriller', 'Non-Fiction', 'Manga'].map((button, index) => <button key={index} className="genre">{button}</button>);
  return (
    <div className='hidden-div'>
        {genreButton}  
    </div>

  )
};

export default GenreButton
