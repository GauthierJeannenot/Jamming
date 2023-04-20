import React from 'react';
import './App.css';
import { Header } from '../Header/Header'
import { SearchBar } from '../SearchBar/SearchBar'
import { SearchResults } from '../SearchResults/SearchResults'
import { PlayList } from '../PlayList/PlayList'
import { Spotify } from '../util/Spotify'

function App() {

  const [searchResults, setSearchResults] = React.useState([])
  const [playList, setPlayList] = React.useState([])
  const [playListName, setPlayListName] = React.useState()

  
  

  

  return (
    <>
      <Header />
      <SearchBar setSearchResults={setSearchResults} searchResults={searchResults}/>
      <div id='results'>
        <SearchResults searchResults={searchResults} setPlayList={setPlayList} playList={playList}/>
        <PlayList playList={playList} setPlayList={setPlayList} setPlayListName={setPlayListName}/>
      </div>

    </>
  );
}

export default App;
