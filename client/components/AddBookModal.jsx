import React, { useEffect } from 'react';

const AddBookModal = ({setModalOpen, id}) => {
    const addBook = () => {
        fetch(`/api/${id}`, {
            method: POST,
        }).then().catch((err) => {return err});
    }
    const authorArr = [{id: 0, name: "new Author"}];
    useEffect(() => {
        fetch('/api/authors')
            .then(res => {
                console.log(res)
            })
    }, []);

  return (
    <div className='modal-background'>
        <div className='add-book-modal=container'>
            {/* <h2>Add A book to your list!</h2> */}
            <button type='button' className='cancelBtn' onClick={() => setModalOpen(false)}>X</button>
            <div className="createBookFields">
                <label htmlFor="title">Book Title: </label>
                <input name="title" placeholder="The Lightening Thief" value={title} onChange={nameOnChange} />
                {nameError ? (<span className="errorMsg">{nameError}</span>) : null}
            </div>
            <div className="createBookFields">
                <label htmlFor="author">Author: </label>
                <select name="author" onChange={handleAuthorChange}>
                    {authorOptions}
                </select>
            </div>
            <div className="createBookButtonContainer">
                <button type="button" className="addBtn" onClick={addBook}>Add Book</button>
            </div>
        </div>
    </div>
  )
}

export default AddBookModal;
