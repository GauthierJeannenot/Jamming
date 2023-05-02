import React from "react";
import { Spotify } from '../util/Spotify'
import { PlayListItem } from "../PlayListItem/PlayListItem";
import './PlayListList.css'
export const PlayListList = ({playListLists, setPlayListLists, setPlayListName, setPlayList}) => {
    React.useEffect(() => {
        const getPlayListList = async() => {
            const playListList = await Spotify.getUserPlaylists()
            setPlayListLists(playListList)
        }
        getPlayListList()
    }, [setPlayListLists])


    return(
        <div id="PlayListList">
            {playListLists.map(playList => <PlayListItem 
                playListName={playList.playListName} 
                playListId={playList.playListId} 
                key={playList.playListId}
                setPlayListName={setPlayListName}
                setPlayList={setPlayList} />)}
        </div>
    )
}