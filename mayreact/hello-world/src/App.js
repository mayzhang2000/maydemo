import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import {Contact} from './app/components/Contact';
import {Query} from './app/components/Query';
import {QueryByTestId} from './app/components/QueryByTestId';
import {List} from './app/components/List';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">Welcome</h1>

          <div className="App">
              <BrowserRouter>
                  <div>
                      <Link to="/list">List</Link>{' '}
                      <Link to="/queryByTestId">QueryByTestId</Link>{' '}
                      <Link to="/query">Query</Link>{' '}
                      <Link to="/contact">Contact</Link>{' '}

                      <Switch>
                          <Route exact path="/" render={() => <h1></h1>} />
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
