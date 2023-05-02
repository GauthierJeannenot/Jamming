import React from 'react';
import './App.css';
import { Header } from '../Header/Header'
import { SearchBar } from '../SearchBar/SearchBar'
import { SearchResults } from '../SearchResults/SearchResults'
import { PlayList } from '../PlayList/PlayList'
import { Spotify } from '../util/Spotify'
import { PlayListList } from '../PlayListList/PlayListList'

function App() {

  const [searchResults, setSearchResults] = React.useState([])
  const [playList, setPlayList] = React.useState([])
  const [playListName, setPlayListName] = React.useState('')
  const [playListLists, setPlayListLists] = React.useState([])






  return (
    <>

      <div id='App'>
        <Header />
        <SearchBar setSearchResults={setSearchResults} searchResults={searchResults} />
        <div id='App-playlist'>
          <SearchResults
            id="searchResults"
            searchResults={searchResults}
            setPlayList={setPlayList}
            playList={playList} />
          <PlayList
            playList={playList}
            setPlayList={setPlayList}
            setPlayListName={setPlayListName}
            playListName={playListName} />

        </div>
        <div id='playListList'>
          <PlayListList
            playListLists={playListLists}
            setPlayListLists={setPlayListLists}
            setPlayListName={setPlayListName}
            setPlayList={setPlayList} />
        </div>
      </div>
    </>
  );
}

export default App;
