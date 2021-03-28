import React from 'react';
import PropTypes from 'prop-types';
import './../stylesheets/home.css';
import sprite from './../assets/sprite.svg';
import { LoginWithAuth } from './Login';
import { Registration } from './registration';
import { withAuth } from './authContext'

export class Home extends React.Component {
  static propTypes = {
    checkLogOrOut: PropTypes.func
  }

  state = { logOrOut: 'login' }

  checkLogOrOut = (page) => {
    this.setState({ logOrOut: page })
  }

  render() {
    return (
      <div className='home' >
        <div className='home__left-side'>
          <div className="home__logo">
            <svg className="home__logo--img">
              <use xlinkHref={`${sprite}#logo`}></use>
            </svg>
            <svg className="home__logo--title">
              <use xlinkHref={`${sprite}#title`}></use>
            </svg>
          </div>
        </div>
        <div className='home__right-side'>
          <div className="home__login-form">
            {this.state.logOrOut === "login" &&
              <LoginWithAuth checkLogOrOut={this.checkLogOrOut} navigate={this.props.navigate} />}
            {this.state.logOrOut === "registration" &&
              <Registration checkLogOrOut={this.checkLogOrOut} navigate={this.props.navigate} />}
          </div>
        </div>
      </div>
    )
  }
}

export const HomeWithAuth = withAuth(Home)