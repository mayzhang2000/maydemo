import React, { Component } from 'react';

import './App.css';

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Contact from './Contact';
import {Query} from './Query';


class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = { keyword: '', data: [], items: [] };
  }

  render() {

    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Link to="/">Query</Link>{' '}
            <Link to="/contact">Contact</Link>{' '} 
            <Link to="/links">Links</Link>{' '} 
            <Switch>
              <Route exact path="/" component={Query} />
              <Route path="/contact" component={Contact} />
              <Route path="/links" render={() => <h1>Links</h1>} />
              <Route render={() => <h1>Page not found</h1>} />
            </Switch>
          </div>
         </BrowserRouter>
      </div>
    );
  }
}

export default App;
