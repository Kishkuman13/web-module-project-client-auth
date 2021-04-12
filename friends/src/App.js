import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import ProtectedRoute from './components/ProtectedRoute';
import Login from './components/Login';
import FriendsList from './components/FriendsList'

import './App.css'

function App() {
  const logout = () => {
    localStorage.removeItem('token')
  };

  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <Link to='/login'>Login</Link>
            <Link onClick={logout}>Logout</Link>
            <Link to='/friends'>View Friends</Link>
          </nav>
        </header>
        <Switch>
          <ProtectedRoute exact path='/friends' component={FriendsList} />
          <Route path='/login' component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
