// import AddBookModal from '../components/AddBookModal.jsx';
import BookCard from '../components/BookCard.jsx'
import React from 'react'

const Main = () => {
  // const [modalOpen, setModalOpen] = useState(false);

  const bookCards = [
    { id:'readbooks', title: 'Read Books'}, 
    {id:'likedbooks', title: 'Liked Books'}, 
    {id: 'dislikedbooks', title: 'Disliked Books'}, 
    {id: 'toreadbooks', title: 'Books to Read'}].map((call, index) => {
    return <BookCard key={index} id={call.id} title={call.title}/>
  })
  // console.log(bookCards)

  return (
    <div className='book-section'>
      <h3>All Books</h3>
      <div className='card-container'>
        {bookCards}
      </div>
      {/* {modalOpen && <AddBookModal key={id} setModalOpen={setModalOpen} id={id}/>} */}
    </div>
    
  )
}

export default Main
