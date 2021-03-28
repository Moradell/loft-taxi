import React from 'react';
import { withAuth } from './authContext';
import './../stylesheets/header.css';
import sprite from './../assets/sprite.svg';

export class Header extends React.Component {
  unauthenticate = (event) => {
    event.preventDefault();
    this.props.logOut();
    this.props.navigate("home");
  };

  render() {
    return (
      <header className="header">
        <div className="header__logo">
          <svg className="header__logo--img">
            <use xlinkHref={`${sprite}#logo`}></use>
          </svg>
          <svg className="header__logo--title">
            <use xlinkHref={`${sprite}#title`}></use>
          </svg>
        </div>
        <ul className="header__menu">
          <li className="header__menu-item active">
            <span onClick={() => { this.props.navigate('map') }}>
              Карта
                </span>
          </li>
          <li className="header__menu-item">
            <span onClick={() => { this.props.navigate('profile') }}>
              Профиль
                </span>
          </li>
          <li className="header__menu-item">
            <span onClick={this.unauthenticate}>
              Выйти
                </span>
          </li>
        </ul>
      </header>
    )
  }
}

export const HeaderWithAuth = withAuth(Header)