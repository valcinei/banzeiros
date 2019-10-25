import React from 'react';

import './App.css'
import Header from './layout/Header'
import HeaderIcons from './layout/HeaderIcons'
import SearchTicket from './components/SearchTicket'

function App() {
  return (
    <div className="App">
      <div className="header-content">
      <Header></Header>
      <HeaderIcons/>
      </div>
      <div className="search-ticket-container">
        <SearchTicket/>
      </div>
    </div>
  );
}

export default App;
