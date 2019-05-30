import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Create from './components/createComponent';
import Edit from './components/editComponent'
import Index from './components/indexComponent';

class App extends Component {
  
  render() {
    return (
      <Router>
        <div className="container">
          <Switch>
              <Route exact path='/create' component={ Create }/>
              <Route path='/edit/:id' component={ Edit } />
              <Route path='/' component={ Index } />
          </Switch>
        </div>
      </Router>
      
    );
  }
}

export default App;