import { useEffect, useState } from 'react';

import React from 'react';

const Book = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('/api/books').then((res) => console.log(res));
    //   .then((data) => {
    //       console.log(data);
    //     });
  });

  return <div>This is a test script!</div>;
};

export default Book;
