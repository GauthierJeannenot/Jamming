import React from "react";
import { Track } from '../Track/Track'

export function SearchResults({searchResults, setPlayList}) {
    return (
        <div>
            <h2>Results</h2>
            <ul id="SearchResultsDiv">
                {searchResults.map(track => <Track track={track}  setPlayList={setPlayList} />)}
            </ul>

        </div>


    )
}