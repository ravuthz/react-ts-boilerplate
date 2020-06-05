import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import AboutPage from './AboutPage/AboutPage';
import './App.css';
import ContactPage from './ContactPage/ContactPage';
import HomePage from './HomePage/HomePage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App" data-testid="App">
        <header className="App-header">
          <img src="/images/logo.svg" className="App-logo" alt="logo" />
          <nav>
            <Link to="/">Home</Link>&nbsp;
            <Link to="/about">About</Link>&nbsp;
            <Link to="/contact">Contact</Link>&nbsp;
          </nav>
          <Switch>
            <Route exact={true} path="/" component={HomePage} />
            <Route exact={true} path="/about" component={AboutPage} />
            <Route exact={true} path="/contact" component={ContactPage} />
          </Switch>
        </header>
      </div>
    </Router>
  );
};

export default App;
