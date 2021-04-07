import React from 'react';
import { Home } from './components/Home';
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
              <Route exact path='/' component={Home} />
              <Route path='/registration' component={Home} />
              <PrivateRoute path='/map' component={Map} />
              <PrivateRoute path='/profile' component={Profile} />
            </Switch>
          </section>
        </main>
      </>
    );
  }
}

export default App;