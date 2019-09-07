import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import './App.css';

function App() {
  return(
    <Router>
      <div>
        <Route exact path='/' component={Home}/>
      </div>
    </Router>
  )
}

export default App;
