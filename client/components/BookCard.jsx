import React, { useEffect, useState } from 'react';

const BookCard = ({id, title, setModalOpen, setBookCardId}) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(`/api/${id}`).then((res) => res.json())
      .then((data) => {
        setBooks(data);
      });
  }, []);

  const AddBookClick = () => {
    setModalOpen(true); 
    setBookCardId(id);
  }

  const bookItems = books.map((book) => {
    return <li key={book.book_id}>"{book.book_title}" by {book.first_name} {book.last_name}</li>
  })

  return (
    <div className='book-card'>
      <h4 id={id}>{title}</h4>
      <ul>{bookItems}</ul>
      <button className='add-book' onClick={AddBookClick}>Add a Book</button>
    </div>);
};

export default BookCard;
