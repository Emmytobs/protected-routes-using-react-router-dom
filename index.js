import React, { Component } from 'react';
import { render } from 'react-dom';
import LandingPage from './LandingPage';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AppLayout from './AppLayout'
import ProtectedAppRoute from './ProtectedAppRoute'
import './style.css';

function App() {
 
  return (
    <Switch>
      <Route path="/" exact component={LandingPage} />
      <ProtectedAppRoute path="/app" exact component={AppLayout}/>
    </Switch>
  );
}

render(
  <BrowserRouter>
  <App />
  </BrowserRouter>  
  , document.getElementById('root'));
