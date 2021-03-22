import React from 'react';
import Home from './components/Home';
import { Map } from './components/Map';
import { Profile } from './components/Profile';
import { Header } from './components/Header';


const PAGES = {
  home: <Home />,
  map: <Map />,
  profile: <Profile />,
}

class App extends React.Component {
  state = { currentPage: 'home' }

  navigateTo = (page) => {
    this.setState({ currentPage: page });
  }

  render() {
    return (
      <>
        <Header navigate={this.navigateTo} />
        <main className="wrapper">
          <section>
            {PAGES[this.state.currentPage]}
          </section>
        </main>
      </>
    );
  }
}

export default App;
