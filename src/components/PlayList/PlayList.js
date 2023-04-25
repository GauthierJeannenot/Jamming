import React from 'react'
import { Track } from '../Track/Track'
import { Spotify } from '../util/Spotify'

export function PlayList({playList, setPlayList, setPlayListName, playListName}) {
    const nameChange = (e) => {
        setPlayListName(e.target.value)
    }
    const handleClick = async() => {
        const trackUris = playList.map(track => track.uri)
        await Spotify.savePlayList(playListName, trackUris)
    }

    return(
        <div>
            <input type='text' defaultValue='New PlayList' onChange={nameChange}></input>
 
            {playList.map(track => <Track track={track} isRemoval={true} setPlayList={setPlayList} key={track.id}/>)}
            <button onClick={handleClick}>Save To Spotify</button>
        </div>
        

    )
}