import React from "react";
import { Spotify } from '../util/Spotify'
import { PlayListItem } from "../PlayListItem/PlayListItem";

export const PlayListList = ({playListLists, setPlayListLists}) => {
    React.useEffect(() => {
        const getPlayListList = async() => {
            const playListList = await Spotify.getUserPlaylists()
            setPlayListLists(playListList)
        }
        getPlayListList()
    }, [setPlayListLists])


    return(
        <div>
            {playListLists.map(playList => <PlayListItem 
                playListName={playList.playListName} 
                playListId={playList.playListId} 
                key={playList.playListId} />)}
        </div>
    )
}