import React from 'react'
import './SearchBar.css'
import { Spotify } from '../util/Spotify'

export function SearchBar({setSearchResults}) {
    const [term, setTerm] = React.useState("")
    const handleTermChange = (e) => {setTerm(e.target.value)}
    const handleSearch = () => {
        Spotify.search(term).then(setSearchResults)
    }



    return (

        <div id='SearchBarDiv'>
            <input type='text' placeholder='Type a Song, an Album or an Artist' onChange={handleTermChange}></input>
            <button onClick={handleSearch}>SEARCH</button>
        </div>


    )
}