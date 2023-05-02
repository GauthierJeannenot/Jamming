import React from "react";
import './Track.css'

export function Track({ track, setPlayList, isRemoval, playList }) {

    const onAdd = () => {
        if (playList.some((savedTrack) => savedTrack.id === track.id)) {
            return
        }
        setPlayList((prevTracks) => [...prevTracks, track])
    }
    const onRemove = () => {
        setPlayList((prevTrack) => prevTrack.filter(currentTrack => currentTrack.id !== track.id))
    }
    const renderAction = () => {
        if (isRemoval) {
            return (
                <button onClick={onRemove} id='Track-action'>-</button>

            )
        }
        return (
            <button onClick={onAdd} id='Track-action'>+</button>
        )
    }
    const renderPreview = () => {
        if (!isRemoval) {
            return (
                <audio controls src={track.preview_url}></audio>
            )
        }
        return


    }
    return (
        <div id="Track">
            <div id="Track-information">
                <h3>{track.name}</h3>
                <p>{track.artist} | {track.album}</p>
                {renderPreview()}
            </div>
            {renderAction()}
        </div>
    )
}