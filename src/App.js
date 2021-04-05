import React from 'react';
import { HomeWithAuth } from './components/Home';
import { Map } from './components/Map';
import { Profile } from './components/Profile';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';

class App extends React.Component {
  render() {
    return (
      <>
        <main className="wrapper">
          <section>
            <Switch>
              <Route exact path='/' component={HomeWithAuth} />
              <Route path='/registration' component={HomeWithAuth} />
              <PrivateRoute path='/map' component={Map} />
              <PrivateRoute path='/profile' component={Profile} />
            </Switch>
          </section>
        </main>
      </>
    );
  }
}

export default connect((state) => ({ isLoggedIn: state.auth.isLoggedIn }))(App);