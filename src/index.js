import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Compare from './pages/Compare';
import Nav from './organisms/Nav';
import Job from './pages/Jobs';
import './index.css';
import Routes from './routes';

export default class App extends Component {
  render() {
    console.log(this.props)
    return (
      <Router>
        <Fragment>
          <Nav />
          <Routes />
        </Fragment>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
