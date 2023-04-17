import React from 'react'
import { SaveToSpotifyButton } from '../SaveToSpotifyButton/SaveToSpotifyButton'
import { Track } from '../Track/Track'

export function PlayList({playList, setPlayList}) {


    return(
        <div>
            <SaveToSpotifyButton />
            {playList.map(track => <Track track={track} isRemoval={true} setPlayList={setPlayList}/>)}
        </div>
        

    )
}