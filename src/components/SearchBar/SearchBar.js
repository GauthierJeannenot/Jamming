import React from 'react'
import './SearchBar.css'

export function SearchBar() {
    return(
        <div id='SearchBarDiv'>
            <input type='text' placeholder='Type a Song, an Album or an Artist'></input>
        </div>
    )
}