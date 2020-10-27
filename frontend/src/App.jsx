import React from 'react';
import './App.scss';
// import { BrowseRouter as Router} from 'react-router-dom';
// import Route from 'react-router-dom/Route';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Registration } from './components/index';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path="/login/" component={Registration} />

      </Router>      
    );
  }
};

export default App;
