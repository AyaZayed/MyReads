import React, { useState, useEffect } from 'react'
import * as BooksAPI from '../data/BooksAPI'
import BookShelf from './BookShelf.js'

export default function MyBooksPage() {
    const [books, setBooks] = useState([])

    useEffect(() => {
        BooksAPI.getAll().then((books) => {
            setBooks(books)
        })
    }, [books])

    function removeBook(book, shelf) {
        setBooks((currentState) => ({
            books: currentState.books.filter((b) => {
                return b.id !== book.id;
            }),
        }))
        BooksAPI.update(book, shelf);
    };

    function updateShelf(book, shelf) {
        if (shelf === "none") {
            removeBook(book, shelf);
        } else {
            BooksAPI.update(book, shelf).then(() => {
                BooksAPI.getAll().then((books) => {
                    setBooks(books);
                });
            });
        }
    };

    function filterBooks(shelf) {
        return books.filter((book) => book.shelf === shelf)
    }

    const currentlyReading = filterBooks('currentlyReading')
    const wantToRead = filterBooks('wantToRead')
    const read = filterBooks('read')

    function middle(arr) {
        return arr[Math.round((arr.length - 1) / 2)]
    }

    const shelves = [
        { title: 'Currently Reading', books: currentlyReading, middle: middle(currentlyReading) },
        { title: 'Want to Read', books: wantToRead, middle: middle(wantToRead) },
        { title: 'Read', books: read, middle: middle(read) },
    ]

    return (
        <main className='my-shelf-page'>
            {shelves.map((shelf, idx) => (
                <div className='bookshelf' key={shelf.title.toLowerCase()}>
                    <h1>{shelf.title}</h1>
                    <div className={`books shelf${idx}`}>
                        <BookShelf books={shelf.books}
                            updateShelf={updateShelf} middle={shelf.middle} />
                    </div>
                </div>
            ))}
        </main>
    )
}
