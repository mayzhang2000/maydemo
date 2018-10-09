import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import {Contact} from './app/components/Contact';
import {Query} from './app/components/Query';
import {QueryByTestId} from './app/components/QueryByTestId';
import {List} from './app/components/List';
import {Home} from './app/components/Home';
import {Header} from './app/components/Header';
import Helmet from 'react-helmet';

import './App.css';

class App extends Component {
  render() {
    return (

      <div className="App">
        <Helmet title="Test Case Information" />
          <div>
              <BrowserRouter>
                  <div>
                      <Link to="/">Home</Link>{' '}
                      <Link to="/list">List</Link>{' '}
                      <Link to="/queryByTestId">QueryByTestId</Link>{' '}
                      <Link to="/query">Query</Link>{' '}
                      <Link to="/contact">Contact</Link>{' '}
                      <Switch>
                          <Route exact path="/" component={Home} />
                          <Route path="/queryByTestId" component={QueryByTestId} />
                          <Route path="/query" component={Query} />
                          <Route path="/contact" component={Contact} />
                          <Route path="/list" component={List} />
                          <Route render={() => <h1>Page not found</h1>} />
                      </Switch>
                  </div>
              </BrowserRouter>
          </div>
      </div>
    );
  }
}

export default App;
