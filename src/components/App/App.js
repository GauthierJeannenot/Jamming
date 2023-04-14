import React from 'react';
import './App.css';
import { Header } from '../Header/Header'
import { SearchBar } from '../SearchBar/SearchBar'
import { SearchButton } from '../SearchButton/SearchButton'
import { SearchResults } from '../SearchResults/SearchResults'
import { PlayList } from '../PlayList/PlayList'

function App() {
  return (
    <>
      <Header />
      <SearchBar />
      <SearchButton />
      <div id='results'>
        <SearchResults />
        <PlayList />
      </div>

    </>
  );
}

export default App;
