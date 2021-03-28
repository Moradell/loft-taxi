import React from 'react';
import PropTypes from 'prop-types';
import { HomeWithAuth } from './components/Home';
import { Map } from './components/Map';
import { Profile } from './components/Profile';
import { HeaderWithAuth } from './components/Header';
import { withAuth } from './components/authContext'

class App extends React.Component {
  static propTypes = {
    navigate: PropTypes.func
  }

  state = { currentPage: 'home' }

  navigateTo = (page) => {
    if (this.props.isLoggedIn) {
      this.setState({ currentPage: page });
    } else {
      this.setState({ currentPage: 'home' });
    }
  }

  render() {
    return (
      <>
        {this.state.currentPage !== "home" && <HeaderWithAuth navigate={this.navigateTo} />}
        <main className="wrapper">
          <section>
            {this.state.currentPage === "home" && <HomeWithAuth navigate={this.navigateTo} />}
            {this.state.currentPage === "map" && <Map />}
            {this.state.currentPage === "profile" && <Profile />}
          </section>
        </main>
      </>
    );
  }
}

export default withAuth(App);