
import React, { Component } from 'react';
import './style.css';
import Header from './components/Header';
import GameLogic from './components/GameLogic';
import Settings from './components/Settings';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <GameLogic />
        </main>
      </div>
    </Router>
  );
}

export default App;

/*
          <Switch>
            <Route path="/" 
              render = {() => {
                if (localStorage.getItem('savedSettings') == null || JSON.parse(localStorage.getItem('savedSettings')).editing === true) {
                  return <Settings />
                } else {
                  return <GameLogic />
                }
              }}
            />
          </Switch>
*/