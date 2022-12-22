import { useEffect, useState } from 'react';

import React from 'react';

const BookCard = ({id, title}) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(`/api/${id}`).then((res) => res.json())
      .then((data) => {
          // console.log(data)
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

      <button className='add-book'>Add a Book</button>
    </div>);
};

export default BookCard;
