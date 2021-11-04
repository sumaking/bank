
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import SignInPage from './components/pages/SignInPage';

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/" exact component = {Home}/>
          <Route path="/signin" exact component = {SignInPage}/>
        </Switch>
      </Router>
  );
}

export default App;
