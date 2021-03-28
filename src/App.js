import React from 'react';
import PropTypes from 'prop-types';
import { Home } from './components/Home';
import { Map } from './components/Map';
import { Profile } from './components/Profile';
import { Header } from './components/Header';

class App extends React.Component {
  static propTypes = {
    navigate: PropTypes.func
  }

  state = { currentPage: 'home' }

  navigateTo = (page) => {
    this.setState({ currentPage: page });
  }

  render() {
    return (
      <>
        {this.state.currentPage !== "home" && <Header navigate={this.navigateTo} />}
        <main className="wrapper">
          <section>
            {this.state.currentPage === "home" && <Home navigate={this.navigateTo} />}
            {this.state.currentPage === "map" && <Map />}
            {this.state.currentPage === "profile" && <Profile />}
          </section>
        </main>
      </>
    );
  }
}

export default App;