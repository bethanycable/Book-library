import { useEffect, useState } from 'react';

import AddBookModal from './AddBookModal.jsx';
import React from 'react';

const BookCard = ({id, title}) => {
  const [books, setBooks] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    fetch(`/api/${id}`).then((res) => res.json())
      .then((data) => {
          setBooks(data);
        });
  }, []);


const bookItems = books.map((book) => {
  return <li key={book.book_id}>"{book.book_title}" by {book.first_name} {book.last_name}</li>
})
  return (
    <div className='book-card'>
      <h4 id={id}>{title}</h4>
      <ul>{bookItems}</ul>
      <button className='add-book' onClick={() => {setModalOpen(true)}}>Add a Book</button>
      
      {modalOpen && <AddBookModal key={id} setModalOpen={setModalOpen} id={id}/>}
    </div>);
};

export default BookCard;
