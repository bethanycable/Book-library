import React, {useState} from 'react'

import AddBookModal from '../components/addBookModal.jsx'
import BookCard from '../components/BookCard.jsx'

const Main = () => {
  const [ modalOpen, setModalOpen ] = useState(false);
  const [ bookCardId, setBookCardId ] = useState('');
  

  const bookCards = [
    { id:'readbooks', title: 'Read Books'}, 
    {id:'likedbooks', title: 'Liked Books'}, 
    {id: 'dislikedbooks', title: 'Disliked Books'}, 
    {id: 'toreadbooks', title: 'Books to Read'}].map((call, index) => {
    return <BookCard key={index} id={call.id} title={call.title} setModalOpen={setModalOpen} setBookCardId={setBookCardId}/>
  })

  return (
    <div className='book-section'>
      <h3>All Books</h3>
      <div className='card-container'>
        {bookCards}
      </div>
      {modalOpen && <AddBookModal setModalOpen={setModalOpen} id={bookCardId}/>}
    </div>
    
  )
}

export default Main
