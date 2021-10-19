import React from 'react';
import './App.css';
import Wallet from './pages/Wallet'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CreateOperator from './pages/CreateOperator'
import Settings from './pages/Settings'
import UpdateOperator from './pages/UpdateOperator';
import Save from './pages/Save'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Wallet} />
          <Route path="/settings" exact component={Settings} />
          <Route path="/create-operator" exact component={CreateOperator} />
          <Route path="/update-operator" exact component={UpdateOperator} />
          <Route path="/save" exact component={Save} />
        </Switch>       
      </Router>
    </div>
  );
}

export default App;
