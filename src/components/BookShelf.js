import React from 'react'
import Book from './Book'

export default function BookShelf({ books, updateShelf, middle }) {
    return (
        <>
            {books.map((book) => (
                <div key={book.id}
                    className=
                    {`book ${middle.id == book.id || middle == 'middle' ? 'middle' : 'side'}`}>
                    <Book book={book} updateShelf={updateShelf} />
                </div>
            ))}
        </>
    )
}
