import React from 'react'
import { useState } from 'react'
import * as BooksAPI from '../data/BooksAPI'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

export default function Search() {
    const [query, setQuery] = useState('')
    const [showingBooks, setShowingBooks] = useState([])
    const [books, setBooks] = useState([])

    function updateQuery(query) {
        setQuery(query)
        BooksAPI.search(query)
            .then((books) => {
                if (query.length < 1) return setShowingBooks([])
                setShowingBooks(books)
            })
    }

    function updateShelf(book, shelf) {
        BooksAPI.update(book, shelf).then(() => {
            BooksAPI.getAll().then((books) => {
                setBooks(books);
            });
        });
    }

    return (
        <div className='search-page'>
            <div className='search-bar-section'>
                <input type='text' placeholder='Search by title or author'
                    value={query}
                    onChange={(e) => updateQuery(e.target.value)}
                />
                <Link to='/'>
                    <button className='close-search'>Close</button>
                </Link>
            </div>
            <div className='search-results books'>
                {
                    showingBooks.length > 0 && query.length > 1 && (
                        <BookShelf books={showingBooks} middle="middle" updateShelf={updateShelf} />
                    )
                }
            </div>
        </div>
    )
}
