import { useEffect, useState } from 'react';

// import styles from './styles/styles.scss';
import React from 'react';

const Book = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('/api/books').then((res) => res.json())
      .then((data) => {
          setBooks(data);
        });
  }, []);

const bookItems = books.map((book, index) => {
  return <li key={index}>{book.title} by {book.author}</li>
})
  return (<div>
    <p>This is a test script!</p>
    <ul>{bookItems}</ul>
    </div>);
};

export default Book;
