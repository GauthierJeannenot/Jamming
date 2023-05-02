import React from 'react'
import { Track } from '../Track/Track'
import { Spotify } from '../util/Spotify'
import './PlayList.css'

export function PlayList({playList, setPlayList, setPlayListName, playListName}) {
    const nameChange = (e) => {
        setPlayListName(e.target.value)
    }
    const handleClick = async() => {
        const trackUris = playList.map(track => track.uri)
        await Spotify.savePlayList(playListName, trackUris)
        setPlayList([])
        setPlayListName('')

    }

    return(
        <div id='PlayList'>
            <input type='text' defaultValue={playListName} placeholder='New PlayList' onChange={nameChange}></input>
 
            {playList.map(track => <Track track={track} isRemoval={true} setPlayList={setPlayList} key={track.id}/>)}
            <button onClick={handleClick} id='PlayList-save'>Save To Spotify</button>
        </div>
        

    )
}