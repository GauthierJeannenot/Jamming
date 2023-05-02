import React from "react";
import { Track } from '../Track/Track'
import './SearchResults.css'

export function SearchResults({searchResults, setPlayList, playList}) {


    return (
        <div id="searchResults">
            <h2>Results</h2>
            <ul>
                {searchResults.map(track => <Track track={track}  setPlayList={setPlayList} playList={playList} key={track.id}/>)}
            </ul>

        </div>


    )
}