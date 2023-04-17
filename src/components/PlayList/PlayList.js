import React from 'react'
import { SaveToSpotifyButton } from '../SaveToSpotifyButton/SaveToSpotifyButton'
import { Track } from '../Track/Track'

export function PlayList({playList, setPlayList, setPlayListName}) {
    const nameChange = (e) => {
        setPlayListName(e.target.value)
    }

    return(
        <div>
            <input type='text' defaultValue='New PlayList' onChange={nameChange}></input>
            <SaveToSpotifyButton />
            {playList.map(track => <Track track={track} isRemoval={true} setPlayList={setPlayList}/>)}
        </div>
        

    )
}