import React from 'react'
import line from '../img/line (1).png'

export default function Book({ book, updateShelf }) {
    function handleChange(e) {
        updateShelf(book, e.target.value)
    }

    return (
        <>
            <h5>{book.title ? book.title : 'This book has no title'}</h5>
            <small>{book.authors ? book.authors.join(', ') : 'This book has no author'}</small>
            <img src={line} alt='yellow line' className='line' />
            {/* <img src={book.imageLinks.smallThumbnail ? book.imageLinks.smallThumbnail : ""} alt={book.title || 'book title'} /> */}
            <select onChange={handleChange} name='shelf' alt='select shelf'>
                <option className='dots' value={book.shelf}></option>
                <option value='currentlyReading'>Currently Reading</option>
                <option value='wantToRead'>Want to Read</option>
                <option value='read'>Read</option>
                <option value='none'>None</option>
            </select>
        </>
    )
}
