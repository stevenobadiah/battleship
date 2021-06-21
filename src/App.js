
import React, { Component } from 'react';
import './style.css';
import Header from './components/Header';
import Game from './components/Game';
import Settings from './components/Settings';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <Switch>
            <Route path="/" 
              render = {() => {
                if (localStorage.getItem('savedSettings') == null) {
                  return <Settings />
                } else {
                  return <Game />
                }
              }}
            />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;