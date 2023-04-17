import React from 'react';
import './App.css';
import { Header } from '../Header/Header'
import { SearchBar } from '../SearchBar/SearchBar'
import { SearchButton } from '../SearchButton/SearchButton'
import { SearchResults } from '../SearchResults/SearchResults'
import { PlayList } from '../PlayList/PlayList'

function App() {

  const [searchResults, setSearchResults] = React.useState([{name:'Suck my Kiss', artist:'RedHotChilliPeppers', album:'BSSM', id:1},{name:'SockRock', artist:'ACDC', album:'Hell', id:2},{name:'Killin in the name', artist:'RATM', album:'Evil Empire', id:3}])
  const [playList, setPlayList] = React.useState([])
  const [playListName, setPlayListName] = React.useState()

  

  return (
    <>
      <Header />
      <SearchBar />
      <SearchButton />
      <div id='results'>
        <SearchResults searchResults={searchResults} setPlayList={setPlayList} />
        <PlayList playList={playList} setPlayList={setPlayList} setPlayListName={setPlayListName}/>
      </div>

    </>
  );
}

export default App;
