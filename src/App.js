import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './style.css';
import Appbar from './Appbar';
import Navbar from './Navbar';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Appbar />
        <Navbar />
      </div>
    </Router>
  );
}
