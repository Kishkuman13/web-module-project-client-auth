import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import ProtectedRoute from './components/ProtectedRoute';
import Login from './components/Login';
import FriendsList from './components/FriendsList'

function App() {
  const logout = () => {
    localStorage.removeItem('token')
  };

  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li>
                <Link to='/login'>Login</Link>
              </li>
              <li>
                <Link onClick={logout}>Logout</Link>
              </li>
              <li>
                <Link to='/friends'>View Friends</Link>
              </li>
            </ul>
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
