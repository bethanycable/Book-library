import { useEffect, useState } from 'react';

import React from 'react';

const Book = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('/api/readbooks').then((res) => res.json())
      .then((data) => {
          // console.log(data)
          setBooks(data);
        });
  }, []);

const bookItems = books.map((book, index) => {
  return <li key={book.book_id}>"{book.book_title}" by {book.first_name} {book.last_name}</li>
})
  return (<div>
    <ul>{bookItems}</ul>
    </div>);
};

export default Book;
