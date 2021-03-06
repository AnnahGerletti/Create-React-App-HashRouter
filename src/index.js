import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom'

import './index.css';
import App from './components/App';
import Admin from './components/Admin';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <Router>
    <div>
      <Route exact path='/' component={App} />
      <Route exact path='/admin' component={Admin} />
    </div>  
  </Router>
), document.getElementById('root'))

registerServiceWorker();
