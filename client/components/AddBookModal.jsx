import React, { useEffect, useState } from 'react';

const useInput = init => {
    const [value, setValue] = useState('');
    
    const onChange = e => {
        setValue(e.target.value);
    };
    return [value, onChange];
}


const AddBookModal = ({setModalOpen, id}) => {
    const authorArr = [{author_id: 0, first_name: 'New', last_name: 'Author'}];
    const [ bookTitle, booktitleOnChange ] = useInput('');
    const [ author_id, setAuthorId ] = useState(authorArr[0].author_id);
    const [ author, setAuthor ] = useState(authorArr[0].first_name, authorArr[0].last_name);
    const [ titleError, setTitleError ] = useState(null);
    const [ authorError, setAuthorError ] = useState(null);
    const [ authorsArray, setAuthorsArray ] = useState(authorArr);

    useEffect(() => {
        fetch('/api/authors')
            .then(data => {
                data.authors.forEach(author => {
                    authorArr.push(author);
                })
                console.log('author array: ',authorArr)
                setAuthorsArray(authorArr);
            })
            .catch(err => console.log(err));
    }); 
    console.log('Authors: ', authorsArray)

    const addBook = () => {
        // if(bookTitle === '') {
        //     setTitleError('Please provide a Book Title');
        // } else if(author_id === 0) {
        //     setAuthorError('Please choose an Author or add a new one!');
        // }

        const bookBody = {
            bookTitle, 
            author_id
        }

        fetch(`/api/${id}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'Application/JSON'
            },
            body: JSON.stringify(body)
        })
    }

    useEffect(()=>{
        setTitleError(null);
    }, [bookTitle]);

    useEffect(()=>{
        setAuthorError(null);
    }, [author_id]);

    const authorOptions = authorsArray.map((author, index) => {
        return (
            <option key={index} value={author.author_id}>{author.first_name} {author.last_name}</option>
        );
    });

    // const handleAuthorChange = e => {
    //     const id = e.target.value;
    //     setAuthor(authorArr[id].first_name, authorArr[id].last_name );
    //     setSpeciesId(authorArr[id].author_id);
    // };

  return (
    <div className='modal-background'>
        <button type='button' className='cancel-btn' onClick={() => setModalOpen(false)}>X</button>
        <div className='add-book-modal-container'>
            <h3>Add a New Book!</h3>
            <div className="createBookFields">
                <label htmlFor="title">Book Title: </label>
                <input type="text" name="title" placeholder="The Lightning Thief"/>
                {/* {titleError ? (<span className="errorMsg">{titleError}</span>) : null} */}
            </div>
            <div className="createBookFields">
                <label htmlFor="author" className='author-label'>Author: </label>
                <select name="author" id='author-select'>
                    {authorOptions}
                </select>
            </div>
            {/* <div className='creatBookFields'>
                {author_id === 0 ? 
                <div className='author-input' style={{ display: block }}>
                    <label htmlFor="author-first-name">Author First Name: </label>
                    <input type="text" name="author-first-name" placeholder="Rick"/>
                    <label htmlFor="author-last-name">Author Last Name: </label>
                    <input type="text" name="author-last-name" placeholder="Riordan"/>
                </div> 
                : 
                <div className='author-input' style={{ display: none }}>
                    <label htmlFor="author-first-name">Author First Name: </label>
                    <input type="text" name="author-first-name" placeholder="Rick"/>
                    <label htmlFor="author-last-name">Author Last Name: </label>
                    <input type="text" name="author-last-name" placeholder="Riordan" />
                </div> 
                }
            </div> */}
            <div className="createBookButtonContainer">
                <button type="button" className="add-btn" onClick={addBook}>Add Book</button>
            </div>
        </div>
    </div>
  )
}

export default AddBookModal;
