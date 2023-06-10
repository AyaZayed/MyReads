import React from 'react'
import homeImg from '../img/myreads.png'

export default function Home() {
    return (
        <div className='home-page'>
            <div className='text-zone'>
                <h1>MyReads</h1>
                <p>MyReads is a bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur veritatis voluptate temporibus iure quasi nam, sequi eum quaerat soluta asperiores deserunt.</p>
            </div>
            <div className='img-zone'>
                <img src={homeImg} alt='books stacked on one another' />
            </div>
        </div>
    )
}
