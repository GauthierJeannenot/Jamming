import React from "react";
import './Track.css'

export function Track({track, setPlayList, isRemoval, playList}) {

    const onAdd = () => {
        if (playList.some((savedTrack) => savedTrack.id === track.id)){
            return
        }
        setPlayList((prevTracks)=> [...prevTracks, track])
    }
    const onRemove = () => {
        setPlayList((prevTrack) => prevTrack.filter(currentTrack => currentTrack.id !== track.id))
    }
    const renderAction = () => {
        if (isRemoval) {
            return(
                <button onClick={onRemove}>-</button>
            )
        }
        return(
            <button onClick={onAdd}>+</button>
        )
    }
    return(
        <li id="trackId">
            <div>
                <p>name: {track.name}</p>
                <p>artist: {track.artist}</p>
                <p>album: {track.album}</p>
            </div>
            {renderAction()}

        </li>
    )
}