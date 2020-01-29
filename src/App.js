import React, { useContext } from 'react';

import './App.scss';

import SearchState from './contexts/search/actions';

import Search from './components/search';
import History from './components/history';
import Content from './components/content';
import Logo from './components/logo';

import SearchContext from './contexts/search/index';

function App() {
  return (
    <SearchState>
      <div className="App">
        <div className="container">
          <Logo />

          <div class="box box-mini">
            <Search />
          </div>
          <div class="box box-big">
            <Content />
          </div>
          <div class="box box-history">
            <History />
          </div>
        </div>
      </div>
    </SearchState>
  );
}

export default App;
