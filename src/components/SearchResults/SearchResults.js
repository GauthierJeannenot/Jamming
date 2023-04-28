import React from "react";
import { Track } from '../Track/Track'

export function SearchResults({searchResults, setPlayList, playList}) {
    // const trackIdArr = playList.map(track => track.id)
    // const searchResultIdArr = searchResults.map(track => track.id)
    
    // const searchResultFilter = () => {
    //     for (let trackId of trackIdArr) {
    //         searchResultIdArr.filter(currentTrack => currentTrack.id !== trackId)
    //     }
    //     console.log(searchResultIdArr)
    // }
    // searchResultFilter()

    return (
        <div>
            <h2>Results</h2>
            <ul id="SearchResultsDiv">
                {searchResults.map(track => <Track track={track}  setPlayList={setPlayList} playList={playList} key={track.id}/>)}
            </ul>

        </div>


    )
}