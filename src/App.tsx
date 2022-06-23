import React from 'react';
import './App.scss';
import { Header } from './components/header';
import { TrelioBoard } from './components/trello';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='trello-container'>
        <TrelioBoard />
      </div>
    </div>
  );
}

export default App;
