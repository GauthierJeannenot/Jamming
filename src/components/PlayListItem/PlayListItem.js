import React from "react";
import { Spotify } from "../util/Spotify";

export const PlayListItem = ({playListName, playListId, setPlayListName, setPlayList}) => {
    const clickHandler = async() => {
        const playListTracks = await Spotify.getPlayListTracks(playListId)
        setPlayList(playListTracks)
        setPlayListName(playListName)
    }
    return(
        <p onClick={clickHandler}>{playListName}</p>
    )
}