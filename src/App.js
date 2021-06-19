
import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Game from './components/Game';

function App() {
  return (
      <div>
        <Header />
        <main>
          <Game />
        </main>
      </div>
  );
}

export default App;